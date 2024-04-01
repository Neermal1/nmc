import { useState } from "react";

//antd
import { Button, Form, Input, notification } from "antd";

//axiosInstance
import axiosInstance from "@/axiosInstance/axiosInstance";

//recaptcha
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  //states
  const [isLoading, setIsLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const handleContactSubmit = async (values: any) => {
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone_number,
      message: values.message,
    };
    try {
      setIsLoading(true);
      if (captchaValue && payload) {
        const response = await axiosInstance.post("/contact/store", payload);
        if (!captchaValue) {
          notification.error({
            message: "Please verify you are a human or not",
          });
        }
        if (response.status === 200 && captchaValue) {
          notification.success({
            message: response.data.message,
          });
          form.resetFields();
          setIsLoading(false);
          //   window.location.href = "/thankyou";
        } else {
          notification.error({
            message: "Sorry Something went wrong",
          });
        }
      } else {
        notification.error({
          message: "Please verify you are a human or not",
        });
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  function onChangeCaptcha(value: any) {
    setCaptchaValue(value);
  }

  return (
    <div className="">
      <div className="bg-white drop-shadow-md p-4 md:p-8 lg:p-20 rounded-[8px]">
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col gap-4 "
          onFinish={handleContactSubmit}
        >
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium">Your Name</div>
            </div>
            <Form.Item
              hasFeedback
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please provide your full name",
                },
              ]}
              className="form-label"
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your full name here"
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium">Email Address</div>
            </div>

            <Form.Item
              hasFeedback
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please provide your email address",
                },
                {
                  pattern: /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/,
                  message:
                    "Please provide your email address in correct format",
                },
              ]}
              className=""
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your email address here"
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium ">Phone Number</div>
            </div>

            <Form.Item
              hasFeedback
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: "Please provide your valid phone number",
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Mobile number must be 10 digits",
                },
              ]}
              className=""
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your phone number here"
              />
            </Form.Item>
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium ">
                Are you suffering from Any Chronic Disease?
              </div>
            </div>
            <Form.Item
              hasFeedback
              name="message"
              rules={[
                { required: true, message: "Please provide your disease name" },
              ]}
              className="color-changer"
            >
              <TextArea
                rows={4}
                cols={10}
                className="lg:w-[380px] w-[300px]"
                placeholder="Enter your disease name here"
                autoSize={false}
              />
            </Form.Item>
          </div>
          <div className="lg:w-[380px] w-[300px] mb-4">
            <ReCAPTCHA
              datatype="image"
              sitekey="6Lf8xZ4pAAAAAKBGk_kfWHOs7XxmQX88U4-89bK4"
              onChange={onChangeCaptcha}
            />
          </div>

          <Form.Item className="">
            <Button
              htmlType="submit"
              size="large"
              loading={isLoading}
              style={{
                backgroundColor: "#EAF1FF",
                color: "#1e1e1e",
              }}
              className="lg:w-[380px] w-[300px]"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
