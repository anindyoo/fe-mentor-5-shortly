import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';

const App = () => {
  const routes = [
    {
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ];

  const routeConfig = {
    basename: '/frontend-mentor_5-url-shortening-api-challenge-solution',
  };

  const router = createBrowserRouter(routes, routeConfig);

  return (
    <div className="
    APP-CONTAINER
    w-screen overflow-x-hidden"
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
