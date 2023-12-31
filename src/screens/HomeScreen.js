import React from "react";
import "./HomeScreen.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import requests from "../Requests";
import Row from "../components/Row";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />

      <Banner />

      <Row
        title="Trending Movies"
        fetchUrl={requests.fetchTrendingMovie}
        isLargeRow
      />
      <Row
        title="Trending Series"
        fetchUrl={requests.fetchTrendingTv}
        isLargeRow
      />
      <Row
        title="Top Rated Movies"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
      <Row title="Popular Movies" 
      fetchUrl={requests.fetchPopularMovies}
      // isLargeRow 
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Thriller Movies"
        fetchUrl={requests.fetchThrillerMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies "
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;
