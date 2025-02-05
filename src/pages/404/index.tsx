import React from "react";
import dynamic from "next/dynamic";
import animated from "@/animated-wave/404.json";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";

// Dynamically import LottieAnimation to prevent SSR issues
const LottieAnimation = dynamic(() => import("@/components/LottieAnimation"), { ssr: false });

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="h-[90vh] px-8 md:px-16 lg:px-24 xl:px-32 py-8 lg:py-0">
        <div className="grid space-y-4">
          <div className="w-full">
            {/* Lottie animation component */}
            <LottieAnimation animationData={animated} />
          </div>
          <div className="w-full flex items-center justify-center pb-8">
            <div className="text-center">
              <p className="text-lg mb-8">
                It seems you&apos;ve stumbled upon a place that doesn&apos;t exist.
              </p>
              <Link
                href="/"
                className="bg-primary text-lg font-bold text-white py-2 px-4 rounded-md transition duration-300"
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
