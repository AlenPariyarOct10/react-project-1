import { NavLink, Outlet, useNavigate } from "react-router-dom";


export const Layout = ()=>{

    const Links = [
        {
            name : "Home",
            to : "/"
        },
        {
            name : "Admin",
            to : "/admin/dashboard"
        },
   
    ];

    return (
        <>
        <div className="mainNav">
            {
                Links.map((item)=>(
                    <NavLink key={item.name} to={item.to}>{item.name}</NavLink>
                )) 
            }

        </div>
        <Outlet></Outlet>
        </>
    );
}