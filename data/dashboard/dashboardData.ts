import type {  productPerformanceType, productsCards , DashboardMetric } from '@/types/dashboard/index';

/* -- DashboardMetric -- */
import icon1 from '/icons/revenue.svg';
import icon2 from '/icons/today-revenue.svg';
import icon3 from  '/icons/items-sold.svg';
import icon4 from  '/icons/users-active.svg';
const DashboardMetrics : DashboardMetric[] =[
    {
        icon: icon1,
        title: 'Total Revenue',
        value: '$52.6k',
        percentage: '+3.4%',
        isIncrease: true,
    },
    {
        icon: icon2,
        title: 'Today Revenue',
        value: '$1024',
        percentage: '-5.5%',
        isIncrease: false,
    },
    {
        icon: icon3,
        title: 'Items Sold',
        value: 22,
    },
    {
        icon: icon4,
        title: 'Users Active',
        value: 11,
    },
];


import phone1 from '/images/products/phone-1.svg';
import phone2 from '/images/products/phone-2.svg';
import phone3 from '/images/products/phone-3.svg';


/*Basic Table 1*/
const productPerformance: productPerformanceType[] = [
    {
        id: 1,
        image: phone1,
        name: 'Iphone 13',
        qty: 1,
        orderDate: 'January 20, 2022',
        amount: '$799.00',
        status: 'Pending',
        statusColor: 'primary'
    },
    {
        id: 2,
        image: phone2,
        name: 'Xiaomi Redmi Note 10',
        qty: 1,
        orderDate: 'January 20, 2022',
        amount: '$799.00',
        status: 'Approved',
        statusColor: 'success'
    },
    {
        id: 3,
        image: phone3,
        name: 'Iphone 13',
        qty: 1,
        orderDate: 'January 20, 2022',
        amount: '$799.00',
        status: 'In Process',
        statusColor: 'warning'
    },
    {
        id: 1,
        image: phone1,
        name: 'Iphone 13',
        qty: 1,
        orderDate: 'January 20, 2022',
        amount: '$799.00',
        status: 'Pending',
        statusColor: 'primary'
    },
    {
        id: 2,
        image: phone2,
        name: 'Xiaomi Redmi Note 10',
        qty: 1,
        orderDate: 'January 20, 2022',
        amount: '$799.00',
        status: 'Approved',
        statusColor: 'success'
    },
    {
        id: 3,
        image: phone3,
        name: 'Iphone 13',
        qty: 1,
        orderDate: 'January 20, 2022',
        amount: '$799.00',
        status: 'In Process',
        statusColor: 'warning'
    }
];


/*--Products Cards--*/
import proimg1 from '/images/products/s4.jpg';
import proimg2 from '/images/products/s5.jpg';
import proimg3 from '/images/products/s7.jpg';
import proimg4 from '/images/products/s11.jpg';
const productsCard: productsCards[] = [
    {
        title: 'Boat Headphone',
        link: '/',
        photo: proimg1,
        salesPrice: 375,
        price: 285,
        rating: 4
    },
    {
        title: 'MacBook Air Pro',
        link: '/',
        photo: proimg2,
        salesPrice: 650,
        price: 900,
        rating: 5
    },
    {
        title: 'Red Valvet Dress',
        link: '/',
        photo: proimg3,
        salesPrice: 150,
        price: 200,
        rating: 3
    },
    {
        title: 'Cute Soft Teddybear',
        link: '/',
        photo: proimg4,
        salesPrice: 285,
        price: 345,
        rating: 2
    }
];


export { productPerformance, productsCard , DashboardMetrics}