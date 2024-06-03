import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="font-merienda">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;