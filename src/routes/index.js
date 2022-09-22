import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import AdminLayout from '../Layout/AdminLayout';
import Admin from '../Pages/Admin';
import Category from '../Pages/Category';
import CategoryCreate from '../Pages/CategoryCreate';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import News from '../Pages/News';

export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/news',
        component: News,
    },
    {
        path: '/login',
        component: Login,
        Layout: Fragment,
    },
    {
        path: '/admin',
        Layout: Fragment,
        component: AdminLayout,
    },
    {
        path: '/admin/category',
        Layout: AdminLayout,
        component: Category,
    },
    {
        path: '/admin/category/add',
        Layout: AdminLayout,
        component: CategoryCreate,
    },
    {
        path: '/admin/news',
        Layout: AdminLayout,
        component: News,
    },
];

export const privateRoutes = [];
