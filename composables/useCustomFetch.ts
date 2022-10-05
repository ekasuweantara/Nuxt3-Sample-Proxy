const useApi = async <T = unknown>(...args: Parameters<typeof $fetch>) => {
  const config = useRuntimeConfig()
  
  return await useFetch<T>(args[0], {
    baseURL: config.public.baseURL,
    ...args[1],
    initialCache: false,
  })
}

export { useApi }
