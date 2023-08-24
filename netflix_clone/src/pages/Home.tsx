import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Requests";

export const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="Upcoming" requestURL={requests.requestUpcoming} />
      <Row rowId="2" title="Popular" requestURL={requests.requestPopular} />
      <Row rowId="3" title="Trending" requestURL={requests.requestTrending} />
      <Row rowId="4" title="Top Rated" requestURL={requests.requestTopRated} />
      <Row rowId="5" title="Horror" requestURL={requests.requestHorror} />
    </>
  );
};
