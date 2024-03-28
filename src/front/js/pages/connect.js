import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { ScaleLoader } from "react-spinners";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Connect = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getBlogs();
    console.log(store.blogs, "blogs should be here");
  }, [store.blogs]);

  return (
    <div className="connect-container m-5 d-flex justify-content-center">
      <div>
        {store.blogs &&
          store.blogs.map((index) => <div key={index}>{store.blogs.user}</div>)}
      </div>
    </div>
  );
};
