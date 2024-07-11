import { createHashRouter, RouterProvider } from 'react-router-dom';
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

  const router = createHashRouter(routes);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
