/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface DetailProps {
  images: GalleryImage[];
}

export default function GalleryDetail({ images }: DetailProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-4 md:mt-8">
        {images?.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer"
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
          >
            <img
              src={photo?.image_link}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-96 object-cover"
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images?.map((photo, index: number) => ({
          src: photo?.image_link,
          alt: `Gallery Image ${index + 1}`,
        }))}
        index={currentIndex} // Set the current index for the lightbox
      />
    </section>
  );
}
