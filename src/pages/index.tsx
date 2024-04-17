import {FC, lazy, Suspense} from "react";

const HomeComponent = lazy(() => import("../components/Home"));

const HomePage: FC = () => {
    return (
        <Suspense fallback={""}>
            <HomeComponent/>
        </Suspense>
    )
}

export default HomePage;
