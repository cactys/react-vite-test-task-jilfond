import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './page/Error/Error'
import Layout from './components/Layout/Layout'
import Home from './Page/Home/Home'
import UserDescription from './Page/UserDescription/UserDescription'

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
        element: <UserDescription />,
      }
    ]
  }
]

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
