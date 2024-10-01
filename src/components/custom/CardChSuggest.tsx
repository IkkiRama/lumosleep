import React from "react";

type cardsg = {
  icon: any;
  text: string;
  onHandleClick: () => void;
};

const CardChSuggest = ({ icon, text, onHandleClick }: cardsg) => {
  return (
    <React.Fragment>
      <div
        className="card-suggest w-[9.2rem] lg:w-full text-center h-fit flex justify-center items-center flex-col lg:flex-row gap-2 lg:gap-4 bg-background ring ring-slate-600 border hover:border-mainColor p-3 sm:p-4 rounded-xl transition duration-300 cursor-pointer"
        onClick={onHandleClick}
      >
        {icon}
        <p className="text-[0.92rem] sm:text-base">{text}</p>
      </div>
    </React.Fragment>
  );
};

export default CardChSuggest;
