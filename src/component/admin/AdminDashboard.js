import React from 'react';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../services/getAllUsers';
import { getAllProducts } from '../../services/getProducts';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
//   import 


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [100,200,300,400],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 2',
        data: [100,200,300,400],
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 3',
        data: [100,200,300,400],
        backgroundColor: 'rgb(53, 162, 235)',
        stack: 'Stack 1',
      },
    ],
  };


const AdminDashboard = ()=>{
    const dispatch = useDispatch();
  const state = useSelector((state) => state);
useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllProducts());

  }, [dispatch]);
console.log(state);

    return (
        <>
            <b>Admin Dashboard</b>
            <Bar className='h-10' options={options} data={data} />
        </>
    )
}

export default AdminDashboard;