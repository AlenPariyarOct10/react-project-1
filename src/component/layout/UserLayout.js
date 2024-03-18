import React from 'react';
import { Button, Flex } from 'antd';
import { Layout, Menu, theme } from 'antd';
import "../../App.css"
import icon from "../../react.jpg";
import { NavLink, Outlet } from 'react-router-dom';
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
        key: 1
    },
    {
        name: "About us",
        link: "/aboutus",
        key: 2
    },
    {
        name: "Contact us",
        link: "contactus",
        key: 3
    }
  ]
 
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className='navContainer'>
            <div className="header-left">
                <img className='profileImg' src={icon} alt="" />
            </div>
            <div className="header-center">
                {
                    navItems?.map((item)=>(
                        <NavLink key={item?.key} to={item?.link}>{item?.name}</NavLink>
                    ))
                }
            </div>
            <div className="header-right">
                <Button type='primary'>Login</Button>
            </div>
        </div>
        
      </Header>
      <Content
        style={{
          padding: '0 48px',
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
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default UserLayout;