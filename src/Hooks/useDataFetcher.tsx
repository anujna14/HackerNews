import { useState, useEffect } from "react";
import { getStoriesIds } from "../utils/apis";

const useDataFetcher = (type: string) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getStoriesIds(type)
      .then((stories: any) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);

  return { isLoading, stories };
};

export default useDataFetcher;
