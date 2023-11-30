import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth/Auth";
import Shop from "./pages/Shop/Shop";
import DevicePage from "./pages/DevicePage/DevicePage";
import { ROUTES } from "./utils/constants";

export const authRoutes = [
    {
        path: ROUTES.ADMIN_ROUTE,
        page: <Admin />,
    },
    {
        path: ROUTES.CART_ROUTE,
        page: <Cart />,
    },
];

export const publicRoutes = [
    {
        path: ROUTES.SHOP_ROUTE,
        page: <Shop />,
    },
    {
        path: ROUTES.LOGIN_ROUTE,
        page: <Auth />,
    },
    {
        path: ROUTES.REG_ROUTE,
        page: <Auth />,
    },
    {
        path: ROUTES.DEVICE_ROUTE,
        page: <DevicePage />,
    },
];
