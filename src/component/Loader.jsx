import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "../css/homePage.css";

const Loader = ({ loading }) => {
  return (
    <>
      <div class="loader-wrapper"></div>
      <div class="loading-content">
        <HashLoader
          class="loading"
          color="red"
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default Loader;
