import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import useFetchData from "@/hooks/useFetchData";
import GalleryDetail from "@/pageComponents/gallery/GalleryDetail";
import Metatag from "@/utils/Metatag";
import { useRouter } from "next/router";

export default function GalleryDetailImages({ data }: any) {
  const router = useRouter();
  const { slug } = router.query;
  const galleryFound: Gallery = data?.find(
    (glry: Gallery) => glry?.slug === slug
  );
  const { fetchedData: imagesList } = useFetchData(`gallery/${slug}/images`);
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading={galleryFound?.name || "Gallery"}
        description=""
        og_image={galleryFound?.image_link}
      />
      <CommonBanner
        headerName={galleryFound?.name}
        imageLink={galleryFound?.image_link}
      />
      <GalleryDetail images={imagesList} />
    </Layout>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(`gallery/images`);

    return {
      props: { data },
    };
  } catch (e: any) {
    if (e.response && e.response.status === 429) {
      const retryAfter = parseInt(e.response.headers["retry-after"]);
      console.log("This is retry after", retryAfter);
      if (!isNaN(retryAfter)) {
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        try {
          console.log("refetching");
          const { data } = await SSR_fetchData(`gallery/images`);
          return {
            props: {
              data,
            },
          };
        } catch (retryError) {
          console.error("Retry failed:", retryError);
        }
      }

      return {
        props: {
          data: null,
        },
      };
    } else {
      return {
        props: {
          data: null,
        },
      };
    }
  }
}
