/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface PhotosCardProps {
  name: string;
  slug: string;
  image_link: string;
}

const GalleryCard = ({ name, slug, image_link }: PhotosCardProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <Link href={`/gallery/${slug}`}>
        <div className="relative">
          <img
            src={image_link}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-30 hover:opacity-100 duration-300"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <p className="text-white font-semibold text-sm md:text-base lg:text-lg">{name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GalleryCard;
