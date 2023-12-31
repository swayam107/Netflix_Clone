import React, { useEffect, useState } from "react";
import "../Row.css";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import ContentScreen from "../screens/ContentScreen";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isTrue, setisTrue] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original/";
  const history = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      // setId(
      //   request.data.results.length > 0 ? request.data.results[0].id : null
      // );
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const handleMovieClick = (movie) => {
    setId(movie.id);
    console.log(`"Id is ${id}"`)
    // Navigate to the route using the updated id
    history(`/content?mid=${movie.id}`);
  };

  // const handleMovieClick = (movie) => {
  //   setSelectedMovie(movie.id);
  // };

  return (
    
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <div
            className="movie__posters_div"
            key={movie.id}
            // onClick={() => {
            //   // <ContentScreen mid={movie.id} />
            //   console.log(movie.id)
            //   history(`/content?mid=${movie.id}`);
            // }}
            // onClick={() => handleMovieClick(movie)}
          >
            <img
              className={`row__poster ${isLargeRow} && "row__posterLarge"`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleMovieClick(movie)}
              
              // onClick={() => {
              //   // console.log(movies)
                
              //   // let cid=`${movies.id}`;
              //   // <ContentScreen mid={cid}/>
              //   // setId(movie.id);
              //   // console.log(`"id value is ${id}"`)
              //   console.log(`this is the movie id ${movie.id}`);
              //   console.log(`"This is id1 ${id1}`);
              //   // console.log({movie});
              //   // setisTrue(true);
              //   // history(`${movie.original_title}`);
              //   // console.log(key);
              //   history(`/content?mid=${movie.id}`);
              //   <ContentScreen mid={movie.id} />;
              //   console.log(movie.id);
              //   // e.preventDefault();
              // }}
            />
            <h4>
              {movie.title}
              {movie.name}
            </h4>
            {/* {isTrue ? <ContentScreen mid={id} /> : null} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
// export {id}
