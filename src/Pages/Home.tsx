import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import classes from "./Home.module.css";

type Props = {
  children?: React.ReactNode;
};
const Home = ({children}:Props) => {
    console.log("children*****", children)
  return (
    <div className={classes["home-container"]}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Home;
