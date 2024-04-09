import { Layout, Menu, MenuProps } from "antd";
import React from "react";

const { Header, Content, Footer, Sider } = Layout;
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
import {  NavLink, Outlet } from "react-router-dom";
import { sideBarRoutes } from "../../routes/admin.routes";

const items: MenuProps['items'] = [
  {
    key: "Dashboard",
    label: <NavLink to={'/admin'}>Dashboard</NavLink>,
  },
  {
    key: "All student List",
    label: <NavLink to={'/admin/create-student'}>All student List</NavLink>,
  },
  {
    key: "user management",
    label: "user management",
    children: [
      {
        key: 'create admin',
        label: <NavLink to={'/admin/create-admin'}>create admin</NavLink>,
      },
      {
        key: 'create student',
        label:<NavLink to={'/admin/create-student'}> create student</NavLink>,
      },
      {
        key:'create faculty',
        label: <NavLink to={'/admin/create-faculty'}>create faculty</NavLink>,
      },
    ],
  },
];
console.log(sideBarRoutes[2], "main side");
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color:'white', textAlign: 'center', height:"4rem" , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
            <h1 style={{fontSize:'2rem'}}>Dashboard</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sideBarRoutes}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
          >
          <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
