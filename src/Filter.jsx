function Filter(props) {
  let filterData = props.filterData;
  let category = props.category;
  let setcategory = props.setcategory;

  function helper(title) {
    setcategory(title);
  }

  return (
    <div className=" w-11/12 flex flex-wrap space-x-4 max-w-max gap-y-4 mx-auto py-4  justify-center">
      {filterData.map((data) => (
        <button
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-60 border-3 transition-all duration-500  ${
            category === data.title
              ? "bg-opacity-80 border-white"
              : "bg-opacity-40 border-transparent"
          }`}
          key={data.id}
          onClick={() => helper(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}
export default Filter;
