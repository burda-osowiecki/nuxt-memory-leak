import { ofetch, FetchOptions } from 'ofetch'

// https://github.com/unjs/ofetch
export async function useApiFetch<DataT>(endpoint: string, options?: FetchOptions<'json'>): Promise<DataT> {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = `${runtimeConfig.public.apiUrl}`

  const headers = {
    ...options?.headers,
  }

  const data = await ofetch<DataT>(endpoint, {
    ...options,
    baseURL,
    headers,
  })

  return data
}
