import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import useFetchData from "@/hook/useFetchData";
import GalleryDetail from "@/pageComponents/gallery/GalleryDetail";
import Metatag from "@/utils/Metatag";
import { useRouter } from "next/router";

export default function GalleryDetailImages() {
    const router = useRouter();
    const { slug } = router.query;
    const {fetchedData: gallery} = useFetchData("gallery/images");
    const galleryFound: Gallery = gallery?.find((glry: Gallery)=> glry?.slug === slug)
    const {fetchedData: imagesList} = useFetchData(`gallery/${slug}/images`)
    return (
    <Layout>
      <Metatag heading="NMC" subheading="Gallery" og_image="" />
      <CommonBanner headerName={galleryFound?.name} imageLink={galleryFound?.image_link} />
      <GalleryDetail  images={imagesList} />
    </Layout>
  );
}
