import { createQueryHook } from 'swr-openapi'

import { api as client } from './api'

export const useAPI = createQueryHook(client, 'boltmesh-openapi')
