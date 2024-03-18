import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "./Layout";
import PageNotFound from "../component/PageNotFound";
import UserLayout from "../component/layout/UserLayout";
import Information from "../component/user/dashboard/Information";

const AdminDashboard = React.lazy(()=>import('../component/admin/AdminDashboard'));

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
        <Route path="/" element={<Layout></Layout>}>
            <Route path="/" element={<UserLayout></UserLayout>}></Route>
            <Route path="/" element={<UserLayout></UserLayout>}></Route>
            <Route index element={<Information></Information>}></Route>
        </Route>
        <Route path="/admin" element={<Layout></Layout>}>
            <Route path="dashboard" element={<AdminDashboard></AdminDashboard>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}/>
       
        </Route>
    )
)