import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './page/Error/Error'
import Layout from './components/Layout/Layout'
import Home from './page/Home/Home'
import UserDescription from './page/UserDescription/UserDescription'

const routes = [
  {
    path: '/',
    element: <Layout title='Жилфонд' subtitle='Пользователь' />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/users/:userId',
        element: <UserDescription description='' />,
      }
    ]
  }
]

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
