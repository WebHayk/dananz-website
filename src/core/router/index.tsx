import {lazy, Suspense} from "react";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {ROUTES} from "../models/enums";

const HomePage = lazy(() => import("../../pages"));

export const AppRouter = () => {
    return createBrowserRouter(
        createRoutesFromElements(
            <Route
                path={ROUTES.MAIN}
                element={
                    <Suspense fallback={""}>
                        <HomePage/>
                    </Suspense>
                }
            />
        )
    )
}
