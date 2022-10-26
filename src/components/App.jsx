import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { Movies } from './Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
        </Route>
        {/* <Route index element={<Movies />} /> */}
      </Routes>
    </>
  );
};
