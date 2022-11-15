import React from "react";
import classes from "./LoadingIndicator.module.css";

const LoadingIndicator = () => {
  return (
    <div className={classes.loading}>
      <div className={classes.lds_ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className={classes.loading_txt}>Loading!</div>
    </div>
  );
};

export default LoadingIndicator;
