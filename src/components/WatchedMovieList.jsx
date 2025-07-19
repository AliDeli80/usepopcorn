import React from "react";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({ watched, onDeletWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeletWatched={onDeletWatched}
        />
      ))}
    </ul>
  );
}
