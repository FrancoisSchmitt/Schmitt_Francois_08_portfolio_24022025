import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './normalize.css';
import reportWebVitals from './reportWebVitals';

import Homepage from './pages/homepage';

import ThermsOfUsage from './pages/thermsOfuse';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import ProjectPage from './pages/projectPages/project';

import DetailProject from './pages/projectPages/detail-project';
import Error404 from './pages/404';

import { Outlet } from 'react-router-dom';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Carrer from './pages/carrerPages';

const ScrollToTop = ({ children }) => {
      const { pathname } = useLocation();

      useEffect(() => {
            window.scrollTo(0, 0);
      }, [pathname]);

      return children || null;
};

export default ScrollToTop;

const root = ReactDOM.createRoot(document.getElementById('root'));
const PageLayout = () => (
      <>
            <Header />
            <Outlet />
            <Footer />
      </>
);
root.render(
      <React.StrictMode>
            <BrowserRouter>
                  <ScrollToTop>
                        <Routes>
                              <Route element={<PageLayout />}>
                                    <Route path="/" element={<Homepage />} />
                                    <Route
                                          path="/Project"
                                          element={<ProjectPage />}
                                    />
                                    <Route
                                          path="/project/:title"
                                          element={<DetailProject />}
                                    />
                                    <Route
                                          path="/Carrer"
                                          element={<Carrer />}
                                    />

                                    <Route
                                          path="/therms-of-usage"
                                          element={<ThermsOfUsage />}
                                    />
                              </Route>
                              <Route path="/404" element={<Error404 />} />
                              <Route path="*" element={<Error404 />} />
                        </Routes>
                  </ScrollToTop>
            </BrowserRouter>
      </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
