import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../squad-stats/app/styles/constants.scss'
import '../../squad-stats/app/styles/reset.scss'
import '../../squad-stats/app/styles/normalize.scss'
import 'styles/index.scss'
import App from './App'
import { Provider } from 'react-redux'
import store from 'store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter as Router } from 'react-router-dom'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </Router>
)
