/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Button, Modal } from "antd";
import { AiFillEye } from "react-icons/ai";

interface NoticeProps {
  name: string;
  date: string;
  image: string;
}

export default function NoticeCard({ notice }: { notice: NoticeProps }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleViewImage = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="border border-gray-500 rounded-2xl pl-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-700  font-medium text-base md:text-lg lg:text-xl">
              {notice.date}
            </span>
            <h3 className="text-lg md:text-xl lg:text-2xl font-normal text-primary mb-2">
              {notice.name}
            </h3>
          </div>
          <div>
            <button
              className=" bg-primary text-white px-4 py-2 text-base lg:text-lg font-bold rounded-s-xl"
              onClick={handleViewImage}
            >
              <AiFillEye className="inline mr-1" />
              View
            </button>
          </div>
        </div>
      </div>
      <Modal open={modalVisible} onCancel={handleCloseModal} footer={null}>
        <img
          src={notice.image}
          alt={notice.name}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Modal>
    </>
  );
}
