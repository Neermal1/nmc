import { getNews } from "@/utils/getNews";
import NewsMainPage from "..";

export async function getStaticPaths() {
  try {
    const { totalPages } = await getNews(1);

    const paths = Array.from({ length: totalPages }).map((_, i) => {
      return {
        params: {
          page: (i + 1).toString(),
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        data: null,
      },
    };
  }
}

export async function getStaticProps({ params: { page } }: { params: any }) {
  const props = await getNews(parseInt(page));

  return {
    props: {
      ...props,
      activePage: parseInt(page),
    },
  };
}

const NewsByPage = (props: any) => {
  return (
    <>
      <NewsMainPage {...props} />;
    </>
  );
};

export default NewsByPage;
