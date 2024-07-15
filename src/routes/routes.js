import Home from '~/pages/Home/Home';
import InfoProduct from '~/pages/InfoProduct/InfoProduct';
import Keyboard from '~/pages/Keyboard/Keyboard';
import Keycap from '~/pages/Keycap/Keycap';
import Mouse from '~/pages/Mouse/Mouse';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/keyboard',
        component: Keyboard,
    },
    {
        path: '/keycap',
        component: Keycap,
    },
    {
        path: '/mouse',
        component: Mouse,
    },
    {
        path: '/keyboard/:name',
        component: InfoProduct,
    },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
