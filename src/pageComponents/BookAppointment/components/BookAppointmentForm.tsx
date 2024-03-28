import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

//antd
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  notification,
} from "antd";

//axiosInstance
import axiosInstance from "@/axiosInstance/axiosInstance";

//dayjs
import dayjs from "dayjs";
import ReCAPTCHA from "react-google-recaptcha";

const BookAppointmentForm = ({ departSlug, doctorSlug }: any) => {
  //date format
  const today = dayjs(new Date()?.toISOString(), "YYYY-MM-DD");

  //antd props
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const { Option, OptGroup } = Select;

  //states
  const [patient_type, setPatientType] = useState("");
  const [gender_type, setGenderType] = useState("");
  const [departmentList, setDepartmentList] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [department_id, setDepartmentID] = useState("");
  const [doctorID, setdoctorID] = useState("");

  const [filtered_depart_id, setFilteredDepartId] = useState("");
  const [filtered_doctor_id, setFilteredDoctorId] = useState("");

  const [captchaValue, setCaptchaValue] = useState(null);
  const [appointDate, setAppointDate] = useState<any>(today);
  const [birthDate, setBirthDate] = useState<any>(today);

  const handleBirthDateChange = (dateString: any) => {
    setBirthDate(dateString);
  };
  // const todayDate = dayjs(new Date()?.toISOString(), "YYYY-MM-DD");

  const handleAppointDateChange = (dateString: any) => {
    setAppointDate(dateString);
  };

  const handle_patient_type = (e: any) => {
    setPatientType(e?.target?.value);
  };

  const handle_gender_type = (e: any) => {
    setGenderType(e?.target?.value);
  };

  //Here filtering the doctor and department to get their respective id and their name will be received from query
  const router = useRouter();

  // const { departSlug, doctorSlug } = router.query;

  useEffect(() => {
    fetchDepartmentID_from_query();
  }, [departSlug, departmentList]);

  const fetchDepartmentID_from_query = async () => {
    try {
      console.log(departmentList);
      const department_filter = departmentList?.map((data: any, index) => {
        return data?.departments?.filter((data: any) => {
          return data?.slug === departSlug;
        });
      });

      if (department_filter?.length > 0) {
        const filteredDepartId = department_filter?.[0]?.map((data: any) => {
          return data?.id;
        });

        console.log("This is filterred depart id", { filteredDepartId });

        setFilteredDepartId(filteredDepartId[0]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDoctorID_from_query();
    console.log(filtered_depart_id);
  }, [filtered_depart_id]);

  const fetchDoctorID_from_query = async () => {
    try {
      const response = await axiosInstance.get(
        `departments/${filtered_depart_id}/doctors`
      );
      console.log("This is filterred doctor id", response);
      const doctor_filter = response.data?.filter((data: any, index: any) => {
        return data?.slug === doctorSlug;
      });
      console.log("This is filterred depart id", { filtered_doctor_id });

      if (doctor_filter[0]) {
        setFilteredDoctorId(doctor_filter?.[0]?.id);
      }
    } catch (e) {
      console.log(e);
    }
  };

  //end of fetching here...

  const handleAppointment = async (values: any) => {
    const payload = {
      first_name: values?.first_name,
      middle_name: values?.middle_name,
      last_name: values?.last_name,
      type: patient_type,
      gender: gender_type,
      dob: dayjs(birthDate).format("YYYY-MM-DD"),
      email: values?.email,
      address: values?.address,
      mobile: values?.phone_number,
      department_id: departSlug ? filtered_depart_id : department_id,
      doctor_id: doctorSlug ? filtered_doctor_id : doctorID,
      appointment_date: dayjs(appointDate).format("YYYY-MM-DD"),
      additional_information: values?.message,
    };

    console.log(payload);

    try {
      if (captchaValue && payload) {
        const response = await axiosInstance.post("appointment/add", payload);
        if (response?.status === 200) {
          notification.success({
            message: response?.data?.message,
          });
          form.resetFields();
          recaptchaRef.current.reset();

          setBirthDate("");
          setAppointDate("");
        } else {
          notification.error({
            message: "Sorry Something went wrong",
          });
          form.resetFields();
          recaptchaRef.current.reset();
        }
      } else {
        notification.error({
          message: "Please verify you are a human or not",
        });
      }
    } catch (e) {
      console.log(e);
      notification.error({
        message: "Sorry Something went wrong again",
      });

      form.resetFields();
      recaptchaRef.current.reset();
    }
  };

  useEffect(() => {
    fetchDepartmentList();
  }, []);

  const fetchDepartmentList = async () => {
    const response = await axiosInstance.get("departments/list");
    setDepartmentList(response?.data);
  };

  //here formatting the department list to include in select component form antd

  const formattedDepartment = departmentList?.map((department: any, index) => ({
    id: department?.id,
    label: department?.name,
    value: department?.name,
    children: department?.departments?.map(
      (subcategory: any, index: number) => ({
        label: subcategory?.name,
        value: subcategory?.name,
        id: subcategory?.id,
      })
    ),
  }));

  const handleDepartment = (value: any) => {
    setDepartmentID(value);
  };

  useEffect(() => {
    if (department_id !== "") {
      fetchDoctorList();
    }
  }, [department_id]);

  const fetchDoctorList = async () => {
    const response = await axiosInstance.get(
      `departments/${department_id}/doctors`
    );
    setDoctorList(response?.data);
    console.log(response.data);
  };

  //here formatting the doctor list to include in select component form antd

  const formattedDoctorList = doctorList?.map((doctor: any, index) => ({
    id: doctor?.id,
    label: doctor?.name,
    value: doctor?.name,
  }));

  const handleDoctorChange = (value: any) => {
    setdoctorID(value);
  };

  //recaptcha functions
  function onChangeCaptcha(value: any) {
    setCaptchaValue(value);
  }

  const recaptchaRef: any = useRef();

  console.log(departSlug);
  console.log(doctorSlug);

  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="lg:w-[80%] bg-[white] drop-shadow-md rounded-[8px] p-6 flex items-center justify-center">
          <Form
            form={form}
            onFinish={handleAppointment}
            className="flex flex-col gap-10 lg:w-[80%]"
          >
            <div>
              <div className="flex lg:flex-row flex-col gap-8">
                <div className="w-[100%] form-gap">
                  <div className="form-label">Department</div>
                  <div>
                    <Form.Item
                      name="department"
                      // rules={[{ required: true, message: "Please select a department" }]}
                    >
                      <div>
                        {departSlug ? (
                          <Select value={departSlug} size="large" />
                        ) : (
                          <Select
                            defaultValue="Select a Department"
                            onChange={handleDepartment}
                            size="large"
                          >
                            {formattedDepartment?.map((department) => (
                              <OptGroup
                                label={department?.label}
                                key={department?.value}
                              >
                                {department?.children?.map(
                                  (subcategory: any, index: number) => (
                                    <Option
                                      key={subcategory?.value}
                                      value={subcategory?.id}
                                    >
                                      {subcategory.label}
                                    </Option>
                                  )
                                )}
                              </OptGroup>
                            ))}
                          </Select>
                        )}
                      </div>
                    </Form.Item>
                  </div>
                </div>
                <div className="w-[100%] form-gap">
                  <div className="form-label">Doctor</div>
                  <div>
                    <Form.Item name="doctor">
                      <div>
                        {doctorSlug ? (
                          <Select value={doctorSlug} size="large" />
                        ) : (
                          <Select
                            defaultValue="Select A Doctor"
                            onChange={handleDoctorChange}
                            size="large"
                          >
                            {formattedDoctorList?.map((doctor) => (
                              <Option
                                label={doctor?.label}
                                value={doctor?.id}
                                key={doctor?.value}
                              >
                                {doctor?.label}
                              </Option>
                            ))}
                          </Select>
                        )}
                      </div>
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="form-gap">
                <div className="form-label">Appointment Date</div>

                <DatePicker
                  className="datepicker-style"
                  format="YYYY-MM-DD"
                  size="large"
                  disabledDate={(current) =>
                    current && current < dayjs().startOf("day")
                  }
                  value={appointDate}
                  onChange={handleAppointDateChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="">
                  <Form.Item
                    name="patient"
                    rules={[
                      { required: true, message: "Please select an option!" },
                    ]}
                  >
                    <Radio.Group onChange={handle_patient_type}>
                      <Radio value="New Patient">New Patient</Radio>
                      <Radio value="Old Pateint">Old Patient</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="form-gap">
                    <div className="">
                      <div className="form-label">First Name</div>
                    </div>
                    <Form.Item
                      hasFeedback
                      name="first_name"
                      rules={[
                        {
                          required: true,
                          message: "Please provide your first name",
                        },
                      ]}
                      className=""
                    >
                      <Input
                        className="lg:w-[100%] w-[300px]"
                        size="large"
                        placeholder="Enter your full name here"
                      />
                    </Form.Item>
                  </div>

                  <div className="form-gap">
                    <div className="">
                      <div className="form-label">Middle Name</div>
                    </div>
                    <Form.Item name="middle_name" className="">
                      <Input
                        className="lg:w-[100%] w-[300px]"
                        size="large"
                        placeholder="Enter your middle name here"
                      />
                    </Form.Item>
                  </div>
                  <div className="form-gap">
                    <div className="">
                      <div className="form-label">Last Name</div>
                    </div>
                    <Form.Item
                      hasFeedback
                      name="last_name"
                      rules={[
                        {
                          required: true,
                          message: "Please provide your last name",
                        },
                      ]}
                      className=""
                    >
                      <Input
                        className="lg:w-[100%] w-[300px]"
                        size="large"
                        placeholder="Enter your last name here"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="gender-type">
                  <Form.Item
                    name="gender"
                    rules={[
                      { required: true, message: "Please select an option!" },
                    ]}
                  >
                    <Radio.Group onChange={handle_gender_type}>
                      <Radio value="Male" required>
                        Male
                      </Radio>
                      <Radio value="Female" required>
                        Female
                      </Radio>
                      <Radio value="Others" required>
                        Others
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
                <div className="form-gap">
                  <div className="form-label"> Date of Birth</div>
                  <DatePicker
                    format="YYYY-MM-DD"
                    size="large"
                    value={birthDate}
                    onChange={handleBirthDateChange}
                  />
                </div>
                <div className="grid  lg:grid-cols-3 gap-6">
                  <div className="form-gap">
                    <div className="">
                      <div className="form-label">Address</div>
                    </div>
                    <Form.Item
                      hasFeedback
                      name="address"
                      rules={[
                        {
                          required: true,
                          message: "Please provide your address",
                        },
                      ]}
                      className=""
                    >
                      <Input
                        className="lg:w-[100%] w-[300px]"
                        size="large"
                        placeholder="Enter your full address"
                      />
                    </Form.Item>
                  </div>
                  <div className="form-gap">
                    <div className="">
                      <div className="form-label">Mobile Number</div>
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
                        className="lg:w-[100%] w-[300px]"
                        size="large"
                        placeholder="Enter your phone number here"
                      />
                    </Form.Item>
                  </div>
                  <div className="form-gap">
                    <div className="">
                      <div className="form-label">Email Address</div>
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
                        className="lg:w-[100%] w-[300px]"
                        size="large"
                        placeholder="Enter your email address here"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="form-gap">
                  <div className="">
                    <div className="form-label">
                      Are you suffering from Any Chronic Disease?
                    </div>
                  </div>
                  <Form.Item
                    hasFeedback
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: "Please provide your disease name",
                      },
                    ]}
                    className="color-changer"
                  >
                    <TextArea
                      rows={4}
                      cols={10}
                      className="lg:w-[100%] w-[300px]"
                      placeholder="Enter your disease name here"
                      autoSize={false}
                    />
                  </Form.Item>
                </div>
                <div className="flex gap-4">
                  <input type="checkbox" />
                  <div>I Agree to Terms and Conditions</div>
                </div>
                <div className="flex flex-col gap-6">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lf8xZ4pAAAAAKBGk_kfWHOs7XxmQX88U4-89bK4"
                    onChange={onChangeCaptcha}
                  />

                  <Button
                    className="w-fit"
                    htmlType="submit"
                    style={{
                      backgroundColor: "#1f2b6c",
                      color: "white",
                    }}
                    size="large"
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default BookAppointmentForm;
