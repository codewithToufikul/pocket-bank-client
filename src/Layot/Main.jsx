import { Toaster } from "react-hot-toast";
import Dashboard from "./Dashboard/Dashboard";

const Main = () => {
    return (
        <div>
          <Dashboard></Dashboard>
          <Toaster />
        </div>
    );
};

export default Main;