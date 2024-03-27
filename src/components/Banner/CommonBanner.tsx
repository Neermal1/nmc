/* eslint-disable @next/next/no-img-element */
interface BannerProps {
  imageLink: string;
  headerName: string;
}

export default function CommonBanner({ imageLink, headerName }: BannerProps) {
  return (
    <section className="relative w-full lg:h-96 overflow-hidden">
      <div>
        <img src={imageLink} alt="" className="w-full lg:h-96 object-cover" />
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center ">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
          {headerName}
        </h1>
      </div>
    </section>
  );
}
