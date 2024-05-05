import React from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { Layout, theme, ConfigProvider } from "antd";
import { useMemo, useState } from "react";
import { Popover, Segmented } from "antd";
import "../../App.css";
import "../../index.css";
import { logout } from "../../redux/slices/LoginSlice";
import CartProductDetail from "../cart/CartProductDetail";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
import { Drawer, Radio } from "antd";
import { DrawerProps, RadioChangeEvent } from "antd";
import { userLogin } from "../../services/LoginAction";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import icon from "../../images/react.jpg";
import { NavLink, Outlet } from "react-router-dom";
import { useAppContext } from "../ContextAPI";
import useSelection from "antd/es/table/hooks/useSelection";
import SearchProducts from "../../redux/slices/SearchProducts";
import axios from "axios";



import { AutoComplete, Input } from "antd";

const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const UserLayout = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart->", cart);
  const navigate = useNavigate();
  const [arrow, setArrow] = useState("Show");
  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }
    if (arrow === "Show") {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  const state = useSelector((state) => state);


  const dispatch = useDispatch();

  const token = useSelector((state) => state?.auth?.userInfo?.token);
  console.log("token - >", token);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const text = <span>My Cart</span>;
  const buttonWidth = 100;
  let costPrice = cart.reduce(
    (accum, product) => accum + parseInt(product.price) * product.quantity,
    0
  );
  

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  const userOptions = [
    {
      name: "Home",
      link: "/",
      id: 1,
    },
    {
      name: "Logout",
      id: 3,
    },
  ];

  const userOptionMenu = (
    <div>
      {
        // userOptions.map((item)=>(
        //   (item.id===3)?<button onClick={handleLogout}>{item.name}</button>:
        //   <button onClick={navigate(item.link)}>{item.name}</button>
        // ))
      }
    </div>
  );

  console.log(userOptionMenu);

  let grandTotal = costPrice ;
  const content =
    cart.length > 0 ? (
      <div>
        {/* {cart.map((product) => (
          <p>
            {product.name} ({product.quantity})
          </p>
        ))} */}
        <hr />
        <p className="font-bold">Items :{cart.length}</p>
        <p className="font-bold">Cost Price : ${costPrice}</p>
       
        <p className="font-bold text-green-600">Grand Total : ${grandTotal}</p>

        <button
          onClick={() => {
            navigate("../viewCart");
          }}
          className="text-violet-700 hover:text-violet-800 hover:bg-slate-200 p-1 rounded"
        >
          View Cart
        </button>
      </div>
    ) : (
      <div>Empty cart</div>
    );

  const navItems = [
    {
      name: "Home",
      link: "/",
      key: 1,
    },
    {
      name: "Blog",
      link: "/blog",
      key: 2,
    },
    {
      name: "About us",
      link: "/aboutus",
      key: 3,
    },
    {
      name: "Contact us",
      link: "contactus",
      key: 4,
    },
  ];

  const authInfo = [
    {
      name: "Login",
      link: "/auth/login",
    },
    {
      name: "Signup",
      link: "/auth/signup",
    },
  ];

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  const searchResult = async (query) => {
   
  
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/`);
      const filteredTitles = response.data
        .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
        .map((item) => ({
          id: item.id,
          value: item.title,
          label: (
            <div onClick={() => {
              navigate(`../ProductDetail?prod_id=${item.id}`);
            }}>
              {item.title}
            </div>
          )
        }));
      console.log(filteredTitles);
      return filteredTitles;
    } catch (error) {
      console.error("Error fetching search results:", error);
      return [];
    }
  };
  
  
  const [options, setOptions] = useState([]);
  
  let handleSearch = async (value) => {
    console.log(value);
    const searchOptions = await searchResult(value);
    setOptions(value ? searchOptions : []);
  };
  

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            footerBg: "#31363F",
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
            <div className="mt-[-10px]">

              <AutoComplete
                popupMatchSelectWidth={252}
                style={{
                  width: 300,
                }}
                options={options}
                onSearch={handleSearch}
                size="large"
              >
                <Input.Search size="large" placeholder="input here" enterButton />
              </AutoComplete>
            </div>
            <div className="header-right">
              {/* {authInfo?.map((item) => (
                <NavLink key={item?.link} to={item?.link}>
                  <Button style={{ margin: "0px 2px 0px 2px" }} type="primary">
                    {item?.name}
                  </Button>
                </NavLink>
              ))} */}
            </div>
          </div>

          <div className="avatar">
            {token && (
              <div
                style={{
                  marginInlineStart: buttonWidth + 4,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                <Popover
                  placement="bottomLeft"
                  title={text}
                  content={userOptionMenu}
                  arrow={mergedArrow}
                >
                  <div className="user-avatar">
                    <Avatar
                      onClick={() => {
                        showDrawer();
                      }}
                      shape="circle"
                      icon={<UserOutlined />}
                    />
                  </div>
                </Popover>
              </div>
            )}
          </div>
          <Space size={24}>
            <ConfigProvider
              button={{
                style: {
                  width: buttonWidth,
                  margin: 4,
                },
              }}
            >


              <div className="demo">
                <div
                  style={{
                    marginInlineStart: buttonWidth + 4,
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                  }}
                >
                  <Popover
                    placement="bottomLeft"
                    title={text}
                    content={content}
                    arrow={mergedArrow}
                  >
                    <Badge count={cart.length}>
                      <Avatar
                        onClick={() => {
                          showDrawer();
                        }}
                        shape="square"
                        icon={<ShoppingCartOutlined />}
                      />
                    </Badge>
                  </Popover>
                </div>
              </div>
            </ConfigProvider>
          </Space>
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

            <Drawer
              title="Products in Cart"
              placement={placement}
              width={500}
              onClose={onClose}
              open={open}
              extra={
                <Space>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button type="primary" onClick={onClose}>
                    OK
                  </Button>
                </Space>
              }
            >
              {cart.length > 0 ? (
                <Space direction="vertical" size={5}>
                  <Card title="Cart" className="w-full bg-blue-200">
                    <h2 className="text-gray-900 text-2xl title-font font-small mb-1">
                      Total Items : {cart.length}
                    </h2>
                    <h2 className="text-gray-900 text-2xl title-font font-small mb-1">
                      Cost Price : ${costPrice}
                    </h2>
                    <h2 className="text-gray-900 text-2xl title-font font-small mb-1">
                      {/* Discount Amount : ${discountPrice} */}
                    </h2>
                    <hr />
                    <h1 className="text-green-600 text-2xl title-font font-bold mb-1">
                      {/* Grand Total : ${grandTotal} */}
                    </h1>
                  </Card>

                  <hr />
                  <button
                    onClick={() => {
                      navigate("../viewCart");
                    }}
                    className="text-violet-700 hover:text-violet-800 hover:bg-slate-200 p-1 rounded"
                  >
                    Order now{" "}
                  </button>
                  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                    {cart.map((product, index) => (
                      <CartProductDetail
                        key={index}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        image={product.image}
                        quantity={product.quantity}
                        price={product.price}
                        discount={10}
                      />
                    ))}
                  </div>
                </Space>
              ) : (
                <div>Cart is empty</div>
              )}
            </Drawer>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
          className="text-white font-mono"
        >
          KMC React Project ©{new Date().getFullYear()} Created by <b>Alen Pariyar</b>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default UserLayout;
