import { useParams } from "react-router";
import useDataFetcher from "../../Hooks/useDataFetcher";
import SingleStory from "./SingleStory";
import { Story } from "../../utils/storyinterface";
import Home from "../../Pages/Home";
import classes from "./ShowStories.module.css";
import LoadingIndicator from "../UI/LoadingIndicator";
import { SearchContext } from "../../Context/SearchContext";
import { useContext  } from "react";

const ShowStories = () => {
  const { type } = useParams<{ type?: string }>();
  const { searchValue } = useContext(SearchContext);
  //   console.log("Type",type)
  //   console.log("search value:", searchValue)

  //   console.log("Type", type);
  const { isLoading, stories } = useDataFetcher(type !== undefined ? type! : searchValue);

  //   console.log("stories^^^^^^^");

  if (stories.length === undefined) {
    return <h1 style={{textAlign: "center"}}>No results found</h1>
  } else {
    return (
      <div className={classes.story_container}>
        {type === undefined ? (
          <>
            {isLoading && <LoadingIndicator />}
            {!isLoading && (
              <div>
                {stories.map((story: Story, i) => (
                  <SingleStory key={story.id} story={story} index={i} />
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <Home>
              {isLoading && <LoadingIndicator />}
              {!isLoading && (
                <div>
                  {stories.map((story: Story, i) => (
                    <SingleStory key={story.id} story={story} index={i} />
                  ))}
                </div>
              )}
            </Home>
          </>
        )}
      </div>
    );
  }
};

export default ShowStories;
