import { createBrowserRouter } from "react-router-dom";

// import Dashboard from "../pages/Dashboard/Dashboard";
// import CreateAmin from "../pages/CreateAdmin/CreateAmin";
// import CreateStudent from "../pages/CreateStudent/CreateStudent";
// import CreateFaculty from "../pages/CreateFaculty/CreateFaculty";
// import App from "../App";
import { ArrRoutesPaths } from "./admin.routes";
import App from "../App";
export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App></App>,
    children: ArrRoutesPaths,
  },
]);
