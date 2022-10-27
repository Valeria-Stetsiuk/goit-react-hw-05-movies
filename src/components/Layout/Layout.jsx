import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
