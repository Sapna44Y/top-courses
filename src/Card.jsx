import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addToCart, openModel } from "./cartSlice";

function Card(props) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);

  let course = props.course;
  let likedcourse = props.likedcourse;
  let setlikedcourse = props.setlikedcourse;

  function addtoCartHelper() {
    dispatch(addToCart(course));
    toast.success("Added to Cart");
  }
  function help() {
    console.log("clicked");
    dispatch(openModel());
  }

  const isIncart = cartItem.some((item) => item.id === course.id);

  function helper() {
    if (likedcourse.includes(course.id)) {
      setlikedcourse((prev) => prev.filter((cid) => cid != course.id));
      toast.warning("Like is Remove");
    } else {
      if (likedcourse.length == 0) {
        setlikedcourse([course.id]);
      } else {
        setlikedcourse((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[320px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden pb-5">
      <div className="relative">
        <img src={course.image.url}></img>
        <div className="w-[40] h-[40] absolute right-2 bottom-[-12px] rounded-full bg-white grid place-items-center">
          <button onClick={helper}>
            {likedcourse.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg">{course.title}</p>
        <p className="text-white mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "....."
            : course.description}
        </p>
      </div>
      <p className="text-white mt-2 mx-3">Price is Rs.{course.price}</p>
      <button
        className="mt-4 mx-2 bg-yellow-500 text-black py-2 px-4 rounded"
        disabled={isIncart}
        onClick={addtoCartHelper}
      >
        {isIncart ? "In Cart" : "Add me to Cart"}
      </button>
      <button
        className="mt-4  bg-blue-500 text-white py-2 px-4 rounded"
        onClick={help}
      >
        See cart Details
      </button>
    </div>
  );
}
export default Card;
