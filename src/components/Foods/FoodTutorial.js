import "../../App.css"

export const FoodTutorial = () => {






  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {/* Left Element */}
        <div className="py-20 my-9 mx-auto">
          <h1 className="text-4xl">Bacon and Egg Combo</h1>
          <p className="pb-10">May 31, 2023</p>
          <p>Ratings: 5 Stars</p>
        </div>
        {/* Right Element */}
        <div>
          <img className="tutorial-image" src="https://i.ibb.co/ccZyWng/breakfast1.png" alt="breakfast1" />
        </div>
      </div>
    </>
  );
};
