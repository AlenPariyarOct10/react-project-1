import React from "react";
import { Button, Flex } from "antd";
import { Layout, Menu, theme, ConfigProvider } from "antd";
import "../../App.css";
import icon from "../../images/react.jpg";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));
const UserLayout = () => {
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

  const authInfo = [
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Signup",
      link: "/signup",
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
              {navItems?.map((item) => (
                <NavLink key={item?.key} to={item?.link}>
                  {item?.name}
                </NavLink>
              ))}
            </div>
            <div className="header-right">
              {authInfo?.map((item) => (
                <NavLink key={item?.link} to={item?.link}>
                  <Button style={{ margin: "0px 2px 0px 2px" }} type="primary">
                    {item?.name}
                  </Button>
                </NavLink>
              ))}
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
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          KMC React ©{new Date().getFullYear()} Created by <b>Alen Pariyar</b>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default UserLayout;
