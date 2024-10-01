import CustomButtonWithIcon from "@/components/custom/CustomButtonWithIcon";
import React, { useEffect, useState } from "react";
import {
  ChatbotHero,
  heroHomepage1,
  heroHomepage2,
  heroHomepage3,
  heroHomepage4,
  WaveBlack,
  WavePurple,
} from "@/utils";
import DefaultView from "@/components/custom/DefaultView";
import { IoRocket } from "react-icons/io5";
import { SiOpentelemetry } from "react-icons/si";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { TbLungsFilled } from "react-icons/tb";
import { AiFillRobot } from "react-icons/ai";
import { Link } from "react-router-dom";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      {/* Section Landing Page */}
      <DefaultView>
        <div className="w-full h-fit">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="flex flex-col gap-2 sm:gap-3">
              <h1
                data-aos="fade-right"
                data-aos-delay="50"
                className="font-bold text-2xl sm:text-4xl lg:text-6xl"
              >
                Tingkatkan Kualitas Tidur Anda dengan{" "}
                <span className="text-mainColor">Lumosleep</span>
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="150"
                className="text-sm md:text-base lg:text-[1.25rem]"
              >
                Lumosleep adalah aplikasi Web yang dirancang untuk membantu Anda meningkatkan kualitas tidur Anda. Dengan berbagai fitur inovatif, Lumosleep menjadi teman setia dalam perjalanan Anda menuju tidur yang lebih nyenyak dan menyegarkan.
              </p>
              <div data-aos="fade-right" data-aos-delay="250">
                <CustomButtonWithIcon
                  text="Jelajahi"
                  icon={<IoRocket />}
                  bgcolor="bg-mainColor"
                  textcolor="text-white"
                  bordercolor="border-secondaryColor"
                  path="#trydj"
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
              src={heroHomepage1}
              alt="hero-landing-page"
              className="w-auto sm:w-[600px]"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
        </div>
      </DefaultView>

      {/* Try Dream Journal Section */}
      <section
        id="trydj"
        className="w-full h-fit bg-mainDark flex items-start justify-start flex-col"
      >
        <img src={WaveBlack} alt="wave-black" className="w-full" />
        <div className="py-4 px-5 sm:px-6 lg:px-8 w-full">
          <div className="w-full h-fit containers">
            <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
              <div className="flex flex-col gap-2 sm:gap-3">
                <h1
                  data-aos="fade-left"
                  data-aos-delay="50"
                  className="font-bold text-2xl sm:text-4xl lg:text-6xl"
                >
                  Mari kita tafsirkan mimpi yang Anda alami tadi malam
                </h1>
                <p
                  data-aos="fade-left"
                  data-aos-delay="150"
                  className="text-sm md:text-base lg:text-[1.25rem]"
                >
                  Lumosleep ada di sini untuk membantu! Rekam mimpi Anda, jelajahi detailnya, dan temukan maknanya dengan fitur Journey Dream.
                </p>
                <div data-aos="fade-left" data-aos-delay="250">
                  <CustomButtonWithIcon
                    text="Coba Dream Journal"
                    icon={<SiOpentelemetry />}
                    bgcolor="bg-mainColor"
                    textcolor="text-white"
                    bordercolor="border-secondaryColor"
                    path="/dream-journal"
                    customclass="w-fit mt-2"
                  />
                </div>
              </div>
              <img
                src={heroHomepage2}
                alt="hero-landing-page"
                className="w-auto sm:w-[600px]"
                data-aos="fade-up"
                data-aos-delay="200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Try Soundscapes Section */}
      <section
        id="trysoundscapes"
        className="w-full h-fit flex items-start justify-start flex-col"
      >
        <img src={WavePurple} alt="wave-black" className="w-full" />
        <div className="py-4 px-5 sm:px-6 lg:px-8 w-full">
          <div className="w-full h-fit containers">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
              <div className="flex flex-col gap-2 sm:gap-3">
                <h1
                  data-aos="fade-right"
                  data-aos-delay="50"
                  className="font-bold text-2xl sm:text-4xl lg:text-6xl"
                >
                  Mengalami kesulitan tidur?{" "}
                  <span className="text-mainColor">Soundscapes Lumosleep</span> adalah solusinya!
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="150"
                  className="text-sm md:text-base lg:text-[1.25rem]"
                >
                  Soundscapes Lumosleep hadir dengan berbagai audio yang menenangkan untuk membantu Anda tertidur dengan cepat. Pilih audio yang sesuai dengan suasana hati Anda, rasakan tubuh dan pikiran Anda rileks, dan nikmati tidur nyenyak dan berkualitas.
                </p>
                <div data-aos="fade-right" data-aos-delay="250">
                  <CustomButtonWithIcon
                    text="Coba Soundscapes"
                    icon={<PiSoundcloudLogoFill />}
                    bgcolor="bg-mainColor"
                    textcolor="text-white"
                    bordercolor="border-secondaryColor"
                    path="/soundscapes"
                    customclass="w-fit mt-2"
                  />
                </div>
              </div>
              <img
                src={heroHomepage3}
                alt="hero-landing-page"
                className="w-auto sm:w-[600px]"
                data-aos="zoom-in-up"
                data-aos-delay="200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Try Breathing */}
      <section id="trybreathing" className="w-full h-fit mb-8">
        <DefaultView>
          <div className="bg-mainDark rounded-2xl p-6 lg:p-8 shadow-mainColor shadow-lg">
            <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
              <div className="flex flex-col gap-2 sm:gap-3">
                <h1
                  data-aos="fade-left"
                  data-aos-delay="50"
                  className="font-bold text-2xl sm:text-4xl lg:text-6xl"
                >
                  Breathing Lumosleep mengatasi stres Anda
                </h1>
                <p
                  data-aos="fade-left"
                  data-aos-delay="150"
                  className="text-sm md:text-base lg:text-[1.25rem]"
                >
                  Breathing Lumosleep adalah solusinya! Latihan pernapasan yang mudah dan efektif ini membantu merilekskan pikiran dan tubuh Anda, sehingga Anda dapat tidur lebih nyenyak dan bangun dengan segar.
                </p>
                <div data-aos="fade-left" data-aos-delay="250">
                  <CustomButtonWithIcon
                    text="Coba Breathing"
                    icon={<TbLungsFilled />}
                    bgcolor="bg-mainColor"
                    textcolor="text-white"
                    bordercolor="border-secondaryColor"
                    path="/breathing"
                    customclass="w-fit mt-2"
                  />
                </div>
              </div>
              <img
                src={heroHomepage4}
                alt="hero-landing-page"
                className="w-auto sm:w-[600px]"
                data-aos="zoom-in-right"
                data-aos-delay="200"
              />
            </div>
          </div>
        </DefaultView>
      </section>

      {/* Try Chatbot */}
      <section
        id="trychatbot"
        className="w-full h-fit flex items-start justify-start flex-col"
      >
        <div className="py-4 px-5 sm:px-6 lg:px-8 w-full">
          <div className="w-full h-fit containers">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
              <div className="flex flex-col gap-2 sm:gap-3">
                <h1
                  data-aos="fade-right"
                  data-aos-delay="50"
                  className="font-bold text-2xl sm:text-4xl lg:text-6xl"
                >
                  <span className="text-mainColor">Lumosleep Chatbot AI</span>{" "}
                  membantu menjawab pertanyaan Anda
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="150"
                  className="text-sm md:text-base lg:text-[1.25rem]"
                >
                  Ada banyak pertanyaan yang bisa Anda ajukan kepada chatbot dari Lumosleep, termasuk pertanyaan tentang gangguan tidur Anda dan pertanyaan lain yang berkaitan dengan masalah tidur dan tidur.
                </p>
                <div data-aos="fade-right" data-aos-delay="250">
                  <CustomButtonWithIcon
                    text="Coba Chatbot"
                    icon={<AiFillRobot />}
                    bgcolor="bg-mainColor"
                    textcolor="text-white"
                    bordercolor="border-secondaryColor"
                    path="/chatbot"
                    customclass="w-fit mt-2"
                  />
                </div>
              </div>
              <img
                src={ChatbotHero}
                alt="hero-landing-page"
                className="w-auto sm:w-[600px]"
                data-aos="zoom-in-up"
                data-aos-delay="200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-20 overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                data-aos="zoom-in"
                data-aos-delay="150"
                className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20"
              >
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-[40px]/[48px]">
                  Ada pertanyaan? Lihatlah.{" "}
                  <span className="text-mainColor">Di sini</span>
                </h2>
                <p className="text-base text-dark-6">
                  Ada banyak informasi yang terkait dengan situs web Lumosleep, Anda dapat melihat daftar pertanyaan di bawah ini.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div data-aos="zoom-in-down" data-aos-delay="50">
                <AccordionItem
                  header="Apa yang itu Lumosleep?"
                  text="Lumosleep adalah situs web yang berguna bagi mereka yang kurang tidur atau memiliki kesehatan tidur yang buruk."
                />
              </div>
              <div data-aos="zoom-in-down" data-aos-delay="200">
                <AccordionItem
                  header="Apakah semua orang dapat menggunakan situs web ini?"
                  text="Tentu saja semua pengguna dari anak-anak hingga orang tua."
                />
              </div>
              <div data-aos="zoom-in-down" data-aos-delay="350">
                <AccordionItem
                  header="Bagaimana situs web ini membantu Anda tidur?"
                  text="Situs web ini menampilkan suara musik yang menenangkan dan membuat Anda rileks sehingga Anda dapat tertidur dengan nyaman."
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div data-aos="zoom-in-down" data-aos-delay="500">
                <AccordionItem
                  header="Bagaimana cara kerja fitur soundscapes?"
                  text="Fitur soundscapes bekerja dengan menampilkan daftar musik yang menenangkan, yang dapat Anda dengarkan hingga Anda tertidur."
                />
              </div>
              <div data-aos="zoom-in-down" data-aos-delay="650">
                <AccordionItem
                  header="Apa saja fitur-fitur dari situs web ini?"
                  text="Situs web ini memiliki 3 fitur utama: merekam mimpi Anda dan menafsirkannya, mendengarkan musik yang menenangkan, dan teknik pernapasan untuk bersantai."
                />
              </div>
              <div data-aos="zoom-in-down" data-aos-delay="800">
                <AccordionItem
                  header="Apakah hasil mimpi dapat ditafsirkan?"
                  text="Tentu saja, mimpi Anda dapat ditafsirkan di halaman atau fitur “Jurnal Mimpi”."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div data-aos="fade-up" data-aos-delay="150">
            <p className="font-medium text-main dark:text-main/90">
              Hubungi kami
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Berbincang dengan tim kami yang ramah
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Kami ingin mendengar pendapat Anda. Silakan isi formulir ini atau kirimkan email kepada kami.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div data-aos="fade-up" data-aos-delay="200">
                <span className="inline-block p-3 text-mainColor rounded-full bg-mainColor/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Tim kami yang ramah siap membantu Anda.
                </p>
                <p className="mt-2 text-sm text-mainColor dark:text-mainColor/90">
                  lumosleep@lumosleep.com
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="250">
                <span className="inline-block p-3 text-mainColor rounded-full bg-mainColor/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Live chat
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Tim kami yang ramah siap membantu Anda.
                </p>
                <p className="mt-2 text-sm text-mainColor dark:text-mainColor/90">
                  <Link to="wa.me/+6282133320489">Mulai obrolan baru</Link>
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="250">
                <span className="inline-block p-3 text-mainColor rounded-full bg-mainColor/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Kantor
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Datanglah menyapa di kantor pusat kami.
                </p>
                <p className="mt-2 text-sm text-mainColor dark:text-mainColor/90">
                  Jln Raya Dagan RT 03 RW 09, Purbalingga, Indonesia
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <span className="inline-block p-3 text-mainColor rounded-full bg-mainColor/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Telepon
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Senin-Jumat dari pukul 08.00-17.00 WIB.
                </p>
                <p className="mt-2 text-sm text-mainColor dark:text-mainColor/90">
                  +62 821 3332 0489
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-out"
              data-aos-delay="350"
              className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8"
            >
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      placeholder="John "
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-mainColor dark:focus:border-mainColor focus:ring-mainborder-mainColor focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-mainColor dark:focus:border-mainColor focus:ring-mainborder-mainColor focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-mainColor dark:focus:border-mainColor focus:ring-mainborder-mainColor focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Pesan
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-mainColor dark:focus:border-mainColor focus:ring-mainColor focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Pesan"
                  ></textarea>
                </div>

                <Link
                  to={"mailto:lumosleep@lumosleep.id"}
                  className="inline-block text-center w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-mainColor rounded-lg hover:bg-mainDark focus:outline-none focus:ring focus:ring-mainColor focus:ring-opacity-50"
                >
                  Kirim Pesan
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;

const AccordionItem = ({ header, text }: { header: string; text: string }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg p-4 bg-dark-2 shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg text-primary bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-white">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-dark-6">{text}</p>
      </div>
    </div>
  );
};
