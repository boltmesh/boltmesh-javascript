import createAPIClient from 'openapi-fetch'

import type { paths } from './schema'
import type { Input } from './types'

export class BoltmeshOpenAPI {
  public client: ReturnType<typeof createAPIClient<paths>>

  constructor({ rootKey, baseUrl }: Input) {
    this.client = createAPIClient<paths>({
      headers: {
        Authorization: `Bearer ${rootKey}`
      },
      baseUrl: baseUrl ?? 'https://api.boltmesh.com'
    })
  }
}
