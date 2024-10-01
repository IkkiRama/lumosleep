import React, { useEffect, useState } from "react";
import AOS from "aos";
import DefaultView from "@/components/custom/DefaultView";
import CustomButtonWithIcon from "@/components/custom/CustomButtonWithIcon";
import { BsSoundwave } from "react-icons/bs";
import { HeroSoundscapes } from "@/utils";
import { soundList } from "@/utils/data";
import SoundCard from "@/components/soundscapes/SoundCard";
import {
  FaCirclePause,
  FaCirclePlay,
  FaCircleStop,
  FaForward,
  FaMusic,
} from "react-icons/fa6";
import { LuArrowUpToLine } from "react-icons/lu";
import { RiRobot2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Soundscapes = () => {
  const [titleSound, setTitleSound] = useState<string>("Bird Song");
  const [soundImg, setSoundImg] = useState<any>(
    "/assets/soundscapes/sound-list-img/birdsong.png"
  );
  const [position, setPosition] = useState<number>(0);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [stayPlay, setStayPlay] = useState<boolean>(false);

  const handleActiveSound = (title: string, soundImg: any, pos: number) => {
    setIsPlay(true);
    setStayPlay(true);
    setTitleSound(title);
    setSoundImg(soundImg);
    setPosition(pos);
  };

  const nonaktifSound = () => {
    setIsPlay(false);
  };

  const aktifSound = () => {
    setIsPlay(true);
  };

  const nextSound = () => {
    if (position === 7) {
      const nextSd = soundList[position - 7];
      setTitleSound(nextSd.name);
      setSoundImg(nextSd.img);
      setPosition(position - 7);
    } else {
      const nextSd = soundList[position + 1];
      setTitleSound(nextSd.name);
      setSoundImg(nextSd.img);
      setPosition(position + 1);
    }
  };

  const prevSound = () => {
    if (position === 0) {
      const prevSd = soundList[position + 7];
      setTitleSound(prevSd.name);
      setSoundImg(prevSd.img);
      setPosition(position + 7);
    } else {
      const prevSd = soundList[position - 1];
      setTitleSound(prevSd.name);
      setSoundImg(prevSd.img);
      setPosition(position - 1);
    }
  };

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      {/* Hero Soundscapes */}
      <DefaultView>
        <div className="w-full h-fit">
          <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
            <div className="flex flex-col gap-2 sm:gap-3">
              <h1
                data-aos="fade-left"
                data-aos-delay="50"
                className="font-bold text-2xl sm:text-4xl lg:text-6xl"
              >
                Tingkatkan kualitas tidur Anda dengan{" "}
                <span className="text-mainColor">Lumosleep Soundscapes</span>
              </h1>
              <p
                data-aos="fade-left"
                data-aos-delay="150"
                className="text-sm md:text-base lg:text-[1.25rem]"
              >
                Lumosleep Soundscapes dilengkapi dengan berbagai audio yang menenangkan untuk membantu Anda tertidur dengan cepat dan nyaman. Cobalah menggunakan fitur ini.
              </p>
              <div data-aos="fade-left" data-aos-delay="250">
                <CustomButtonWithIcon
                  text="Coba Sekarang"
                  icon={<BsSoundwave />}
                  bgcolor="bg-mainColor"
                  textcolor="text-white"
                  bordercolor="border-secondaryColor"
                  path="#"
                  customclass="w-fit mt-2"
                  onhandleclick={() =>
                    window.scrollTo({
                      top: 800,
                    })
                  }
                />
              </div>
            </div>
            <img
              src={HeroSoundscapes}
              alt="hero-landing-page"
              className="w-auto sm:w-[600px]"
              data-aos="zoom-in-up"
              data-aos-delay="100"
            />
          </div>
        </div>
      </DefaultView>

      {/* Sounds List */}
      <div className="sound_list containers flex flex-col gap-3 py-4 px-5 sm:px-6 lg:px-8 mb-4 md:mb-10">
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="font-semibold text-center text-xl sm:text-3xl lg:text-5xl mb-2 sm:mb-4 flex justify-center items-center gap-2 sm:gap-5"
        >
          <FaMusic />
          Pilih Audio Pilihan Anda
          <FaMusic />
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 lg:gap-8 place-items-center mt-2 sm:mt-3">
          {soundList.map((data) => (
            <SoundCard
              key={data.id}
              id={data.id}
              activeTitle={titleSound}
              isPlay={isPlay}
              audio={data.audio}
              imgS={data.img}
              title={data.name}
              delay={data.delay}
              handlePlay={handleActiveSound}
              handlePause={nonaktifSound}
            />
          ))}
        </div>
      </div>

      {/* Audio Player */}
      <div
        className={`fixed flex items-center justify-center bottom-5 right-[50%] translate-x-[50%] bg-mainDark border-2 lg:border-4 border-gray-300 w-[80%] sm:w-[70%] lg:w-[50%] p-3 sm:p-4 lg:p-5 px-3 sm:px-4 lg:px-7 rounded-full gap-3 sm:gap-4 lg:gap-7 transition-all duration-300 ${
          stayPlay ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 h-fit px-1">
          <img
            src={soundImg}
            alt="sound-img"
            className="w-14 sm:w-28 lg:w-36 rounded-lg ring ring-secondaryColor"
          />
          <p className="text-[0.7rem] sm:text-xl lg:text-2xl font-normal">
            {titleSound}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 lg:gap-6">
          <h3 className="font-semibold text-base sm:text-3xl lg:text-4xl">
            Lumosleep Soundscapes
          </h3>
          <div className="flex justify-center items-center gap-4 sm:gap-5 lg:gap-6 text-xl sm:text-3xl lg:text-4xl">
            <FaForward
              className="rotate-180 cursor-pointer"
              onClick={() => prevSound()}
            />
            <FaCircleStop
              className="cursor-pointer"
              onClick={() => {
                setStayPlay(false);
                setIsPlay(false);
              }}
            />
            {isPlay ? (
              <FaCirclePause
                className="cursor-pointer"
                onClick={() => nonaktifSound()}
              />
            ) : (
              <FaCirclePlay
                className="cursor-pointer"
                onClick={() => aktifSound()}
              />
            )}
            <FaForward className="cursor-pointer" onClick={() => nextSound()} />
          </div>
        </div>
      </div>

      {/* Button Back To Top */}
      <div
        className={`fixed ${
          isPlay ? "bottom-[6.5rem]" : "bottom-7"
        } transition-all duration-300 sm:bottom-5 right-5 flex flex-row items-center justify-center gap-3 sm:gap-5 z-20`}
      >
        <div
          onClick={() => {
            window?.scrollTo({
              top: 0,
            });
          }}
          className="text-base sm:text-lg lg:text-xl shadow border-2 border-secondaryColor bg-mainDark transition duration-300 rounded-full p-3 cursor-pointer text-white ring-2 ring-mainColor"
        >
          <LuArrowUpToLine />
        </div>
      </div>

      {/* Chatbot Button */}
      <div
        className={`fixed ${
          isPlay ? "bottom-[10rem]" : "bottom-[5.5rem]"
        } transition-all duration-300 sm:bottom-20 right-5 flex flex-row items-center justify-center gap-3 sm:gap-5 z-20`}
      >
        <Link
          to="/chatbot"
          className="text-base sm:text-lg lg:text-xl shadow border-2 border-secondaryColor bg-mainDark transition duration-300 rounded-full p-3 cursor-pointer text-white ring-2 ring-mainColor"
        >
          <RiRobot2Fill />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Soundscapes;
