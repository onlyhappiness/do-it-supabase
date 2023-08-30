import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Button, Layout, Row, Space } from "antd";
import { supaClient } from "@client/supa-client";

const { Header, Sider, Content } = Layout;

const SiderWidth = 200;

export default function MainLayout() {
  const logOut = async () => {
    const { error } = await supaClient.auth.signOut();

    console.log("error: ", error);
  };

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
        >
          <Space>
            {/* <Button onClick={login}>로그인</Button> */}

            <Button onClick={logOut}>로그아웃</Button>
          </Space>
        </Sider>

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
