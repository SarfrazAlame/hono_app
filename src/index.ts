import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {

  return c.json({
    name: "sarfraz ashrafi",
    age: "21"
  })
})

app.post("/user", async (c) => {
  const title = await c.req.json()
  console.log(title)
  console.log(c.req.header("Authorization"))
  console.log(c.req.method)
  console.log(c.req.query("param"))
  return c.json(title)
})

export default app