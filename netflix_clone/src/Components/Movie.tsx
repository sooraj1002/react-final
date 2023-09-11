import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {
  arrayUnion,
  doc,
  updateDoc,
  DocumentReference,
} from "firebase/firestore";

interface MovieProps {
  id: string;
  backdrop_path: string;
  title: string;
}

const Movie: React.FC<{ movie: MovieProps }> = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);

      const movieID: DocumentReference = doc(db, "users", `${user?.email}`);

      await updateDoc(movieID, {
        savedshows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("please login to save a movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center text-center h-full">
          {movie?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300 " />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300 " />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
