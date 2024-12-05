import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const PopularCard = () => {
    return (
        <>
            <div className="w-full min-h-[300px] bg-[#F5F4F1] rounded-[10px] p-[30px] flex items-center gap-x-[36px]">
                <div className="w-[185px] min-h-[240px] overflow-hidden">
                    <img src="" alt="coffee cup image" className="w-full object-cover" />
                </div>
                <div className="w-[440px] flex items-center justify-between">
                    <div className="w-auto space-y-3">
                        <h1 className="font-raleway text-xl font-medium text-[#1B1A1A]">Name: <span className="text-[#5C5B5B] font-normal">Americano Coffee</span></h1>
                        <h1 className="font-raleway text-xl font-medium text-[#1B1A1A]">Chef: <span className="text-[#5C5B5B] font-normal">Alex Smith</span></h1>
                        <h1 className="font-raleway text-xl font-medium text-[#1B1A1A]">Price: <span className="text-[#5C5B5B] font-normal">800$</span></h1>
                    </div>
                    <div className="w-auto space-y-4">
                        <div className="w-10 h-10 bg-[#D2B48C] rounded-[5px] flex items-center justify-center">
                            <FaEye className="text-lg text-white"></FaEye>
                        </div>
                        <div className="w-10 h-10 bg-[#3C393B] rounded-[5px] flex items-center justify-center">
                            <FaPen className="text-lg text-white"></FaPen>
                        </div>
                        <div className="w-10 h-10 bg-[#EA4744] rounded-[5px] flex items-center justify-center">
                            <MdDelete className="text-lg text-white"></MdDelete>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularCard;