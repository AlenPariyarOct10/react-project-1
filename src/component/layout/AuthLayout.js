import React from "react";
import { Layout, theme, ConfigProvider } from "antd";
import "../../App.css";
import icon from "../../images/react.jpg";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));
const AuthLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navItems = [
    {
      name: "Blog",
      link: "/blog",
      key: 1,
    },
    {
      name: "About us",
      link: "/aboutus",
      key: 2,
    },
    {
      name: "Contact us",
      link: "contactus",
      key: 3,
    },
  ];

  

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
           footerBg: "#31363F"
          },
        },
      }}
    >
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="navContainer">
            <div className="header-left">
              <img className="profileImg" src={icon} alt="" />
            </div>
            <div className="header-center">
              
            </div>
            
          </div>
        </Header>
        <Content
          style={{
            padding: "0 48px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            
            <Outlet></Outlet>
          </div>
        </Content>
       
      </Layout>
    </ConfigProvider>
  );
};
export default AuthLayout;
