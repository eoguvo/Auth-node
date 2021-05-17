import db from '../database';
import bcrypt from 'bcrypt';
import { sign } from './jwt';

const authFailed = (email: string) => {
  throw JSON.stringify({
  status: 401,
  code: 'UNAUTHENTICATED',
  message: `Failed to authenticate user ${email}`,
})}

interface IAuth {
  email: string;
  password: string;
}

export async function authenticate({ email, password }: IAuth) {
  const { rows } = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
  const user = rows[0];

  if(!rows.length)
    authFailed(email+" rows length");

  if(!await bcrypt.compare(password, user.password))
    authFailed(email+" password not match");

  const { id, role } = user;

  return { token: sign({ id, role }), id };
}
