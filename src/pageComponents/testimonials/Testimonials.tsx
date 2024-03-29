import React, { useState } from "react";
import TextTestimonials from "./TextTestimonial";
import VideoTestimonials from "./VideoTestimonial";

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"comments" | "videos">("comments");

  return (
    <div className="component-padding layout">
      <div>
        <h2 className="lg:text-[36px]  text-[28px] font-bold text-primary mb-4 text-center">
          Testimonials
        </h2>

        <div className="flex items-center justify-center space-x-4 lg:space-x-8 mb-4">
          <button
            className={`px-4 py-2 text-lg lg:text-xl font-medium ${
              activeTab === "comments"
                ? " text-primary  border-b-2 border-primary"
                : " text-gray-700"
            }`}
            onClick={() => setActiveTab("comments")}
          >
            Text
          </button>
          <button
            className={`px-4 py-2 text-lg lg:text-xl font-medium ${
              activeTab === "videos"
                ? " text-primary  border-b-2 border-primary"
                : " text-gray-700"
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </button>
        </div>

        <div className="mt-4 lg:mt-8">
          {activeTab === "comments" && <TextTestimonials />}
          {activeTab === "videos" && <VideoTestimonials />}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
