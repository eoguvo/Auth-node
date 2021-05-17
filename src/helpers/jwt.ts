import jwt, { SignOptions } from 'jsonwebtoken';

import { crypto as config } from '../config';

const signOptions: SignOptions = {
  algorithm: 'RS256',
  expiresIn: '2d'
};

export const sign = (payload: string | object | Buffer) => jwt.sign(payload, config.jwt.privateKey, signOptions);

export const verify = (token: string) => new Promise((resolve, reject) => {
  jwt.verify(
    token,
    config.jwt.publicKey,
    (error, data) => error ? reject(error) : resolve(data)
  )
})