import React from "react";
import { Button, Form, Input } from "antd";

export default function SignUp() {
  const [form] = Form.useForm();

  const onSubmit = async ({ email, password }) => {
    const body = {
      email,
      password,
    };

    console.log("body: ", body);
  };

  return (
    <div className="">
      <Form
        form={form}
        layout="vertical"
        className="w-full"
        onFinish={onSubmit}
      >
        <Form.Item
          label="아이디"
          name={"email"}
          rules={[
            {
              type: "email",
              required: true,
              message: "이메일을 입력해 주세요.",
            },
          ]}
        >
          <Input placeholder="이메일을 입력해주세요." className="py-2" />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name={"password"}
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해 주세요.",
            },
          ]}
        >
          <Input.Password
            placeholder="비밀번호를 입력해주세요"
            className="py-2"
          />
        </Form.Item>

        <Button
          onClick={() => form.submit()}
          //   className="bg-[#EF3346] text-white mt-12 py-3 flex justify-center items-center w-full rounded"
          // type="primary"
        >
          로그인
        </Button>
      </Form>
    </div>
  );
}
