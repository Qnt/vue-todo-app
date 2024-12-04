export type Todo = {
  id: string
  title: string
  done: boolean
}

export type TodoError = {
  message: string
}

export type TodoNotification = {
  success: boolean
  message?: string
  errors?: Array<TodoError>
}
