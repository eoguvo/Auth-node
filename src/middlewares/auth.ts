import { Request, Response, NextFunction } from 'express';
import { authenticate } from '../helpers/auth';
import { verify } from '../helpers/jwt';

export async function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if(!authHeader)
    return res.status(401).send({ error: 'No Token provided' });

  const parts = authHeader.split(' ');

  if (!(parts.length === 2)) 
    return res.status(401).send({error: 'token error'});

  const [scheme, token] = parts;

  if (scheme !== "Bearer")
    return res.status(401).send({ error: 'token malformated' });

  try {
    res.locals.user = await verify(token);

    next();
  } catch (err) {
    res.status(401).json({ code: 'UNAUTHENTICATED', message: 'Invalid token' })
  }
}

export async function authenticated(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  try {
    const { token, id } = await authenticate({ email, password });
    Object.assign(res.locals, { token, id });
    next();
  } catch (err) {
    const { status, code, message } = JSON.parse(err);
    res.status(status).send({ code, message });
  }
}

export function hasPermission(req: Request, res: Response, next: NextFunction) {
  const { role } = req.body;
  const { id } = req.params;
  const user = res.locals.user;

  if(id != user.id && user.role !== "ADMIN")
    return res.status(405).json({ error: "Not allowed" })

  if(user.role !== "ADMIN" && role)
    return res.status(405).json({ error: "Not allowed" })

  next();
}

// https://stackoverflow.com/questions/35749833/typescript-function-taking-one-or-array-of-objects/35750134#answer-35750134
export function authorized(...allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    !allowedRoles.includes(res.locals.user.role)
      ? res.status(405).json({ error: "Not allowed" })
      : next();
  }

}
