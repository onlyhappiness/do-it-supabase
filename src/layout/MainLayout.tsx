import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

const SiderWidth = 200;

export default function MainLayout() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={{
            overflow: "auto",
            minHeight: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          theme="light"
          width={SiderWidth}
        />

        <Layout
          style={{
            height: "100%",
            marginLeft: SiderWidth,
          }}
        >
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
