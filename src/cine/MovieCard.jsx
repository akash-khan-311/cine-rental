/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getImgUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import {MovieContext} from '../context/index'
import Swal from "sweetalert2";


const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  
  const { cartData, setCartData } = useContext(MovieContext);
  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    const found = cartData.find((item) => item.id === movie.id);

    if(!found){
      setCartData([...cartData, movie])
    }else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Already Added",
        text: 'This Movie Already Has Been Added',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    
    
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <button onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              onClick={(event) => handleAddToCart(event, movie)}
              className="bg-primary w-full rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            >
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </button>
      </figure>
    </>
  );
};
export default MovieCard;
