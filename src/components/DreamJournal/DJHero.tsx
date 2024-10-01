import { IoRocket } from "react-icons/io5";
import CustomButtonWithIcon from "../custom/CustomButtonWithIcon";
import TextDescription from "../custom/TextDescription";
import TextTitle from "../custom/TextTitle";
import { heroDJ } from "@/utils";
import { useEffect } from "react";
import AOS from "aos";

function DJHero() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <div className="w-full h-fit">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-2 sm:gap-3">
          <div data-aos="fade-right" data-aos-delay="50">
            <TextTitle>
              Tuliskan <span className="text-mainColor">mimpimu</span> dan
              tafsirkan <span className="text-mainColor">artinya</span>
            </TextTitle>
          </div>
          <div data-aos="fade-right" data-aos-delay="150">
            <TextDescription
              value="Rekam mimpi yang kamu alami setiap malam dan biarkan Lumosleep membantumu menafsirkan arti di baliknya, sehingga kamu bisa lebih memahami pesan yang tersembunyi dalam mimpimu."
            />
          </div>
          <div data-aos="fade-right" data-aos-delay="250">
            <CustomButtonWithIcon
              text="Mulai"
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
          data-aos="zoom-in"
          data-aos-delay="200"
          src={heroDJ}
          alt="hero-DJ"
          className="w-auto sm:w-[600px]"
        />
      </div>
    </div>
  );
}

export default DJHero;
