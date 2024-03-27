import { useEffect, useRef, useState } from "react";

//axios

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

//dayjs
import dayjs from "dayjs";
// import { useParams } from "react-router-dom";
import axiosInstance from "@/axiosInstance/axiosInstance";
import ReCAPTCHA from "react-google-recaptcha";

const BookAppointment = () => {
  const checkboxRef = useRef(null);
  const innerBannerInfo = {
    pageName: "Doctor Appointment",
  };

  //changes
  const [patient_type, setPatientType] = useState("");
  const [gender_type, setGenderType] = useState("");
  const [filtered_depart_id, setFilteredDepartId] = useState("");
  const [filtered_doctor_id, setFilteredDoctorId] = useState("");
  const [departmentList, setDepartmentList] = useState([]);
  const [department_name, setDepartmentName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorList, setDoctorList] = useState([]);
  const [captchaValue, setCaptchaValue] = useState(null);

  //dayjs states
  const today = dayjs(new Date()?.toISOString(), "YYYY-MM-DD");
  const [birthDate, setBirthDate] = useState<any>(today);
  const handleBirthDateChange = (dateString: any) => {
    setBirthDate(dateString);
  };
  const todayDate = dayjs(new Date()?.toISOString(), "YYYY-MM-DD");
  const [appointDate, setAppointDate] = useState<any>(todayDate);
  const handleAppointDateChange = (dateString: any) => {
    setAppointDate(dateString);
  };

  const { TextArea } = Input;
  const [form] = Form.useForm();
  const { Option, OptGroup } = Select;

  const handle_patient_type = (e: any) => {
    setPatientType(e.target.value);
  };

  const handle_gender_type = (e: any) => {
    setGenderType(e.target.value);
  };

  //   // params

  //   const {departSlug,doctorSlug}=useParams();
  //    useEffect(()=>{

  //     const department_filter=departmentList?.map((data)=>{
  //       return (
  //         data.departments.filter((data)=>{
  //           return data.slug===departSlug
  //         })
  //       )
  //      })

  //     if(department_filter.length>0){
  //       const filteredDepartId=department_filter[0]?.map((data)=>{
  //         return data?.id
  //        })
  //       setFilteredDepartId(filteredDepartId[0]);

  //     }
  //   },[departSlug,departmentList]);

  //   //fetching doctor according to the department name but from params

  //   useEffect(()=>{

  //     fetchParamsDoctor();

  //   },[filtered_depart_id]);

  //   const fetchParamsDoctor = async () => {
  //     try {
  //       const response = await axios.get(
  //         import.meta.env.VITE_API_BASE_URL +
  //           `/api/department/doctors/${filtered_depart_id}`
  //       );
  //       const doctor_filter = response.data?.filter((data) => {
  //         return data.slug === doctorSlug;
  //       });
  //       if (doctor_filter[0]) {
  //         setFilteredDoctorId(doctor_filter[0].id);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  const handleAppointment = async (values: any) => {
    const payload = {
      first_name: values.first_name,
      middle_name: values.middle_name,
      last_name: values.last_name,
      type: patient_type,
      gender: gender_type,
      dob: dayjs(birthDate).format("YYYY-MM-DD"),
      email: values.email,
      address: values.address,
      mobile: values.phone_number,
      // department_id:departSlug ? filtered_depart_id :department_name,
      // doctor_id:doctorSlug ? filtered_doctor_id : doctorName,
      department_id: department_name,
      doctor_id: doctorName,
      appointment_date: dayjs(appointDate).format("YYYY-MM-DD"),
      additional_information: values.message,
    };

    try {
      if (captchaValue && payload) {
        const response = await axiosInstance.post("/appointment/add", payload);
        if (response.status === 200) {
          notification.success({
            message: response.data.message,
          });
          form.resetFields();
          setBirthDate(" ");
          setAppointDate(" ");
          window.location.href = "/thankyou";
        } else {
          notification.error({
            message: "Sorry Something went wrong",
          });
          form.resetFields();
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
    }
  };

  useEffect(() => {
    fetchDepartmentList();
  }, []);

  const fetchDepartmentList = async () => {
    const response = await axiosInstance.get("/departments/list");
    setDepartmentList(response.data);
  };

  const formattedDepartment = departmentList?.map((department: any) => ({
    id: department.id,
    label: department.name,
    value: department.name,
    children: department.departments.map((subcategory: any, index: any) => ({
      label: subcategory.name,
      value: subcategory.name,
      id: subcategory.id,
    })),
  }));

  const handleDepartment = (value: any) => {
    setDepartmentName(value);
  };

  useEffect(() => {
    if (department_name !== "") {
      fetchDoctorList();
    }
  }, [department_name]);

  const fetchDoctorList = async () => {
    const response = await axiosInstance.get(
      `/department/doctors/${department_name}`
    );
    setDoctorList(response.data);
  };
  const formattedDoctorList = doctorList?.map((doctor: any) => ({
    id: doctor.id,
    label: doctor.name,
    value: doctor.name,
  }));

  const handleDoctorChange = (value: any) => {
    setDoctorName(value);
  };
  function onChangeCaptcha(value: any) {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  }

  return (
    <>
      <div className="book-appointment-page">
        <div className="section-wrapper">
          <Form
            form={form}
            className="appointment-form"
            onFinish={handleAppointment}
          >
            <h2 className="heading">Appointment Form</h2>
            <div className="">
              <div className="select-style">
                <div className="w-[100%]">
                  <div
                    className="label"
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    Department
                  </div>
                  <div>
                    <Form.Item
                      name="department"
                      // rules={[{ required: true, message: "Please select a department" }]}
                    >
                      <div>
                        <Select
                          defaultValue="Select a Department"
                          onChange={handleDepartment}
                        >
                          {formattedDepartment.map((department) => (
                            <OptGroup
                              label={department.label}
                              key={department.value}
                            >
                              {department.children.map((subcategory: any) => (
                                <Option
                                  key={subcategory.value}
                                  value={subcategory.id}
                                >
                                  {subcategory.label}
                                </Option>
                              ))}
                            </OptGroup>
                          ))}
                        </Select>
                      </div>
                    </Form.Item>
                  </div>
                </div>
                <div className="w-[100%]">
                  <div
                    className="label"
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    Doctor
                  </div>
                  <div>
                    <Form.Item name="doctor">
                      {/* <div>
                                  {
                                    doctorSlug ? <Select defaultValue={doctorSlug}/>:
                                    <Select defaultValue="Select A Doctor"   onChange={handleDoctorChange}  >

                                    {formattedDoctorList.map(doctor => (
                                            <Option label={doctor.label} value={doctor.id}  key={doctor.value}>
                                              {doctor.label}
                                            
                                    </Option>
                                    ))}
                                     
                                    </Select>
                                  }
                                </div> */}
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div
                className="datepicker-cover"
                style={{
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Appointment Date
                </div>

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
            <div className="patient-infos">
              <div className="title">Patient Info</div>
              <div className="fields-wrapper">
                <div className="new-or-old">
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
                <div className="triple-inputs-wrapper">
                  <div className="input-and-label">
                    <div className="flex items-center gap-2">
                      <div className="label">First Name</div>
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
                        className="lg:w-[380px] w-[300px]"
                        size="large"
                        placeholder="Enter your full name here"
                      />
                    </Form.Item>
                  </div>

                  <div className="input-and-label">
                    <div className="flex items-center gap-2">
                      <div className="label">Middle Name</div>
                    </div>
                    <Form.Item name="middle_name" className="">
                      <Input
                        className="lg:w-[380px] w-[300px]"
                        size="large"
                        placeholder="Enter your middle name here"
                      />
                    </Form.Item>
                  </div>
                  <div className="input-and-label">
                    <div className="flex items-center gap-2">
                      <div className="label">Last Name</div>
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
                        className="lg:w-[380px] w-[300px]"
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
                <div>
                  Date of Birth
                  <DatePicker
                    format="YYYY-MM-DD"
                    size="large"
                    // disabledDate={(current) =>
                    //   current && current < dayjs().startOf("day")
                    // }
                    value={birthDate}
                    onChange={handleBirthDateChange}
                  />
                </div>
                <div className="triple-inputs-wrapper">
                  <div className="input-and-label">
                    <div className="flex items-center gap-2">
                      <div className="label">Address</div>
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
                        className="lg:w-[380px] w-[300px]"
                        size="large"
                        placeholder="Enter your full address"
                      />
                    </Form.Item>
                  </div>
                  <div className="input-and-label">
                    <div className="flex items-center gap-2">
                      <div className="label">Mobile Number</div>
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
                  <div className="input-and-label">
                    <div className="flex items-center gap-2">
                      <div className="label">Email Address</div>
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
                </div>
                <div className="brief-input-wrapper">
                  <div className="flex items-center gap-2">
                    <div className="field-label">
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
                      className="lg:w-[380px] w-[300px]"
                      placeholder="Enter your disease name here"
                      autoSize={false}
                    />
                  </Form.Item>
                </div>
                {/* <div className="terms-and-conditions">
                                    <input
                                        type="checkbox"
                                        id="terms_and_conditions"
                                        name="terms-and-conditions"
                                        className="checkbox"
                                        // value="Car"
                                        ref={checkboxRef}
                                        required
                                    ></input>
                                    <div
                                        className="text-wrapper"
                                        onClick={handleTermsAndConditionsClick}
                                    >
                                        I Agree{" "}
                                        <span className="highlight">
                                            Term and Conditions
                                        </span>
                                    </div>
                                </div> */}
                <ReCAPTCHA
                  sitekey="6Lf8xZ4pAAAAAKBGk_kfWHOs7XxmQX88U4-89bK4"
                  onChange={onChangeCaptcha}
                />
                <Button className="choose-btn" htmlType="submit">
                  Book Appointment
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
