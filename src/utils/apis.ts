import axios from "axios";
import { BASE_API_URL } from "../Constants/api.constant";

const getStoryInfo = async (id: number) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    // console.log("story************", story.data)
    return story.data;
  } catch (error) {
    return { error: error };
  }
};

export const getStoriesIds = async (type: string) => {
  const response = await axios.get(`${BASE_API_URL}/${type}stories.json`);
  const storyIds = response.data;
  return await Promise.all(storyIds.slice(0, 30).map(getStoryInfo))
    .then((stories) => stories)
    // return stories;
    .catch((error) => {
      console.log(error);
    });
};
