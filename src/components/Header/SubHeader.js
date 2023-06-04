import { useState } from "react";
import "../Header/Header.css"

export const SubHeader = () => {
  const [inputValue, setInputValue] = useState("");

  return (

    <section className="subheader-banner h-96 w-full bg-yellow-50">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">
          Craving for something to eat?
        </h1>
      </div>
    </section>
    
  )
}
