import { Button, Form, Input, Select } from "antd";

import detailDots from "../../../assets/detailDots.png";

export const CollabForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <div className="form-container">
        <Form
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          requiredMark={false}
        >
          <div className="form-div">
            <Form.Item
              label="NAME"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              label="SURNAME"
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Please input your surname!",
                },
              ]}
            >
              <Input placeholder="Surname" />
            </Form.Item>
          </div>
          <div className="form-div">
            <Form.Item
              label="PHONE"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone Number!",
                },
              ]}
            >
              <Input placeholder="Phone" />
            </Form.Item>
            <Form.Item
              label="EMAIL ADDRESS"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </div>

          <div className="form-div">
            <Form.Item
              label="EXPERIENCE"
              name="exp"
              rules={[
                {
                  required: true,
                  message: "Please input your expereince!",
                },
              ]}
            >
              <Select
                placeholder="Select"
                getPopupContainer={(trigger) => trigger.parentElement}
              />
            </Form.Item>

            <Form.Item
              label="WHERE DID YOU HEAR ABOUT US?"
              name="hear"
              rules={[
                {
                  required: true,
                  message: "Please input info!",
                },
              ]}
            >
              <Select
                placeholder="Select"
                getPopupContainer={(trigger) => trigger.parentElement}
              />
            </Form.Item>
          </div>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
      <img className="detailDot" src={detailDots} alt="" />
    </>
  );
};
