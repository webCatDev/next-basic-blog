import { Fragment } from "react";
import MainNavigation from "./main-navigation/MainNavigation";

const Layout = ({children}) => {
    return (
        <Fragment>
            <MainNavigation />
            <main>{children}</main>
        </Fragment>
    );
}

export default Layout;