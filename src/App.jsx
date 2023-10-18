import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Error from './page/Error/Error';
import Home from './page/Home/Home';

const routes = [
  {
    path: '/',
    element: <Layout title="Жилфонд" subtitle="Пользователь" />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
