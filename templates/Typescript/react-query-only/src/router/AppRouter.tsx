import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes, { AppRoute } from './routes';
import { ToastContainer } from 'react-toastify';

export default function AppRouter() {
  const renderRoutes = (routes: AppRoute[]) =>
    routes.map(({ path, Component, children, index }) =>
      index ? (
        <Route key={path || Math.random()} index element={<Component />} />
      ) : (
        <Route key={path || Math.random()} path={path} element={<Component />}>
          {children && renderRoutes(children)}
        </Route>
      )
    );

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>{renderRoutes(routes)}</Routes>
      </BrowserRouter>
    </>
  );
}
