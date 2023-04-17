import { FetchOptions } from 'ofetch'

export default function useAccountFetch<DataT>(endpoint: string, callOptions?: FetchOptions<'json'>): Promise<DataT> {
  const accountStore = useAccountStore()

  return useApiFetch<DataT>(endpoint, {
    ...callOptions,
    onRequest({ request, options }) {
      options.headers = new Headers(options.headers)
      const authToken = accountStore.getAuthToken()
      if (authToken) {
        options.headers.set('authorization', authToken)
      }
    },
  })
}
