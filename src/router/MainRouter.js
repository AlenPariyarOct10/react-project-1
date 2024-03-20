import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


import Blog from "../component/user/Blog";
const AdminDashboard = React.lazy(() =>
  import("../component/admin/AdminDashboard")
);
const Login = React.lazy(()=> import("../component/user/Login"));
const Signup = React.lazy(()=> import("../component/user/Signup"));
const PageNotFound = React.lazy(() => import("../component/PageNotFound"));
const UserLayout = React.lazy(() => import("../component/layout/UserLayout"));
const AuthLayout = React.lazy(() => import("../component/layout/AuthLayout"));
const Information = React.lazy(() =>
  import("../component/user/Information")
  
);

const AdminLayout = React.lazy(() => import("../component/layout/AdminLayout"));

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout></UserLayout>}>
        <Route index element={<Information title="User - Information"></Information>}></Route>
        <Route path="blog" element={<Blog title="User - Blog"></Blog>}></Route>
      </Route>
      <Route path="/auth" element={<AuthLayout></AuthLayout>}>
        <Route path="login" element={<Login title="User - Login"></Login>}></Route>
        <Route path="signup" element={<Signup title="User - Signup"></Signup>}></Route>
      </Route>
      <Route path="/admin" element={<AdminLayout></AdminLayout>}>
        <Route
          path="dashboard"
          element={<AdminDashboard></AdminDashboard>}
        ></Route>
      </Route>
      <Route path="*" element={<PageNotFound></PageNotFound>} />
    </Route>
  )
);
