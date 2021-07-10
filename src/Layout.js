import React from 'react';
import TableApp from "./components/TableApp";
import './Layout.css';
import { Layout, Menu, Breadcrumb } from 'antd';;

const { Header, Content, Footer } = Layout;

const LayoutApp = () =>{
    return (
        <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><b><h1 style={{fontSize:"30px"}}>HISP TANZANIA</h1></b>  <img src="https://hisptanzania.org/assets/img/logo/HISP-LOGO.svg" alt="KIJACODE" width="60" height="60"/></Breadcrumb.Item>
            <Breadcrumb.Item>Danford Kija</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
<div>
<h1  style={{marginTop:"20px",fontSize:"30px"}}>Table 1</h1>
<TableApp name={true}/>
<h1 style={{marginTop:"20px",fontSize:"30px"}}>Table 2</h1>
<TableApp name ={false}/>

</div>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>HISP TANZANIA TEASER ©2021 Created by KIJACODE</Footer>
      </Layout>
    );
}


export default LayoutApp;