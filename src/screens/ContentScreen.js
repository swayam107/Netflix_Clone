import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { useParams } from "react-router-dom";

function ContentScreen({mid}) {
  const [content, setContent] = useState([]);
  // const { mid } = useParams();
  // const id = mid.replace(/\D/g, '');
  // const id = mid ? mid.replace(/\D/g, '') : null;
  console.log(mid);
  console.log("swayam samal")
  const API_KEY = "a6908dd1493bbe0c1951f2b47555a236";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const fetchDetails = `/movie/${id}?api_key=${API_KEY}&language=en-US`;
  //     const fetchDetails = `/movie/${mid}?api_key=${API_KEY}&language=en-US`;
  //     const request = await axios.get(fetchDetails);
  //     setContent(request.data);
  //   };

  //   fetchData();
  // }, [mid]);

  return (
    <div className="contentScreen">
      <Nav />
      <h1>ContentScreen</h1>
      <div className="contentScreen_body">
        <h2>{content.title}</h2>
        <p>{content.overview}</p>
      </div>
    </div>
  );
}

export default ContentScreen;