import { useApi } from './useCustomFetch'

const useTodo = () => {
  const getTodoApi = async (id: number) => {
    return await useApi(`/evm/todos/${id}`)
  }

  const getUsersApi = async () => {
    return await useApi('/api/users')
  }

  return {
    getUsersApi,
    getTodoApi,
  }
}

export default useTodo
