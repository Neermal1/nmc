import useFetchData from "@/hooks/useFetchData";
import GalleryCard from "./GalleryCard";

export default function GalleryList() {
  const { fetchedData: photoAlbums } = useFetchData("gallery/images");
  return (
    <section className="w-full h-full px-8 md:px-16 lg:px-24 xl:px-32 mt-4 md:mt-8">
      <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-8 lg:gap-12 mb-4 md:mb-8">
        {photoAlbums?.map((album: Gallery, index: number) => (
          <GalleryCard
            key={index}
            name={album?.name}
            slug={album?.slug}
            image_link={album?.image_link}
          />
        ))}
      </div>
    </section>
  );
}
