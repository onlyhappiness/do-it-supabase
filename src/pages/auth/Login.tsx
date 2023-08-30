import React from "react";
import { Button, Form, Input } from "antd";
import { supaClient } from "@client/supa-client";

export default function Login() {
  const [form] = Form.useForm();

  const onLogin = async ({ email, password }) => {
    console.log("email: ", email);
    console.log("password: ", password);

    const { data, error } = await supaClient.auth.signInWithPassword({
      email,
      password,
    });

    console.log("data: ", data);
    console.log("error: ", error);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f6f6f6]">
      <Form
        form={form}
        onFinish={onLogin}
        layout="vertical"
        className="bg-white w-[400px] p-3 py-6 rounded-lg"
      >
        <Form.Item label="아이디" name={"email"}>
          <Input placeholder="이메일을 입력해주세요." />
        </Form.Item>

        <Form.Item label="비밀번호" name={"password"}>
          <Input.Password placeholder="비밀번호를 입력해주세요." />
        </Form.Item>

        <Button className="w-full" onClick={() => form.submit()}>
          로그인
        </Button>
      </Form>
    </div>
  );
}
