import { isMatch } from 'lodash-es'
import {
  createImmutableHook,
  createInfiniteHook,
  createMutateHook,
  createQueryHook
} from 'swr-openapi'

import { api as client } from './api'

const PREFIX = 'boltmesh-openapi'

export const useQuery = createQueryHook(client, PREFIX)
export const useImmutable = createImmutableHook(client, PREFIX)
export const useInfinite = createInfiniteHook(client, PREFIX)
export const useMutate = createMutateHook(client, PREFIX, isMatch)
