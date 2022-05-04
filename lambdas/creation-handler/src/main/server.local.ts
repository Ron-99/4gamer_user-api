import './config/module-alias'
import { app, env } from '@/main/config'
import { Request, Response, json } from 'express'

app.use(json())


app.post('/', async(req: Request, res: Response): Promise<Response> => {
  const { body } = req

  try{
    const response = body

    return res.json({
      statusCode: 200,
      response
    })
  }catch(error) {
    return res.json({
      statusCode: 500,
      error
    })
  }
})

app.listen(env.port, () => {
  console.log(`Server running at http://localhost:${env.port}`)
})
