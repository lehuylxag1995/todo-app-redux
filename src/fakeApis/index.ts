import { createServer, Model, Request } from 'miragejs'

export const setupServer = () => {
  createServer({
    models: {
      todos: Model
    },
    routes() {
      this.get('/api/todos', (schema: any) => {
        return schema.todos.all()
      })

      this.post('/api/todos', (schema: any, request: any) => {
        const payload = JSON.parse(request.requestBody)
        return schema.todos.create(payload)
      })

      this.put('/api/todos', (schema: any, request: any) => {
        const id = JSON.parse(request.requestBody)
        const todo = schema.todos.find(id)
        return todo.update({ completed: !todo.completed })
      })
    }
  })
}
