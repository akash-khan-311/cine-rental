import { useContext } from "react";
import { MovieContext } from "../context";
import DeleteIcon from '../assets/delete.svg'
import CheckoutIcon from '../assets/icons/checkout.svg'
import { getImgUrl } from "../utils/cine-utility";

/* eslint-disable react/prop-types */
const CartDetails = ({ onClose }) => {
  const {state,dispatch} = useContext(MovieContext)
  const handleRemoveFromCart = (id) => {
    
    dispatch({type:'REMOVE_FROM_CART',payload:{id}})
  }
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
          <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
            <h2 className="text-2xl dark:text-white lg:text-[30px] mb-10 font-bold">
              Your Carts
            </h2>
            <div className="space-y-4 max-h-[450px] overflow-auto mb-10 lg:mb-14">
              {state.cartData.length ? (
                state.cartData.map((movie) => (
                  <div key={movie.id} className="grid grid-cols-[1fr_auto] gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        className="rounded overflow-hidden"
                        src={getImgUrl(`${movie.cover}`)}
                        alt="image"
                        width={50}
                        height={50}
                      />
                      <div>
                        <h3 className="text-base dark:text-white md:text-xl font-bold">
                          {movie.title}
                        </h3>
                        <p className="max-md:text-xs text-[#575A6E]">
                          {movie.genre}
                        </p>
                        <span className="max-md:text-xs dark:text-white">${movie.price}</span>
                      </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <button onClick={()=>handleRemoveFromCart(movie.id)} className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white">
                        <img
                          className="w-5 h-5"
                          src={DeleteIcon}
                          alt="image"
                        />
                        <span className="max-md:hidden">Remove</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <h2 className="text-white text-2xl">No Movie Added Yet!</h2>
                </div>
              )}
            </div>
            <div className="flex items-center justify-end gap-2">
              {state.cartData.length ? (
                <button className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm">
                  <img
                    src={CheckoutIcon}
                    width={24}
                    height={24}
                    alt="image"
                  />
                  <span>Checkout</span>
                </button>
              ) : (
                <button className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm">
                  <img
                    src={CheckoutIcon}
                    width={24}
                    height={24}
                    alt="image"
                  />
                  <span>Continue Shopping</span>
                </button>
              )}

              <button
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartDetails;
