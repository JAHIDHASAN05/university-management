import { NavLink } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateAmin from "../pages/CreateAdmin/CreateAdmin";
import CreateStudent from "../pages/CreateStudent/CreateStudent";
import CreateFaculty from "../pages/CreateFaculty/CreateFaculty";
import App, { paths } from "../App";
import { ReactNode } from "react";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};
export const AllRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    name: "All student List",
    path: "create-student",
    element: <CreateStudent></CreateStudent>,
  },
  {
    name: "user management",
    children: [
      {
        name: "create admin",
        path: "create-admin",
        element: <CreateAmin></CreateAmin>,
      },
      {
        name: "create student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "create faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "create jahid",
        path: "create-jahid",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
];

export const sideBarRoutes = AllRoutes.reduce((acc: TSidebarItem[], item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }
  return acc;
}, []);
// console.log(sideBarRoutes,"sidebar route")

export const ArrRoutesPaths = AllRoutes.reduce((acc: TRoute[], item) => {
  if (item.path && item.name) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

// export const adminPaths = [
//   {
//     path: "dashboard",
//     element: <Dashboard></Dashboard>,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAmin></CreateAmin>,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent></CreateStudent>,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty></CreateFaculty>,
//   },
// ];
