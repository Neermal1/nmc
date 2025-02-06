import { getNews } from "@/utils/getNews";
import NewsMainPage from "..";

export async function getStaticPaths() {
  try {
    const { totalPages } = await getNews(1);

    const paths = Array.from({ length: totalPages }, (_, i) => ({
      params: { page: (i + 1).toString() },
    }));

    return {
      paths,
      fallback: "blocking", // Allows new pages to be generated on demand
    };
  } catch (error) {
    console.error("Error fetching news pages:", error);
    return {
      paths: [],
      fallback: "blocking", // Handles unexpected failures gracefully
    };
  }
}

export async function getStaticProps({ params }: { params: { page: string } }) {
  try {
    const pageNumber = parseInt(params.page, 10);
    if (isNaN(pageNumber) || pageNumber < 1) throw new Error("Invalid page number");

    const props = await getNews(pageNumber);

    return {
      props: {
        ...props,
        activePage: pageNumber,
      },
      revalidate: 60, // Ensures periodic updates every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching news for page:", params.page, error);
    return {
      notFound: true, // Returns 404 if there's an issue
    };
  }
}

const NewsByPage = (props: any) => {
  return <NewsMainPage {...props} />;
};

export default NewsByPage;
