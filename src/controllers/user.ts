import { Request, Response } from 'express';
import db from '../database';
import bcrypt from 'bcrypt';
import Joi from 'joi';
import { sign } from '../helpers/jwt';

export class UserController {
  async list(req: Request, res: Response) {
    const { rows } = await db.query("SELECT name, email, id FROM users ORDER BY id ASC;"); 
    if(!rows.length)
      return res.status(204).json({ error: 'No content' });
    
    res.status(200).json(rows);
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;

    const { rows } = await db.query(`SELECT id, name, email, role FROM users WHERE id = $1;`, [id]); 

    if(!rows.length)
      return res.status(404).json({ error: 'Not Found' });

    res.status(200).json(rows[0]);
  }

  async sign(req: Request, res: Response) {
    const { name, email, password } = req.body;
    
    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(100),
      password: Joi.string().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
    })

    try { await schema.validateAsync(req.body); } 
    catch(error) {
      return res.status(401).send({ error: error.details[0].message });
    }

    const user = await db.query('SELECT * FROM users WHERE email = $1', [email])
    if(user.rows.length !== 0) return res.status(409).send({ error: 'User already exists' });

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const { rows } = await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email;`, [name, email, hash]);
    const { id, role, ...rest } = rows[0];
    const token = sign({ id, role });

    res.status(201).json({ id, ...rest, token });
  }

  async auth(req: Request, res: Response) {
    const { token, id } = res.locals;

    res.status(200).send({ id, token });
  }

  async update(req: Request, res: Response) {
    const { name, password, role } = req.body;
    const { id } = req.params;
    const user = res.locals.user;

    if(id != user.id && user.role !== "ADMIN")
      return res.status(405).json({ error: "Not allowed" })

    if(user.role !== "ADMIN" && role)
      return res.status(405).json({ error: "Not allowed" })

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const { rows } = await db.query(`UPDATE users SET name = $1, password = $2 WHERE id = $3 RETURNING id, name, email;`, [name, hash, user.id]);

    res.status(201).json(rows[0]);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const { rows } = await db.query(`DELETE FROM users WHERE id = $1 RETURNING id, name, email;`, [id]);

    res.status(202).json(rows[0]);
  }
}