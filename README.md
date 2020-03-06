# graphql-object

> Use GraphQL syntax to query into an object in-memory.

[![npm](https://img.shields.io/npm/v/graphql-object)](https://www.npmjs.com/package/graphql-object)

[![npm add graphql-object (copy)](https://copyhaste.com/i?t=npm%20add%20graphql-object)](https://copyhaste.com/c?t=npm%20add%20graphql-object "npm add graphql-object (copy)")
[![yarn add graphql-object (copy)](https://copyhaste.com/i?t=yarn%20add%20graphql-object)](https://copyhaste.com/c?t=yarn%20add%20graphql-object "yarn add graphql-object (copy)")

A dependency-free micro-library to letting you select from an object using GraphQL syntax.
It's lighter than alternatives like [`graphql-anywhere`](https://www.npmjs.com/package/graphql-anywhere).

To avoid dependency on the heavy `graphql` library as a peer dependency, it's recommended to use [`graphql-tag`](https://github.com/apollographql/graphql-tag) for string query syntax
along with [`babel-plugin-graphql-tag`](https://github.com/gajus/babel-plugin-graphql-tag)
to pre-compile them at build-time.

This library could be handy when when migrating existing traditional applications that get data from REST endpoints to a GraphQL ecosystem
by decoupling the fetching of that data from the querying into it for usage in components.

Or, it could be the basis for an architecture to switch to persisted queries from REST endpoints at runtime in production,
while still using real-time GraphQL queries in development environments.

To keep it light, it does not support `@skip`, `@include`, arguments, variables, fragments, or aliases at this time.

```js
import gql from 'graphql-tag'
import graphql from 'graphql-object'

const object = {
  firstName: 'Bill',
  lastName: 'Gates',
  job: {
    title: 'CEO',
    extra: true,
    company: {
      name: 'Microsoft',
      address: 'Redmond, WA 98052'
    }
  }
}

const query = gql`
  {
    firstName
    lastName
    job {
      title
      company {
        name
      }
    }
  }
`

const result = graphql(object, query)
// =>
{
  firstName: 'Bill',
  lastName: 'Gates',
  job: {
    title: 'CEO',
    company: {
      name: 'Microsoft',
    }
  }
}
```
