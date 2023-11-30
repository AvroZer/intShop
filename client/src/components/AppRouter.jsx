import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { ROUTES } from "../utils/constants";
import { Context } from '..';

const AppRouter = () => {
    const { user } = useContext(Context);

    console.log(user);
    return ( 
        <Routes>
            {user.isAuth && authRoutes.map(({path, page}) =>
                <Route key={path} path={path} element={page} exact/>
            )};
            {publicRoutes.map(({path, page}) =>
                <Route key={path} path={path} element={page} exact/>
            )}
            <Route path="*" element={<Navigate to={ROUTES.SHOP_ROUTE} replace />} />
        </Routes>
    );
};

export default AppRouter;
