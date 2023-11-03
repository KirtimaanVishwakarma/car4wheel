/* eslint-disable react/prop-types */


import { Breadcrumb } from 'antd';

const BreadCrumb = ({items}) =>(
  <Breadcrumb
    items={items} className='mb-10'
  />
);

export default BreadCrumb;
