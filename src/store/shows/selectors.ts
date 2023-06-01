import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const getAllShows = (state: RootState) => state.shows;

export const getTopRatedShows = createSelector(getAllShows, (allshows) => {
  let shows = [...allshows.shows];

  const topRated = shows.sort((a, b) => b.weight - a.weight);

  return topRated;
});
