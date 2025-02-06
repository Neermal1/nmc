import axiosInstance from "@/axiosInstance/axiosInstance";

export const getNews = async (page: number) => {
  try {
    // Add a unique query to bypass any caching
    const response = await axiosInstance.get(`news/list?page=${page}&_=${new Date().getTime()}`);

    // Assuming the response structure has 'data' for posts and 'total' for total number of posts
    const posts = response.data.data;

    // Pagination logic: slice posts based on the current page
    const totalPosts = posts.slice(page === 1 ? 0 : (page - 1) * 10, page * 10);

    // Calculate the total number of pages based on the total posts count
    const totalPages = Math.ceil(response.data.total / 10); // Assuming 'total' is the total number of posts

    return {
      totalPosts,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return {
      totalPosts: [],
      totalPages: 0,
    };
  }
};
