
import { Card, Modal } from "antd";
import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import logo from "../../images/react.jpg"


const Login = () => {
  const onFinish = (name) => {
  console.log('Success:', name);
  };
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
  <div className=" flex justify-center py-5">
   <Card className=" w-[540px] min-h-80 font-varela border-none 
   bg-gradient-to-r from-yellow-600 to-green">
  
    <h1 className=" text-lg pb-4 font-bold">Login</h1>
    <div className=" flex">
    <div>
    <Form onFinish={onFinish} layout="vertical">
    <section className=" text-left">
    <Form.Item 
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]} className=" my-2">
      
      <Input className=" w-64"/>
    </Form.Item>

    <Form.Item 
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]} className=" my-2">
      <h1 className=" font-varela py-1.5">* Password</h1>
      <Input.Password className=" w-64 "/>
    </Form.Item>
    </section>

     <section className=" text-left">
    <Form.Item className=" my-2">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item>
      <Button className=" bg-black text-white border-none" htmlType="submit">
      <p className=" font-varela">Submit</p>
      </Button>
    </Form.Item>
    </section>
  </Form>
  </div>
  <div className=" text-right my-4">
    <img src={logo} alt="cod"></img>
    <p className=" text-white py-4" onClick={showModal}>Forgot Password?</p>
    {isModalOpen&&
    ( <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
    className=" w-64">
         <p className=" text-lime-400">Email</p>
         <Input className=" w-64"/>
    </Modal> )}
  </div>
  </div>
  </Card>
  
  </div>
      
    )
  }
  
export default Login;