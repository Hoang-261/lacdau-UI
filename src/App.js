import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment, useEffect, useState, createContext } from 'react';
import request from '~/utils/request';

export const dataApi = createContext();
function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        request.get().then((res) => setData(res.data));
    }, []);
    return (
        <Router>
            <dataApi.Provider value={data}>
                <div className="App">
                    {/* {console.log(data)} */}
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
