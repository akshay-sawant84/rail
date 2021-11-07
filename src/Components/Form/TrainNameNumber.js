import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const TrainNameNumber = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    navigate(`train-list?trainNameNum=${values.trainno}`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout={"vertical"}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Train Name/ Train Number"
        name="trainno"
        rules={[{ required: true, message: "This field is required!" }]}
      >
        <Input placeholder="123456 / MANGLADWEEP EXP" />
      </Form.Item>

      <Form.Item className="mt-3">
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TrainNameNumber;
