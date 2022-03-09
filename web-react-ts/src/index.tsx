import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import * as serviceWorker from './serviceWorker'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0ProviderWithHistory } from './auth0-provider-with-history'
import { EnvProvider } from './context/env.context'

const uri = process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4001/graphql'
const cache = new InMemoryCache()

const client = new ApolloClient({
  uri,
  cache,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <EnvProvider>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
        </EnvProvider>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
