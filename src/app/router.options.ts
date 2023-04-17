import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: () => {
    const routes = [
      {
        name: 'home',
        path: `/`,
        component: () => import('~/pages/home.vue'),
      },
    ]
    return routes
  },
}
