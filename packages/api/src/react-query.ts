import createClient, { type OpenapiQueryClient } from 'openapi-react-query'

import { BoltmeshOpenAPI } from './api'
import type { paths } from './schema.d'
import type { Input } from './types'

export class BoltmeshOpenAPIReactQuery {
  public client: OpenapiQueryClient<paths>

  constructor(input: Input) {
    const api = new BoltmeshOpenAPI({ ...input })

    this.client = createClient(api.client)
  }
}
