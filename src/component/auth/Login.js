import React, {useMemo} from 'react';
import { useSelector } from "react-redux";

import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../services/LoginAction';
import {useNavigate} from "react-router-dom";
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';

const Context = React.createContext({
  name: 'Default',
});

const onFinishFailed = (errorInfo) => {
  
  console.log('Failed:', errorInfo);
};


const Login = ({title}) => {
const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
const dispatch = useDispatch();
const onFinish = async (values) => {

console.log("AUTH => ",values);
   userLogin(values)(dispatch).unwrap();
};
const handleNavigate = ()=>{
  navigate(-1);
}
const data = useSelector((state) => state);

React.useEffect(() => {
  if (data?.auth?.userInfo?.token) {
    console.log("has login");
    navigate("/");
  }
}, [data?.auth?.userInfo?.token]);




  return (
    <>
    
    <h2>{title}</h2>
  <Form
    onFinish={onFinish}
  >
    <Form.Item
      label="Username"
      name="username"
      
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

  
      <Button htmlType="submit" loading={data?.auth?.loading}>
        Login
      </Button>

     

  </Form>

  </>)
};
export default Login;