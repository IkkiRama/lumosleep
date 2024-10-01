import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TypeDataDream } from "@/utils/types";
import { FaTrashAlt } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";
function Alert({
  setDataDreams,
}: {
  setDataDreams: React.Dispatch<React.SetStateAction<TypeDataDream[]>>;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);
  const handleRemoveData = () => {
    localStorage.removeItem("history");
    setDataDreams([]);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="flex justify-center items-center gap-2 text-[0.85rem] sm:text-base lg:text-[1.1rem] font-semibold rounded-full px-4 sm:px-5 py-2 border-2 mx-auto bg-mainColor text-white border-secondaryColor"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <FaTrashAlt /> Hapus Semua Riwayat
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah Anda benar-benar yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan ini tidak dapat dibatalkan. Ini akan menghapus semua riwayat mimpi Anda secara permanen.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={handleRemoveData}>
            Ya, saya yakin
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Alert;
