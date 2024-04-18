import React from 'react';
import { Button, Form, Input } from 'antd';
import { addNewProduct } from '../../services/addNewProduct';
import { useDispatch } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import { useState } from 'react';
import { ImageUploader } from '../common';
import { SaveButton } from '../common';

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
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [fileList, setFileList] = useState([]);
    
   
    let dispatch = useDispatch();
    const onFinish = (value) => {
      console.log("values -> ",value);

        const product = JSON.stringify(value);
        let result = dispatch(addNewProduct(product));
        console.log("result - ",result);
      };
    return (
        
        <div className="main-body">
           <div className="main-body">
      <b>Hot Products</b>
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <h3>Add Product</h3>
        <Form.Item name="productname" label="Product Name">
          <Input />
        </Form.Item>
        <Form.Item name="productprice" label="Price">
          <Input />
        </Form.Item>
        <Form.Item name="productdesc" label="Description">
          <Input />
        </Form.Item>
    
        <Form.Item name="productcategory" label="Category">
          <Input />
        </Form.Item>
        <Form.Item name="productImage" label="Category">
          <ImageUploader imageUrl={imageUrl} previewImage={previewImage} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
   

      </Form>
    </div>
        </div>
    )
}

export default HotProducts;