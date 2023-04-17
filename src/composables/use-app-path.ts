export function useAppPath(): string {
  const appConfig = useAppConfig()
  const runtimeConfig = useRuntimeConfig()

  return runtimeConfig.public.origin + appConfig.baseUrl
}
