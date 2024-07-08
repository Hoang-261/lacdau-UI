import Home from '~/pages/Home/Home';
import Keyboard from '~/pages/Keyboard/Keyboard';
import Keycap from '~/pages/Keycap/Keycap';
import Mouse from '~/pages/Mouse/Mouse';
import News from '~/pages/News/News';
import Switch from '~/pages/Switch/Switch';
import Kit from '~/pages/Kit/Kit';
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
        path: '/kit',
        component: Kit,
    },
    {
        path: '/mouse',
        component: Mouse,
    },
    {
        path: '/news',
        component: News,
    },
    {
        path: '/switch',
        component: Switch,
    },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
