// src/components/Loading.js

import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-t-4 border-primary-purple border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
