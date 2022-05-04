import 'dotenv/config'

type EnvTypes = {
  port: string
}

export const env: EnvTypes = {
  port: process.env.PORT ?? '3333'
}
