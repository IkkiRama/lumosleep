import React, { useEffect } from "react";
import AOS from "aos";

type moodCard = {
  moodImg: any;
  text: string;
  altImg: string;
  delay: number;
};

const MoodCard = ({
  text,
  moodImg,
  altImg,
  delay,
}: moodCard) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  },);

  return (
    <React.Fragment>
      <div
        data-aos="zoom-in"
        data-aos-delay={`${delay}`}
        className={`w-[6.5rem] h-32 sm:w-[8rem] sm:h-[9rem] lg:w-[10rem] lg:h-[11rem] rounded-lg sm:rounded-xl p-3 flex justify-center border-4 items-center flex-col font-semibold cursor-pointer bg-mainColor hover:bg-mainDark hover:border-secondaryColor`}
      >
        <img src={moodImg} alt={altImg} />
        <p>{text}</p>
      </div>
    </React.Fragment>
  );
};

export default MoodCard;
