import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../services/getAllUsers';
import { getAllProducts } from '../../services/getProducts';
import { Table } from 'antd';

const UserList = ()=>{

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    useEffect(() => {
      dispatch(getAllUsers());
      dispatch(getAllProducts());
    }, [dispatch]);
    console.log(state.users.products.data);
    const columns = [
        {
          title: 'Name',
          dataIndex: ['name','firstname'] ,
          key: 'name',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
      
      ];

  console.log(state);

    return (
        <div className="main-body">
           <b>User List</b>
           <Table dataSource={state.users.products.data} columns={columns} />;
        </div>
    )
}

export default UserList;