import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CoffeeDetailsPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full min-h-[calc(95vh-92px)] bg-addCofBg bg-cover bg-center bg-no-repeat pb-[120px]">
                <div className="container mx-auto px-4">
                    <div className="w-full">
                        <div className="w-full py-10">
                            <button onClick={() => navigate('/')} className="flex items-center justify-center gap-x-3 font-rancho text-[30px] leading-[37px] font-normal text-[#374151]"><IoMdArrowBack ></IoMdArrowBack> Back To Home</button>
                        </div>
                    </div>
                    <div className="w-full min-h-[600px] bg-[#F4F3F0] py-[72px] flex items-center justify-center gap-x-[116px]">
                        <div className="w-[350px] h-[455px] overflow-hidden">
                            <img src="" alt="coffee cup image" className="w-full object-cover" />
                        </div>
                        <div className="w-auto space-y-[33px]">
                            <h1 className="font-rancho text-[36px] leading-[46px] font-normal text-[#331A15]">Niceties</h1>
                            <div className="w-auto space-y-3">
                                <h1 className="font-raleway text-xl font-medium text-[#1B1A1A]">Name: <span className="text-[#5C5B5B] font-normal">Americano Coffee</span></h1>
                                <h1 className="font-raleway text-xl font-medium text-[#1B1A1A]">Chef: <span className="text-[#5C5B5B] font-normal">Alex Smith</span></h1>
                                <h1 className="font-raleway text-xl font-medium text-[#1B1A1A]">Suppler: <span className="text-[#5C5B5B] font-normal">Alex Smith</span></h1>
                                <h1 className="font-raleway text-xl font-medium text-[#1B1A1A]">Taste: <span className="text-[#5C5B5B] font-normal">Alex Smith</span></h1>
                                <h1 className="font-raleway text-xl font-medium text-[#1B1A1A]">Category: <span className="text-[#5C5B5B] font-normal">Alex Smith</span></h1>
                                <h1 className="font-raleway text-xl font-medium text-[#1B1A1A]">Details: <span className="text-[#5C5B5B] font-normal">Alex Smith</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoffeeDetailsPage;