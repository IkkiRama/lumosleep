import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoRocket } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { id } from "date-fns/locale/id";
import AOS from "aos";

import CustomButtonWithIcon from "@/components/custom/CustomButtonWithIcon";
import DefaultView from "@/components/custom/DefaultView";
import TextTitle from "@/components/custom/TextTitle";
import ModalResultDream from "@/components/custom/ModalResultDream";
import DJTutorial from "@/components/DreamJournal/DJTutorial";
import DJHero from "@/components/DreamJournal/DJHero";
import DJHistory from "@/components/DreamJournal/DJHistory";
import convertDate from "@/utils/convertDate";
import { TypeDataDream } from "@/utils/types";

const DreamJournal: React.FC = () => {
  const [dreamDate, setDreamDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataDreams, setDataDreams] = useState<TypeDataDream[]>([]);
  const [selectedDream, setSelectedDream] = useState<TypeDataDream | null>(
    null
  );
  const [valeuInput, setValeuInput] = useState<string>("");

  // Options for API request
  let options = {
    method: "POST",
    url: import.meta.env.VITE_API_URL,
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
      "Content-Type": "application/json",
    },
    data: {
      messages: [
        {
          role: "user",
          content:
            "Bertindak sebagai ahli sains yang dapat menafsirkan mimpi, saya akan menceritakan detail mimpi saya dan kemudian Anda menafsirkannya berdasarkan sains, berikan tafsirnya sebanyak satu paragraf. Berikut adalah mimpi saya: " +
            valeuInput,
        },
      ],
      system_prompt: "",
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      max_tokens: 256,
      web_access: false,
    },
  };

  const handleInterpretation = async () => {
    if (valeuInput.length < 10) {
      toast.warning(
        "Silakan tuliskan impian Anda sebelum mengklik tombol!",
        {
          position: "top-right",
          theme: "colored",
          className: "font-semibold",
        }
      );
      return;
    }

    try {
      setLoading(true);
      const res = await axios.request(options);
      console.log(res.data);

      const newDreamData: TypeDataDream = {
        id: Date.now(),
        date: convertDate(dreamDate),
        dream: valeuInput,
        interpret: res.data.result,
      };

      // Update dataDreams state and localStorage
      const updatedDataDreams = [newDreamData, ...dataDreams];
      setDataDreams(updatedDataDreams);
      localStorage.setItem("history", JSON.stringify(updatedDataDreams));

      // Set the new dream as selected dream
      setSelectedDream(newDreamData);

      // Reset input and show modal
      setValeuInput("");
      setShowModal(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Load data history from localStorage on initial load
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });

    const storedDreams = localStorage.getItem("history");
    if (storedDreams) {
      setDataDreams(JSON.parse(storedDreams));
    }
  }, []);

  return (
    <div className="w-full relative">
      <DefaultView>
        {/* Section Hero */}
        <DJHero />

        {/* Section Tutorial */}
        <DJTutorial />

        {/* Section Input Dreams */}
        <div
          className="w-full max-w-7xl m-auto p-5 lg:p-10 rounded-3xl bg-mainDark shadow-lg mb-5 lg:my-28 shadow-secondaryColor/75"
          id="trydj"
        >
          <div
            data-aos="zoom-in-up"
            data-aos-delay="150"
            className="text-center pb-5 lg:pb-10 mb-5 border-b-2 border-white/50"
          >
            <TextTitle>
             Tuliskan <span className="text-mainColor">Mimpimu</span>
            </TextTitle>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="250">
            <textarea
              id="message"
              rows={4}
              value={valeuInput}
              onChange={(e) => setValeuInput(e.target.value)}
              className="rounded-xl bg-slate-200 block p-2.5 w-full text-sm text-gray-900 border border-purple-300 focus:ring-purple-500 focus:border-purple-500 lg:text-xl"
              placeholder="Tuliskan rincian mimpi Anda di sini..."
            ></textarea>
            <div className="flex flex-col lg:flex-row lg:mt-3 lg:gap-10">
              <DatePicker
                selected={dreamDate}
                locale={id}
                dateFormat={"dd/MM/yyyy"}
                className="px-5 py-3 text-black mt-5 w-full lg:w-fit rounded-xl bg-slate-200"
                onChange={(date: Date | null) =>
                  setDreamDate(date || new Date())
                }
              />
              <CustomButtonWithIcon
                text={loading ? "Loading..." : "Dapatkan Interpretasi"}
                icon={<IoRocket />}
                bgcolor="bg-mainColor"
                textcolor="text-white"
                bordercolor="border-secondaryColor"
                path="#"
                onhandleclick={handleInterpretation}
                customclass="w-fit mt-5"
              />
            </div>
          </div>
        </div>

        {/* Section History */}
        <DJHistory
          dataDreams={dataDreams}
          setShowModal={setShowModal}
          setSelectedDream={setSelectedDream}
          setDataDreams={setDataDreams}
        />
      </DefaultView>

      {showModal && selectedDream && (
        <ModalResultDream
          interpret={selectedDream}
          handleClick={() => setShowModal(false)}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default DreamJournal;
