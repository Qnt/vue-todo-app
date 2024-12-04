import type { InjectionKey } from 'vue'
import type { Todo } from './types'

export const toggleTodoStatusKey = Symbol() as InjectionKey<(id: Todo['id']) => void>
export const removeTodoKey = Symbol() as InjectionKey<(id: Todo['id']) => void>
