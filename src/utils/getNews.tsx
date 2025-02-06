import axiosInstance from "@/axiosInstance/axiosInstance";

export const getNews = async (page: number) => {
  try {
    // Include the page parameter in the API request
    const response = await axiosInstance.get(`news/list?page=${page}`);

    const posts = response.data.data; // Assuming the response structure has 'data' for posts

    // Pagination logic: slice posts based on the current page
    const totalPosts = posts.slice(page === 1 ? 0 : (page - 1) * 10, page * 10);

    const totalPages = Math.ceil(response.data.total / 10); // Assuming 'total' is the total number of posts

    return {
      totalPosts,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      totalPosts: [],
      totalPages: 0,
    };
  }
};
