import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center custom-loader"></div>
    </div>
  );
};

export default Loading;
