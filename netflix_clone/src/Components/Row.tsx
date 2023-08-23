import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Movie from "./Movie";

interface RowProps {
  title: string;
  requestURL: string;
}

const Row: React.FC<RowProps> = ({ title, requestURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requestURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [requestURL]);

  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
