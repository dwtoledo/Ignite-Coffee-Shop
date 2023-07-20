import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { OrderStatus } from './pages/OrderStatus'
import { DefaultLayout } from './layouts/DefaultLayout'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/order-status',
        element: <OrderStatus />,
      },
    ],
  },
])
