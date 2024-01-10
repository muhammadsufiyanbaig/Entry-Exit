import React, { useContext } from "react";
import { GlobalContext } from "../Global"; 

const Income = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="bg-gray-100 h-screen">
      <h1 className="sm:text-3xl text-center font-bold text-2xl title-font mb-4 text-gray-900">
        Income
      </h1>
      <div className="grid grid-cols-4 items-center">
        {transactions.map((item, index) => {
          if (item.category === "Income") {
            return (
              <div
                key={index}
                className="max-w-xs mx-4 my-8 bg-white rounded-md shadow-lg px-6 py-4"
              >
                <h2 className="text-xl font-semibold mb-2">{item.description}</h2>
                <p className="text-gray-700 font-bold mb-4">PKR {item.amount}</p>
                <p className="text-gray-700 mb-4">{item.date}</p>
                <p className="text-green-500 text-2xl font-bold">+</p>
              </div>
            );
          }
        })}
      </div>

    </div>
  );
};

export default Income;
