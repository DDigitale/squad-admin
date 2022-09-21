import React from 'react'
import ReactDOM from 'react-dom/client'
import 'styles/constants.scss'
import 'styles/reset.scss'
import 'styles/normalize.scss'
import 'styles/index.scss'
import App from './App'
import { Provider } from 'react-redux'
import store from 'store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
)
