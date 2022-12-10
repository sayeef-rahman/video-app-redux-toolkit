import axiosInstance from "../../utils/axios";

export const getReatedVideos = async ({ tags, id }) => {
  const limit = 5;
  let queryString =
    tags?.legth > 0
      ? tags.map((tag) => `tags_like${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;
  const response = await axiosInstance.get(`/videos?${queryString}`);
  return response.data;
};

export default getReatedVideos;