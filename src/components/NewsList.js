import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../hooks/useHttp";
import Spinner from "./Spinner";

import {
  newsFetching,
  newsFetched,
  newsFetchingError,
} from "./../redux/actions";

function NewsList() {
  const { news, newsLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();
  useEffect(() => {
    dispatch(newsFetching());
    request("http://localhost:3001/news")
      .then((data) => console.log(data))
      .chatch((err) => console.log(err));
  }, []);
  return (
    <div className="">
      <h1>NNW</h1>
      <Spinner />
    </div>
  );
}

export default NewsList;
