import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import Filter from "./Filter";
import { apiurl } from "./data";
import { filterData } from "./data";
import Spinner from "./Spinner";
import { Provider } from "react-redux";
import { store } from "./store";
import CartModel from "./CartModal";

function App() {
  const [courses, setcourse] = useState({});

  const [category, setcategory] = useState(filterData[0].title);

  const [showspinner, setspinner] = useState(false);

  const o = {
    data: {
      Development: [
        {
          id: "WD101",
          title: "Web Development Fundamentals",
          description:
            "This course covers the basic concepts and tools for building static and dynamic websites. Students will learn HTML, CSS, JavaScript, and jQuery to create engaging and interactive web pages.",

          price: 100,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Development/Web%20Development%20Fundamentals.png",
            alt: "Web Development Fundamentals",
          },
        },
        {
          id: "DS201",
          title: "Data Science Essentials",
          description:
            "This course provides an introduction to the fundamental concepts and techniques used in data science. Students will learn how to collect, clean, analyze, and visualize data using popular tools and programming languages like Python and R.",
          price: 190,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Development/Data%20Science%20Essentials.png",
            alt: "Data Science Essentials",
          },
        },
        {
          id: "ST301",
          title: "Software Testing Fundamentals",
          description:
            "This course covers the basics of software testing, including test planning, test case design, test execution, and defect management. Students will learn how to use popular testing frameworks and tools to ensure the quality and reliability of software applications.",
          price: 270,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Development/Software%20Testing%20Fundamentals.png",
            alt: "Software Testing Fundamentals",
          },
        },
        {
          id: "MD401",
          title: "Mobile App Development with React Native",
          description:
            "This course teaches students how to build native mobile apps using the React Native framework. Students will learn how to create cross-platform apps that work on both iOS and Android devices, using a single codebase.",
          price: 100,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Development/Mobile%20App%20Development%20With%20React%20Native.png",
            alt: "Mobile App Development with React Native",
          },
        },
        {
          id: "DO501",
          title: "DevOps for Agile Teams",
          description:
            "This course provides an overview of DevOps principles and practices, with a focus on how they can be applied in agile software development teams. Students will learn how to use popular tools and techniques for continuous integration, continuous delivery, and automated testing.",
          price: 400,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Development/Devops%20for%20Agile%20Teams.png",
            alt: "DevOps for Agile Teams",
          },
        },
      ],
      Business: [
        {
          id: "MK101",
          title: "Introduction to Marketing",
          description:
            "This course provides an overview of marketing principles and practices, including market research, segmentation, targeting, and positioning. Students will learn how to create effective marketing plans and campaigns, using both traditional and digital marketing techniques.",
          price: 350,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Business/Introduction%20To%20Marketing.png",
            alt: "Introduction to Marketing",
          },
        },
        {
          id: "LD201",
          title: "Leadership Development",
          description:
            "This course covers the fundamental concepts and skills required for effective leadership, including communication, motivation, delegation, and team building. Students will learn how to lead teams and organizations, and how to handle common leadership challenges.",
          price: 150,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Business/Leadership%20Development.png",
            alt: "Leadership Development",
          },
        },
        {
          id: "FN301",
          title: "Finance for Non-Financial Managers",
          description:
            "This course provides an introduction to finance concepts and tools for non-financial managers. Students will learn how to read and interpret financial statements, analyze financial data, and make informed financial decisions.",
          price: 100,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Business/Finance%20for%20Non-Financial%20Managers.png",
            alt: "Finance for Non-Financial Managers",
          },
        },
        {
          id: "OM401",
          title: "Operations Management Fundamentals",
          description:
            "This course covers the basics of operations management, including process design, capacity planning, inventory management, and quality control. Students will learn how to optimize operations to improve efficiency, productivity, and customer satisfaction.",
          price: 250,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Business/Operations%20Management%20Fundamentals.png",
            alt: "Operations Management Fundamentals",
          },
        },
        {
          id: "PM501",
          title: "Project Management Essentials",
          description:
            "This course provides an overview of project management principles and techniques, including project planning, scheduling, budgeting, risk management, and stakeholder communication. Students will learn how to manage projects effectively, using both traditional and agile project management approaches.",
          price: 300,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Business/Project%20Management%20Essentials.png",
            alt: "Project Management Essentials",
          },
        },
      ],
      Design: [
        {
          id: "GD101",
          title: "Graphic Design Fundamentals",
          description:
            "This course covers the basic principles of graphic design, including typography, color theory, layout design, and image manipulation. Students will learn how to use industry-standard design software to create effective visual designs for print and digital media.",
          price: 400,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Design/Graphic%20Design%20Fundamentals.png",
            alt: "Graphic Design Fundamentals",
          },
        },
        {
          id: "UX201",
          title: "User Experience Design",
          description:
            "This course covers the fundamentals of user experience (UX) design, including user research, interaction design, information architecture, and usability testing. Students will learn how to design digital products and services that meet user needs and business goals.",
          price: 400,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Design/User%20Experience%20Design.png",
            alt: "User Experience Design",
          },
        },
        {
          id: "ID301",
          title: "Industrial Design Essentials",
          description:
            "This course covers the fundamental concepts and techniques used in industrial design, including sketching, prototyping, modeling, and design for manufacturing. Students will learn how to create innovative and functional products that meet user needs and market demands.",
          price: 200,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Design/Industrial%20Design%20Essentials.png",
            alt: "Industrial Design Essentials",
          },
        },
        {
          id: "FD401",
          title: "Fashion Design Principles",
          description:
            "This course covers the principles and practices of fashion design, including fashion illustration, textile design, pattern making, and garment construction. Students will learn how to design and produce original and stylish clothing for different markets and occasions.",
          price: 300,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Design/Fashion%20Design%20Principles.png",
            alt: "Fashion Design Principles",
          },
        },
      ],
      Lifestyle: [
        {
          id: "LC101",
          title: "Cooking Basics",
          description:
            "This course provides an introduction to cooking techniques, ingredients, and flavors. Students will learn how to plan and prepare meals, using simple recipes and kitchen tools. The course covers a range of cuisines and dietary preferences.",
          price: 100,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Lifestyle/Cooking%20Basics.png",
            alt: "Cooking Basics",
          },
        },
        {
          id: "LF201",
          title: "Fitness for Life",
          description:
            "This course covers the fundamentals of fitness, including exercise principles, workout planning, and nutrition. Students will learn how to build strength, endurance, and flexibility, and how to create a healthy and sustainable lifestyle.",
          price: 150,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Lifestyle/Fitness%20For%20Life.png",
            alt: "Fitness for Life",
          },
        },
        {
          id: "LT301",
          title: "Travel Photography",
          description:
            "This course covers the fundamentals of travel photography, including composition, lighting, and storytelling. Students will learn how to use a range of camera equipment and editing software to capture and share their travel experiences.",
          price: 400,

          image: {
            url: "https://codehelp-apis.vercel.app/get-top-courses/Lifestyle/Travel%20Photography.png",
            alt: "Travel Photography",
          },
        },
      ],
    },
  };

  // let url = apiurl;

  async function getdata() {
    setspinner(true); // Show spinner while fetching

    try {
      let response = await fetch(apiurl);
      let output = o;
      setcourse(output.data); // Set the fetched data to courses
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setspinner(false); // Hide spinner after fetching data
    }
  }
  useEffect(() => {
    getdata();
  }, []);
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col bg-bgDark2">
        <div>
          <NavBar></NavBar>
        </div>

        <div className="bg-bgDark2">
          <div>
            <Filter
              filterData={filterData}
              category={category}
              setcategory={setcategory}
            ></Filter>
          </div>

          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {showspinner ? (
              <Spinner />
            ) : (
              <Cards courses={courses} category={category}></Cards>
            )}
          </div>
        </div>
      </div>
      <CartModel />
    </Provider>
  );
}
export default App;
