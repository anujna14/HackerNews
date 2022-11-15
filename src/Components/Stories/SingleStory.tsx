import React from "react";
import classes from "./SingleStory.module.css";
import { BsFillTriangleFill } from "react-icons/bs";
import { EXTERNAL_URl } from "../../Constants/api.constant";

const Link = ({ url, title }: { url: string; title: string }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const SingleStory = (props: any) => {
  const hostname: string | undefined = props.story.url ? new URL(props.story.url).hostname : "anonymous";
  //   console.log("HostName", hostname);
  return (
    <div className={classes.story_element}>
      <div>
        <p>{props.index + 1}.</p>
      </div>
      <div className={classes.story_content}>
        <span className={classes.triangle_icon}>
          <BsFillTriangleFill style={{ color: "#999999", fontSize: "10px", padding: "2px", marginRight: "2px" }} />
        </span>
        <p className={classes.story_title}>
          <Link url={props.story.url} title={props.story.title} />
        </p>

        <span className={classes.story_url}>
          <Link url={`${EXTERNAL_URl}/from?site=${hostname}`} title={`(${hostname})`} />
        </span>

        <span className={classes.story_by}>
          by <Link url={`${EXTERNAL_URl}/user?id=${props.story.by}`} title={props.story.by} />
          <span className={classes.pipe}>|</span>
          <span>Hide</span>
          <span className={classes.pipe}>|</span>
          <span>
            <Link
              url={`${EXTERNAL_URl}/item?id=${props.story.id}`}
              title={`${props.story.kids && props.story.kids.length > 0 ? props.story.kids.length : 0} comments`}
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default SingleStory;
