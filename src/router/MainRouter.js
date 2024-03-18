import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./Layout";

const AdminDashboard = React.lazy(() =>
  import("../component/admin/AdminDashboard")
);
const PageNotFound = React.lazy(() => import("../component/PageNotFound"));
const UserLayout = React.lazy(() => import("../component/layout/UserLayout"));
const Information = React.lazy(() =>
  import("../component/user/dashboard/Information")
);
const AdminLayout = React.lazy(() => import("../component/layout/AdminLayout"));

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout></UserLayout>}>
        <Route index element={<Information title="User - Information"></Information>}></Route>
        <Route path="blog" element={<Information title="User - Blog"></Information>}></Route>
      </Route>
      <Route path="/admin" element={<Layout></Layout>}>
        <Route
          path="dashboard"
          element={<AdminDashboard></AdminDashboard>}
        ></Route>
      </Route>
      <Route path="*" element={<PageNotFound></PageNotFound>} />
    </Route>
  )
);
