import { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  let category = props.category;

  const [likedcourse, setlikedcourse] = useState([]);

  function helper() {
    if (category === "All") {
      let newarray = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          newarray.push(courseData);
        });
      });
      return newarray;
    } else if (category == "Liked") {
      let likedCourseArray = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          if (likedcourse.includes(courseData.id)) {
            likedCourseArray.push(courseData);
          }
        });
      });
      return likedCourseArray;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {helper().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedcourse={likedcourse}
          setlikedcourse={setlikedcourse}
        ></Card>
      ))}
    </div>
  );
}

export default Cards;
