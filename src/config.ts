import { Secret } from "jsonwebtoken"

interface Icrypto {
  hashSaltRounds: number;
  jwt: {
    privateKey: Secret | string,
    publicKey: Secret | string
  }
}

export const crypto: Icrypto = {
  hashSaltRounds: 10,
  jwt: {
    privateKey: process.env.JWT_PRIVATE_KEY || "",
    publicKey: process.env.JWT_PUBLIC_KEY || "",
  }
}

export const database = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
}
