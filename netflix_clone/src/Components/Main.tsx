import { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";

interface Movie {
  backdrop_path: string;
  title: string;
  release_date: string;
  overview: string;
}

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }
  }, [movies]);

  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black" />
        {movie && (
          <>
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className="absolute w-full top-[20%] p-4 md:p-8">
              <h1 className="text-3xl md:text-5xl font-bold">{movie.title}</h1>
              <div className="my-6">
                <button className="border bg-gray-300 text-black border-gray-300 px-2 py-5">
                  Play
                </button>
                <button className="border text-white border-gray-300 px-2 py-5 ml-2">
                  Watch Later
                </button>
              </div>
              <p className="text-gray-400 text-sm">
                Released: {movie.release_date}
              </p>
              <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-grey-200">
                {truncateString(movie.overview, 200)}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
