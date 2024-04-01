// NotFoundPage.tsx
import React, { useEffect, useRef } from "react";
import animated from "@/animated-wave/404.json";
import Lottie from "lottie-web";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";

const NotFoundPage: React.FC = () => {
  const container = useRef(null);
  useEffect(() => {
    if (container.current) {
      const animation = Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animated,
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);
  return (
    <Layout>
      <div className="h-[90vh] px-8 md:px-16 lg:px-24 xl:px-32 py-8 lg:py-0">
        <div className="grid space-y-4">
          <div className="w-full">
            <div className="h-80" ref={container}></div>
          </div>
          <div className="w-full flex items-center justify-center pb-8">
            <div className="text-center">
              <p className="text-lg mb-8">
                It seems you&apos;ve stumbled upon a place that doesn&apos;t
                exist.
              </p>
              <Link
                href="/"
                className="bg-primary text-lg font-bold text-white py-2 px-4 rounded-md transition duration-300 "
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
