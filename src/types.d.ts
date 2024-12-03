export type Todo = {
  id: number
  title: string
  done: boolean
}

export type TodoError = {
  message: string
}

export type TodoResponse = {
  success: boolean
  message?: string
  errors?: Array<TodoError>
}