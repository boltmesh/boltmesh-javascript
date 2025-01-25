import createAPIClient from 'openapi-fetch'

import type { paths } from './schema'

export const api = createAPIClient<paths>({
  baseUrl: 'https://api.boltmesh.com/v1/'
})
