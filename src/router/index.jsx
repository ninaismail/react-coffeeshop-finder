// src/routes.tsx
import React from 'react';
import RootLayout from './layouts/RootLayout';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, // Default route for "/"
        Component: React.lazy(() => import('./pages/Home')), // Lazy load Home
      },
      {
        path: 'about',
        Component: React.lazy(() => import('./pages/About')), // Lazy load About
      },
      {
        path: 'products',
        Component: React.lazy(() => import('./pages/Products')), // Lazy load Products
      },
      {
        path: 'todo',
        Component: React.lazy(() => import('./pages/TodoPractice')), // Lazy load TodoPractice
      },
      {
        path: 'mycard',
        Component: React.lazy(() => import('./components/Products/OrdersForm')), // Lazy load OrdersForm
      },
      {
        path: 'products/:id',
        lazy: async () => {
          const Component = (await import('./components/Products/ProductDetails')).default;
          return { Component };
        }, // Lazy load ProductDetails
      },
      {
        path: '*', // Catch-all route for 404 pages
        Component: React.lazy(() => import('./pages/NotFound')), // Lazy load NotFound page
      },
    ],
  },
];
