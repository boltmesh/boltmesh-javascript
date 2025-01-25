import createClient from 'openapi-react-query'

import { api as client } from './api'

export const api = createClient(client)
