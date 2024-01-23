import React from "react";
import { useSelector } from "react-redux";
// import { Link, Navigate } from "react-router-dom";
import { selectLoggedInUser } from "./app/features/user/UserSlice";

const Detail = () => {
  const loggedInUser = useSelector(selectLoggedInUser);

  return (
    <div>
      {loggedInUser && (
        <div className="bg-white flex flex-col items-center justify-center h-screen">
          <div className="p-10 bg-gray-100 shadow-lg">
            <h1 className="font-bold text-4xl text-gray-900 mb-4">Welcome!</h1>
            <div>
              <p className="font-bold text-lg text-blue-500 mt-4">Your Name:</p>
              <div className="p-2 bg-gray-200">
                <p className="text-md text-gray-900">
                  {loggedInUser.details.name || ""}
                </p>
              </div>
            </div>
            <div>
              <p className="font-bold text-lg text-blue-500 mt-4">
                Your Email:
              </p>
              <div className="p-2 bg-gray-200">
                <p className="text-md text-gray-900">
                  {loggedInUser.details.email || ""}
                </p>
              </div>
            </div>
            <div>
              {/* <Navigate to={'/login'}>
              <p>LogOut</p>
              </Navigate> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
