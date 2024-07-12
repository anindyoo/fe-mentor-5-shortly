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

  const router = createBrowserRouter(routes);

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
