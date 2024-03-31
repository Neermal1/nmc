import axiosInstance from "@/axiosInstance/axiosInstance";
import { Form, Input, message } from "antd";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function CareerForm({ vacancyId }: any) {
  const [form] = Form.useForm();

  //states
  const [cv, setCV] = useState<any>();
  const [cover_letter, set_cover_letter] = useState<any>();
  const [captchaValue, setCaptchaValue] = useState(null);

  const onFinish = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append("vacancy_id", vacancyId);
      formData.append("name", values.full_name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      if (cv) {
        formData.append("cv", cv);
      }
      if (cover_letter) {
        formData.append("cover_letter", cover_letter);
      }

      if (captchaValue && formData) {
        const response = await axiosInstance.post(
          "vacancy/applicant/add",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          message.success("Your application has been submitted successfully!");
          form.resetFields();
          recaptchaRef.current.reset();
        } else {
          message.error("Something went wrong. Please try again.");
        }
      } else {
        message.error("Please verify you are a human or not");
      }
    } catch (error: any) {
      console.log(error);
      message.error("An error occurred. Please try again.");
    }
  };

  const handleCoverLetter = (e: any) => {
    if (e?.target?.files) {
      const coverLetter = e?.target?.files[0];
      if (coverLetter) {
        set_cover_letter(coverLetter);
      }
    }
  };
  const handleCV = (e: any) => {
    if (e?.target?.files) {
      const cv = e?.target?.files[0];
      if (cv) {
        setCV(e.target.files[0]);
      }
    }
  };

  useEffect(() => {
    console.log(cv);
  }, [cv]);

  useEffect(() => {
    console.log(cover_letter);
  }, [cover_letter]);

  const recaptchaRef: any = useRef();
  function onChangeCaptcha(value: any) {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  }

  return (
    <Form
      form={form}
      name="careerForm"
      onFinish={onFinish}
      className="bg-gray-50 p-4 rounded shadow-md sticky top-16"
      layout="vertical"
      initialValues={{ remember: true }}
    >
      <h2 className="text-xl font-semibold mb-4">Apply Now</h2>

      <Form.Item
        label="Full Name"
        name="full_name"
        rules={[{ required: true, message: "Please input your full name!" }]}
        className="mb-4"
      >
        <Input
          className="w-full px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm border rounded outline-none"
          placeholder="Enter your full name"
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input a valid email address!",
          },
        ]}
        className="mb-4"
      >
        <Input
          className="w-full px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm border rounded outline-none"
          placeholder="Enter your email address"
        />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          {
            required: true,
            pattern: /^\d+$/,
            message: "Please input a valid phone number!",
          },
        ]}
        className="mb-4"
      >
        <Input
          className="w-full px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm border rounded outline-none"
          placeholder="Enter your phone number"
        />
      </Form.Item>

      <Form.Item
        hasFeedback
        name="cv"
        label="CV"
        rules={[{ required: true, message: "Please provide your CV" }]}
        className="file-input-icon-wrapper"
      >
        <label className="file-input-icon">
          <div className="uploaded-file-name">
            {!cv ? "No file selected." : <div>{cv.name}</div>}
          </div>
          <input
            type="file"
            id="cover_letter"
            className="cover-letter file-input "
            onChange={handleCV}
          />
        </label>
      </Form.Item>

      <Form.Item
        label="Cover Letter"
        hasFeedback
        name="cover_letter"
        rules={[
          { required: true, message: "Please provide your cover letter" },
        ]}
        className="file-input-icon-wrapper"
      >
        <label className="">
          <div className="">
            {!cover_letter ? (
              "No file selected."
            ) : (
              <div>{cover_letter[0]?.name}</div>
            )}
          </div>
          <input
            type="file"
            id="cover_letter"
            className="cover-letter file-input"
            onChange={handleCoverLetter}
          />
        </label>
      </Form.Item>

      <ReCAPTCHA
        ref={recaptchaRef}
        datatype="image"
        sitekey="6Lf8xZ4pAAAAAKBGk_kfWHOs7XxmQX88U4-89bK4"
        onChange={onChangeCaptcha}
      />

      <Form.Item>
        <button
          type="submit"
          className="bg-primary text-white hover:text-primaryYellow  transition duration-300 px-4 py-2 rounded-lg text-sm md:text-base"
        >
          Submit Application
        </button>
      </Form.Item>
    </Form>
  );
}
