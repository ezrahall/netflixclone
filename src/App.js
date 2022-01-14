import "./App.css";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import requests from "./services/requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Treniding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomcanceMovies} />
    </div>
  );
}

export default App;
