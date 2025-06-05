import { isMatch } from 'lodash-es'
import {
  createImmutableHook,
  createInfiniteHook,
  createMutateHook,
  createQueryHook
} from 'swr-openapi'

import { BoltmeshOpenAPI } from './api'
import type { Input } from './types'

const PREFIX = 'boltmesh-openapi'

export class BoltmeshOpenAPISWR {
  public useQuery: ReturnType<typeof createQueryHook>
  public useImmutable: ReturnType<typeof createImmutableHook>
  public useInfinite: ReturnType<typeof createInfiniteHook>
  public useMutate: ReturnType<typeof createMutateHook>

  constructor(input: Input) {
    const api = new BoltmeshOpenAPI({ ...input })

    this.useQuery = createQueryHook(api.client, PREFIX)
    this.useImmutable = createImmutableHook(api.client, PREFIX)
    this.useInfinite = createInfiniteHook(api.client, PREFIX)
    this.useMutate = createMutateHook(api.client, PREFIX, isMatch)
  }
}
