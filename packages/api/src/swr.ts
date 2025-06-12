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

function creatQuery(api: BoltmeshOpenAPI) {
  return createQueryHook(api.client, PREFIX)
}

function creatImmutable(api: BoltmeshOpenAPI) {
  return createImmutableHook(api.client, PREFIX)
}

function creatInfinite(api: BoltmeshOpenAPI) {
  return createInfiniteHook(api.client, PREFIX)
}

function creatMutate(api: BoltmeshOpenAPI) {
  return createMutateHook(api.client, PREFIX, isMatch)
}

export class BoltmeshOpenAPISWR {
  public useQuery: ReturnType<typeof creatQuery>
  public useImmutable: ReturnType<typeof creatImmutable>
  public useInfinite: ReturnType<typeof creatInfinite>
  public useMutate: ReturnType<typeof creatMutate>

  constructor(input: Input) {
    const api = new BoltmeshOpenAPI({ ...input })

    this.useQuery = creatQuery(api)
    this.useImmutable = creatImmutable(api)
    this.useInfinite = creatInfinite(api)
    this.useMutate = creatMutate(api)
  }
}
