import React from 'react';
import Header from './Header';
import Form from 'antd/es/form/Form';
import {AntdInput, SaveButton} from '../common/index';
import { ImageUploader } from '../common/index';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';


const Profile = ()=>{

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [fileList, setFileList] = useState([]);
    
   
    let dispatch = useDispatch();
    const onFinish = (value) => {
      console.log("values -> ",value);

        const profile = JSON.stringify(value);
        // let result = dispatch(addNewProduct(product));
        // console.log("result - ",result);
      };

    return (
        <div className="main-body">
           <Header name="Profile"></Header>
           <div>
           <div>
                <Form onFinish={onFinish}>
                    <div>
                        <AntdInput name="first_name" label="First Name" required/>
                    </div>
                    <div>
                        <AntdInput name="mid_name" label="Mid Name" required/>
                    </div>
                    <div>
                        <AntdInput name="last_name" label="Last Name" required/>
                    </div>
                    <div>
                        <AntdInput name="email" label="Email" required/>
                    </div>
                    <div>
                        <AntdInput name="password" label="Password" required/>
                    </div>
                    <div>
                    <Form.Item name="productImage" label="Category">
                        <ImageUploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
                    </Form.Item>
                    </div>
                    <div>
                    <Button className='bg-green-300 text-[#fff]' htmlType="submit">
                        Submit
                    </Button>
                    </div>
                </Form>
            </div>
           </div>
        </div>
    )
}

export default Profile;