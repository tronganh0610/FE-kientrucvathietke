import { lazy } from "react";

const router = [
    {
        path: "/login",
        isPrivate: false,
        components: lazy(() => import("../pages/login/Login")),
    },
    {
        isPrivate: false,
        path: "/forgot-password",
        components: lazy(() => import("../pages/login/Forgot")),
    },
];
export { router };
