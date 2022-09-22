import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import Default from './Layout/Default';
import Admin from './Layout/AdminLayout';
import { useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from './Layout/AdminLayout';

function App() {
    const username = useSelector((state) => state.user.username);
    let routes = publicRoutes;

    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((route, index) => {
                        let Layout = Default;
                        if (route.Layout) {
                            Layout = route.Layout;
                        }

                        const Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
