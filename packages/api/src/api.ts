import createAPIClient from 'openapi-fetch'

import type { paths } from './schema.d'
import type { Input } from './types'

export type Schema = paths

export type { paths }

export class BoltmeshOpenAPI {
  public client: ReturnType<typeof createAPIClient<Schema>>

  constructor({ rootKey, baseUrl }: Input) {
    this.client = createAPIClient<Schema>({
      headers: {
        Authorization: `Bearer ${rootKey}`
      },
      baseUrl: baseUrl ?? 'https://api.boltmesh.com'
    })
  }
}
