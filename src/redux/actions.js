export const newsFetching = () => {
  return {
    type: "NEWS_FETCHING",
  };
};

export const newsFetched = (data) => {
  return {
    type: "NEWS_FETCHED",
    payload: data,
  };
};
export const newsFetchingError = () => {
  return {
    type: "NEWS_FETCHING_ERROR",
  };
};
