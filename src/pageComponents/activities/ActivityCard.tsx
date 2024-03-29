/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
interface ActivityProps {
  imageUrl: string;
  title: string;
  description: string;
  slug: string;
}

export default function ActivityCard({
  imageUrl,
  title,
  description,
  slug,
}: ActivityProps) {
  const router = useRouter();
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
      <div className="">
        <img className="w-full h-60 object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p
          className="text-gray-700  line-clamp-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="px-6 pb-4">
        <button
          onClick={() => router.push(`activities/${slug}`)}
          className="bg-primary hover:text-primaryYellow transition duration-300 text-white font-bold py-2 px-4 rounded-lg"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
