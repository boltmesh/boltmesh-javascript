# Boltmesh OpenAPI SDK

## Install

```shell
npm install @boltmesh/api
```

## Usage Examples

### Basic Usage

```ts
import { api } from '@boltmesh/api'

const { data, error } = await api.GET('/v1/waitlists', {
  headers: {
    Authentication: "Bearer [Your team's root key]"
  },
  params: {
    query: {
      search: 'My Project Name',
      limit: 10,
      offset: 0
    }
  }
})
```

### React Query

```tsx
import { api } from '@boltmesh/api/react-query'

const MyComponent = () => {
  const { data, error, isLoading } = api.useQuery('get', '/v1/waitlists', {
    headers: {
      Authentication: "Bearer [Your team's root key]"
    },
    params: {
      query: {
        search: 'My Project Name',
        limit: 10,
        offset: 0
      }
    }
  })

  if (isLoading || !data) return 'Loading...'

  if (error) return `An error occured: ${error.message}`

  return <div>Waitlist project count: {data?.projects.length ?? 0}</div>
}
```

### SWR

```tsx
import { useQuery } from '@boltmesh/api/swr'

const MyComponent = () => {
  const { data, error, isLoading } = useQuery('/v1/waitlists', {
    headers: {
      Authentication: "Bearer [Your team's root key]"
    },
    params: {
      query: {
        search: 'My Project Name',
        limit: 10,
        offset: 0
      }
    }
  })

  if (isLoading || !data) return 'Loading...'

  if (error) return `An error occured: ${error.message}`

  return <div>Waitlist project count: {data?.projects.length ?? 0}</div>
}
```
