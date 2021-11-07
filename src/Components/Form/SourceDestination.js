import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const SourceDestination = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    if (values.source === values.destination) {
      alert("Please enter valid source/destination");
    }

    navigate(
      `train-list?source=${values.source}&destination=${values.destination}`
    );
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
        label="Source"
        name="source"
        rules={[{ required: true, message: "Please input your source!" }]}
      >
        <Input placeholder="Mumbai" />
      </Form.Item>

      <Form.Item
        label="Destination"
        name="destination"
        rules={[{ required: true, message: "Please input your destination!" }]}
      >
        <Input placeholder="Delhi" />
      </Form.Item>

      <Form.Item className="mt-3">
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SourceDestination;
