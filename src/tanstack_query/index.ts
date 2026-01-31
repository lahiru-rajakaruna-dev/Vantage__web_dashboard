import { QueryClient } from '@tanstack/solid-query'





let queryClient: QueryClient;


export function getQueryClientInstance() {
    if (!queryClient) {
        queryClient = new QueryClient({
                                          defaultOptions: {
                                              queries  : {
                                                  refetchOnMount: true,
                                                  gcTime        : 0,
                                                  staleTime     : 0,
                                                  throwOnError  : false,
                                                  retry         : 3,
                                                  retryOnMount  : true,
                                                  retryDelay    : 1000 * 30
                                                  
                                              },
                                              mutations: {
                                                  onError({ cause, message, name, stack }) {
                                                      if (import.meta.env.DEV) {
                                                          console.debug(stack)
                                                      }
                                                      console.error({ name, message, cause })
                                                  }
                                              }
                                          }
                                          
                                      }
        )
    }
    
    return queryClient
}
