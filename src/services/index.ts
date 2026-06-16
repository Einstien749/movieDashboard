import client from "../api/client";

export const getRatedMovies = async () => {
  try {
    const response = await client.get("account/23301484/favorite/movies");
    console.log(response?.data?.results)
    return response?.data?.results;
  } catch (err) {
    console.log(err);
    return [];
  }
};
