# Boltmesh OpenAPI SDK

## Install

```shell
npm install @boltmesh/api
```

## Usage Examples

### Basic Usage

```ts
import { BoltmeshOpenAPI } from '@boltmesh/api'

const boltmeshOpenAPI = new BoltmeshOpenAPI({
  rootKey: "[Your team's root key]"
})

const { data, error } = await boltmeshOpenAPI.client.GET('/v1/waitlists/{id}', {
  params: {
    path: {
      id: 'xxx'
    }
  }
})
```

### React Query

```tsx
import { BoltmeshOpenAPIReactQuery } from '@boltmesh/api/react-query'

const api = new BoltmeshOpenAPIReactQuery({
  rootKey: "[Your team's root key]"
})

const MyComponent = () => {
  const { data, error, isLoading } = api.client.useQuery('get', '/v1/waitlists/{id}/count', {
    params: {
      path: {
        id: '[Project ID]'
      }
    }
  })

  if (isLoading || !data) return 'Loading...'

  if (error) return `An error occured: ${error}`

  return <div>Waitlist item count: {data?.total ?? 0}</div>
}
```

### SWR

```tsx
import { BoltmeshOpenAPISWR } from '@boltmesh/api/swr'

const api = new BoltmeshOpenAPISWR({
  rootKey: "[Your team's root key]"
})

const MyComponent = () => {
  const { data, error, isLoading } = api.useQuery('/v1/waitlists/{id}/count', {
    params: {
      path: {
        id: '[Project ID]'
      }
    }
  })

  if (isLoading || !data) return 'Loading...'

  if (error) return `An error occured: ${error}`

  return <div>Waitlist item count: {data?.total ?? 0}</div>
}
```
