import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { addNewProduct } from '../../services/addNewProduct';
import { useDispatch } from 'react-redux';
import { ImageUploader } from '../common';

const HotProducts = () => {
  const [formData, setFormData] = useState([]);

  const handleAdd = () => {
    const newForm = {
      productname: '',
      productprice: '',
      productdesc: '',
      productcategory: '',
      productImage: ''
    };
    setFormData([...formData, newForm]);
  };

  const handleDelete = (index) => {
    const updatedFormData = formData.filter((_, i) => i !== index);
    setFormData(updatedFormData);
  };

  const handleFormChange = (index, changedValues) => {
    const updatedFormData = formData.map((item, i) => (i === index ? { ...item, ...changedValues } : item));
    setFormData(updatedFormData);
  };

  const dispatch = useDispatch();
  const onFinish = () => {
    console.log('All Form Data:', formData);
    formData.forEach((value) => {
      const product = JSON.stringify(value);
      dispatch(addNewProduct(product));
    });
  };

  return (
    <div className="main-body w-3/5">
      <b>Hot Products</b>
      {formData.map((form, index) => (
        <Form
          key={index}
          name={`form_item_path_${index}`}
          className="w-full"
          layout="vertical"
          initialValues={form}
          onValuesChange={(changedValues) => handleFormChange(index, changedValues)}
          onFinish={onFinish}
        >
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
            <ImageUploader />
          </Form.Item>
          <Button onClick={() => handleDelete(index)} className="bg-red-300 text-[#000]">
            Delete Product
          </Button>
        </Form>
      ))}
      <Button onClick={handleAdd} className="bg-yellow-300 text-[#000]">
        Add Product
      </Button>
      <Button onClick={onFinish} className="bg-green-300 text-[#fff]">
        Submit All
      </Button>
    </div>
  );
};

export default HotProducts;
