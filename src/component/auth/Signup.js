import { Card } from "antd";
import React from "react";
import { Button,  Form, Input } from 'antd';
import { Link } from "react-router-dom";


const Signup = () => {
  const onFinish = (name) => {
    console.log('Success:', name);
  };
  
  return (

    <div className=" flex justify-center py-5">
      <Card className=" w-[570px] min-h-96  bg-orange-200">
        <h1 className=" font-madimi d pb-2 text-center font-bold text-base mb-3">SignUp</h1>
        <div>
          <div>
            <Form onFinish={onFinish} layout="vertical">
            <div className="grid grid-cols-12 gap-x-3">
            <div className="col-span-6">
            <Form.Item
                  name="Firstname"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your firstname!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5 text-left">* Firstname</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>
                <div className="col-span-6">
                <Form.Item
                  name="Lastname"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your lastname!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5 text-left">*Lastname</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>

                <div className="col-span-6">
                <Form.Item
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5 text-left">*Email</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>
                
                <div className="col-span-6">
                <Form.Item
                  name="Username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5 text-left">* Username</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>
                
                <div className="col-span-6">
                <Form.Item
                  name="New-Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your new-password!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5 text-left">*New-Password</h1>
                  <Input.Password className=" w-64" />
                </Form.Item>
                </div>

                <div className="col-span-6">
                <Form.Item
                  name="cpassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your confirm-password!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5 text-left">* Confirm-Password</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>

                <div className="col-span-6">
                <Form.Item
                  name="Contact"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Contact!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5 text-left">*Contact</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>

                <div className="col-span-6">
                <Form.Item
                  name="Address"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Address !',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5 text-left">* Address</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>
            </div>

              <section className=" text-left flex gap-x-2">
                <Form.Item>
                  <Button className=" bg-black text-white border-none flex 
                  justify-center" htmlType="submit">
                    <p className=" font-varela ">Submit</p>
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button className=" bg-black text-white border-none flex 
                  justify-center" htmlType="submit">
                   <Link to="/"> <p className=" font-varela ">Back</p></Link>
                  </Button>
                </Form.Item>
              </section>
            </Form>
          </div>

        </div>
      </Card>
    </div>
  )
}

export default Signup;