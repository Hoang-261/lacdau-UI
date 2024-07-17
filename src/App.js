import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment, useEffect, useState, createContext } from 'react';
import request from '~/utils/request';
import 'bootstrap/dist/css/bootstrap.min.css';
export const dataApi = createContext();
function App() {
    const [data, setData] = useState(null);
    const [cart, setCart] = useState([]);
    const fetchApi = async () => {
        const res = await request.get();
        setData(res.data);
    };
    useEffect(() => {
        fetchApi();
    }, []);

    const dataContext = { data, cart, setCart };

    return (
        <Router>
            <dataApi.Provider value={dataContext}>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

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
            </dataApi.Provider>
        </Router>
    );
}

export default App;
