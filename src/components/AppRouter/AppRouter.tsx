// src/Router.tsx
import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';
import { AppLayout } from '../../layouts/AppLayout';
import { Balance } from '../../routes/balance';
import { Dashboard } from '../../routes/dashboard';
import { Holdings } from '../../routes/holdings';
import { NotFound } from '../../routes/not-found';
import { Positions } from '../../routes/positions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // redirect home to dashboard
      {
        index: true,
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/holdings",
        element: <Holdings />,
      },
      {
        path: "/positions",
        element: <Positions />,
      },
      {
        path: "/balance",
        element: <Balance />,
      },
      // any other path shows not found inside the app layout
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);


const AppRouter: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRouter;