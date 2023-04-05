import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import ProfileLayout from "layouts/ProfileLayout/ProfileLayout";
import ChangePasswordScreen from "screens/ChangePasswordScreen/ChangePasswordScreen";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import OrderScreen from "screens/OrderScreen/OrderScreen";

import ProductDetailScreen from "screens/ProductDetailScreen/ProductDetailScreen";
import ProductsScreen from "screens/ProductsScreen/ProductsScreen";
import SignInScreen from "screens/SignInSreen/SignInSreen";
import SignUpScreen from "screens/SignUpSreen/SignUpSreen";
import UserInfoScreen from "screens/UserInfoScreen/UserInfoScreen";

export const RouteConfigs = [
    {
        path: "/",
        element: HomeScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/sign-up",
        element: SignUpScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/sign-in",
        element: SignInScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/user/:id",
        element: UserInfoScreen,
        isPrivate: true,
        layout: ProfileLayout,
    },
    {
        path: "/user/:id/change-password",
        element: ChangePasswordScreen,
        isPrivate: true,
        layout: ProfileLayout,
    },
    {
        path: "/products/:categoryId",
        element: ProductsScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/products/detail/:id",
        element: ProductDetailScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/user/:id/order",
        element: OrderScreen,
        isPrivate: true,
        layout: ProfileLayout,

    },
]