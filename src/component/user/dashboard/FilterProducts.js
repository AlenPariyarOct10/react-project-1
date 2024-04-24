import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getFilterProducts } from '../../../services/getFilterProducts';
import { addProduct } from '../../../redux/CartState';
import DashboardProductReuseAble from './DashboardProductReuseAble';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Button, Space } from 'antd';

const FilterProducts = ({ title, data, color }) => {
    const cart = useSelector((state) => state.FilterProductsSlice.products);
    const dispatch = useDispatch();
    const [sortingOrder, setSortingOrder] = useState("desc"); // State to track sorting order

    useEffect(() => {
        dispatch(getFilterProducts(sortingOrder));
    }, [dispatch, sortingOrder]);

    const toggleSortingOrder = () => {
        // Toggle between ascending and descending order
        const newSortingOrder = sortingOrder === "asc" ? "desc" : "asc";
        setSortingOrder(newSortingOrder);
    };

    const handleProductDetail = (product) => {
        // Handle product detail navigation
    };

    const addToCart = (product) => {
        // Add product to cart
    };

    const sortButtonLabel = sortingOrder === "asc" ? "Ascending" : "Descending";

    return (
        <>
            <Dropdown
                overlay={
                    <>
                        <Button onClick={toggleSortingOrder}>
                            {sortButtonLabel}
                        </Button>
                    </>
                }
            >
                <Button>
                {(sortingOrder==="asc")?'Descending':'Ascending'} <DownOutlined />
                </Button>
            </Dropdown>
            <DashboardProductReuseAble title={`Products in ${(sortingOrder==="asc")?'Descending':'Ascending'} order`} data={cart} color={color}></DashboardProductReuseAble>
        </>
    )
}

export default FilterProducts;
