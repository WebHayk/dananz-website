import React, {FC} from "react";
import {RouterProvider} from "react-router-dom";
import {AppRouter} from "./core/router";

const App: FC = () => {
    return <RouterProvider
        router={AppRouter()}
    />
}

export default App;
