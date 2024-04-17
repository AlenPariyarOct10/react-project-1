import React from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { addNewProduct } from '../../services/addNewProduct';
import { useDispatch } from 'react-redux';
const MyFormItemContext = React.createContext([]);

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const HotProducts = ()=>{
    let dispatch = useDispatch();
    const onFinish = (value) => {
        const product = JSON.stringify(value);
        let result = dispatch(addNewProduct(product));
        console.log(result);
      };
    return (
        
        <div className="main-body">
           <b>Hot Products</b>
           <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <h3>Add Product</h3>
     
           
            <MyFormItem name="productname" label="Product Name">
                <Input />
            </MyFormItem>
            <MyFormItem name="productprice" label="Price">
                <Input />
            </MyFormItem>
            <MyFormItem name="productdesc" label="Description">
                <Input />
            </MyFormItem>
            <MyFormItem name="productimg" label="Image">
                <Input />
            </MyFormItem>
           
            <MyFormItem name="productcategory" label="Category">
                <Input />
            </MyFormItem>
           
        
       

        <Button type="primary" htmlType="submit">
            Submit
        </Button>
    </Form>
        </div>
    )
}

export default HotProducts;