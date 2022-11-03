import { Fragment, Suspense } from "react"
import { Outlet } from "react-router-dom";

import UserMenu from "./UserMenu/UserMenu";



export default function AppBar() {
    return (
        <Fragment>
            <header className="header container">
                <UserMenu />
            </header>
        </Fragment>
    )
}