import { INotice } from "@/interface/interface";
import { formatDate } from "@/utils/FormatDate";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";

export default function NoticeCard({ notice }: { notice: INotice }) {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleViewImage = () => {
    const isPDF = notice?.image_link?.endsWith(".pdf");

    if (isPDF) {
      window.open(`${notice?.image_link}`, "_blank");
    } else {
      // If the notice is an image, display it in the modal
      setModalVisible(true);
    }
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
              {formatDate(notice?.created_at)}
            </span>
            <h3 className="text-sm md:text-base lg:text-lg font-normal text-primary mb-2">
              {notice?.title}
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
          src={notice?.image_link}
          alt={notice?.title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Modal>
    </>
  );
}
