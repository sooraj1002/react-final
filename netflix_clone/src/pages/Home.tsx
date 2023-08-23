import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Requests";

export const Home = () => {
  return (
    <>
      <Main />
      <Row title="Upcoming" requestURL={requests.requestUpcoming} />
      <Row title="Popular" requestURL={requests.requestPopular} />
      <Row title="Trending" requestURL={requests.requestTrending} />
      <Row title="Top Rated" requestURL={requests.requestTopRated} />
      <Row title="Horror" requestURL={requests.requestHorror} />
    </>
  );
};
