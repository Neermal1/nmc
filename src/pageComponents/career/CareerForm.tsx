import { Form, Input, Button, Upload, message, UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const props: UploadProps = {
  name: "file",
  action: "https://admin.xavierschool.edu.np/api/career-application/store",
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      "0%": "#108ee9",
      "100%": "#87d068",
    },
    strokeWidth: 3,
    format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
  },
};

interface Payload {
  vacancy_id: string;
  full_name: string;
  email: string;
  phone: string;
  cv: File;
  cover_letter: File;
}

export default function CareerForm({ vacancyId }: any) {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const payload: Payload = {
      vacancy_id: vacancyId,
      full_name: values.full_name,
      email: values.email,
      phone: values.phone,
      cv: values.cv?.[0]?.originFileObj,
      cover_letter: values.cover_letter?.[0]?.originFileObj,
    };

    console.log(payload);

    try {
      const response = await axios.post(
        "https://admin.xavierschool.edu.np/api/career-application/store",
        payload
      );

      if (response.status === 200) {
        message.success("Your application has been submitted successfully!");
        form.resetFields();
      } else {
        message.error("Something went wrong. Please try again.");
      }
    } catch (error: any) {
      message.error("An error occurred. Please try again.");
    }
  };

  return (
    <Form
      form={form}
      name="careerForm"
      onFinish={onFinish}
      className="bg-gray-50 p-4 rounded shadow-md"
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
        label="CV"
        name="cv"
        rules={[{ required: true, message: "Please upload your CV!" }]}
        valuePropName="fileList"
        getValueFromEvent={(e: any) => e.fileList}
        className="mb-4"
      >
        <Upload
          {...props}
          name="cv"
          accept=".pdf"
          maxCount={1}
          showUploadList={true}
        >
          <Button icon={<UploadOutlined />}>Upload CV</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Cover Letter"
        name="cover_letter"
        rules={[
          { required: true, message: "Please upload your cover letter!" },
        ]}
        valuePropName="fileList"
        getValueFromEvent={(e: any) => e.fileList}
        className="mb-4"
      >
        <Upload
          {...props}
          name="cover_letter"
          accept=".pdf"
          maxCount={1}
          showUploadList={true}
        >
          <Button icon={<UploadOutlined />}>Upload Cover Letter</Button>
        </Upload>
      </Form.Item>

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
