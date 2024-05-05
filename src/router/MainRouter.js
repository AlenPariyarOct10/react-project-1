import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";



import Blog from "../component/user/Blog";
const FilterProducts = React.lazy(()=> import("../component/user/dashboard/FilterProducts"))
const AdminDashboard = React.lazy(() => import("../component/admin/AdminDashboard"));
const HotProducts = React.lazy(() => import("../component/admin/HotProducts"));
const Profile = React.lazy(() => import("../component/admin/Profile"));
const UserList = React.lazy(() => import("../component/admin/UserList"));
const Login = React.lazy(()=> import("../component/auth/Login"))
const Signup = React.lazy(()=> import("../component/auth/Signup"))
const PageNotFound = React.lazy(() => import("../component/PageNotFound"));
const UserLayout = React.lazy(() => import("../component/layout/UserLayout"));
const AuthLayout = React.lazy(() => import("../component/layout/AuthLayout"));
const DashBoard = React.lazy(() => import("../component/user/dashboard/DashBoard"));
const ProductDetail = React.lazy(()=> import("../component/user/ProductDetail"));
const ViewCart = React.lazy(()=> import("../component/user/ViewCart"));
const AboutUs = React.lazy(()=> import("../component/user/AboutUs"));
const ContactUs = React.lazy(()=> import("../component/user/ContactUs"));

const Information = React.lazy(() =>
  import("../component/user/Information")
  
);

const AdminLayout = React.lazy(() => import("../component/layout/AdminLayout"));

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout></UserLayout>}>
        <Route index element={<DashBoard></DashBoard>}></Route>
        <Route path="blog" element={<Blog title="User - Blog"></Blog>}></Route>
        <Route path="productDetail" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="viewCart" element={<ViewCart></ViewCart>}></Route>
        <Route path="aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="contactus" element={<ContactUs></ContactUs>}></Route>
        <Route
          path="filterproducts"
          element={<FilterProducts></FilterProducts>}
        ></Route>
      </Route>

      <Route path="/auth" element={<AuthLayout/>}>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        </Route>
      <Route path="/admin" element={<AdminLayout></AdminLayout>}>
        <Route
          path="dashboard"
          element={<AdminDashboard></AdminDashboard>}
        ></Route>
        <Route
          path="hotproducts"
          element={<HotProducts></HotProducts>}
        ></Route>
       
        <Route
          path="profile"
          element={<Profile></Profile>}
        ></Route>
        <Route
          path="userlist"
          element={<UserList></UserList>}
        ></Route>
      </Route>
      <Route path="*" element={<PageNotFound></PageNotFound>} />
    </Route>
  )
);
