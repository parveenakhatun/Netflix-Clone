import React from "react";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Row from "./Components/Row";
import requests from "./Services/requests";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        url={requests.fetchNetflixOriginals}
        isRowLarge
      />
      <Row title="Trending" url={requests.fetchTrending} />
      <Row title="Top Rated" url={requests.fetchTopRated} />
      <Row title="Action Movies" url={requests.fetchActionMovies} />
      <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
      <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
      <Row title="Documentries" url={requests.fetchDocumentries} />
      <p
        style={{ textAlign: "center", color: "#cf412e", paddingBottom: "10px" }}
      >
        ~~~ Developed By Parveena Khatun ~~~
      </p>
    </div>
  );
}

export default App;
