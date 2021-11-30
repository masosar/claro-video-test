import React, { useEffect } from "react";
// redux
import { fetchAllUsers } from "../store/slices/movies";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const { list: movies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="clarovideo-wrapper-grid" data-testid="gridpeliculas">
      {movies.map((movie, index) => (
        <div key={index} className="clarovideo-card-container">
          <img
            src={movie.image_small}
            alt={movie.title}
            className="clarovideo-banner-img"
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;
