import React, { useEffect, useState } from "react";
import add from "../assets/icons/add-circle.svg";
import logout from "../assets/icons/logout.svg";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../middlewares/auth.middleware";
import { resetAllMessages } from "../store/slices/auth.slice";
import { useNavigate } from "react-router";
import { getMovieList } from "../middlewares/movie.middleware";
import EmptyList from "./EmptyList";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { LogOutSuccess } = useSelector((state) => state.auth);
  const { Movies, PageDetails, MoviesLoading } = useSelector((state) => state.movie);

  useEffect(() => {
    if (LogOutSuccess) {
      dispatch(resetAllMessages());
      navigate("/login");
    }
  }, [LogOutSuccess]);

 
  useEffect(() => {
    dispatch(getMovieList({ page: currentPage }));
  }, [currentPage]);

  const onPageChange = (page) => setCurrentPage(page);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleAddMovie = () => {
    navigate("/add");
  };
  
  return (
    <>
      {!MoviesLoading && Movies.length === 0 ? (
        <EmptyList />
      ) : (
        <main className=" flex flex-col items-center bg-img home-wrapper">
          <div className="container">
            <div className="flex gap-5 flex-col w-[100%] listing-wrap">
              <div className="flex justify-between head-list">
                <div className="flex flex-row gap-3 items-center img-o">
                  <h2>My movies</h2>
                  <img src={add} alt="add" height={"32px"} width={"32px"} className="cursor-pointer" onClick={handleAddMovie} />
                </div>
                <div className="flex flex-row gap-3 items-center log-wrap cursor-pointer" onClick={handleLogOut}>
                  <p className="">Logout</p>
                  <img src={logout} alt="log-out" />
                </div>
              </div>
              <div className="flex flex-wrap listing-wrapper">
                {Movies.map((val) => (
                  <Card key={val._id} movieName={val.name} image={process.env.REACT_APP_API_URL + val.cover_pic} year={val.publishing_year} id={val._id} />
                ))}
              </div>
            </div>
            <Pagination currentPage={currentPage} totalPages={PageDetails.total_pages} onPageChange={onPageChange} />
          </div>
        </main>
      )}
    </>
  );
}

export default Home;
