import axiosInstance from "@/axiosInstance/axiosInstance";
import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import { IMessage } from "@/interface/interface";
import MessageContent from "@/pageComponents/aboutpages/messages/MessageContent";
import Metatag from "@/utils/Metatag";

export default function MessageDetail({ message }: { message: IMessage }) {
  return (
    <>
      <Metatag
        heading="Nepal Medical College"
        subheading={message?.meta_title || "Message"}
        description={message?.meta_description || "description"}
        og_image={message?.image_link || ""}
        keywords={message?.meta_keywords || ""}
      />
      <Layout>
        <CommonBanner
          headerName="Messages from Team"
          imageLink="/images/Banners/messages.webp"
        />
        <MessageContent data={message} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const response = await axiosInstance.get("messages");
  const messages = response?.data;

  const paths = messages?.map((message: IMessage) => ({
    params: { slug: message?.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const messageSlug = params?.slug;

  try {
    const response = await axiosInstance.get(`/message/${messageSlug}`);
    const fetchedData = response?.data;
    console.log("message:", fetchedData);
    return {
      props: {
        message: fetchedData,
      },
    };
  } catch (error) {
    console.error("Error fetching message:", error);
    return {
      notFound: true,
    };
  }
}
