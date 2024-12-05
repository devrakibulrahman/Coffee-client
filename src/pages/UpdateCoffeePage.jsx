import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const UpdateCoffeePage = () => {
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
                    <div className="w-full min-h-[575px] bg-[#F4F3F0] px-[120px] py-[70px]">
                        <div className="w-full flex items-center justify-center flex-col">
                            <h1 className="font-rancho text-[45px] leading-[56px] font-normal text-[#374151]">Add New Coffee</h1>
                            <div className="w-full max-w-[930px] mt-8 text-center">
                                <p className="font-raleway text-lg leading-[30px] font-normal text-[#1B1A1AB3]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                            </div>
                        </div>
                        <div className="w-full mt-8">
                            <form>
                                <div className="w-full flex items-center justify-center gap-x-6">
                                    <div className="w-full space-y-6">
                                        <div className="w-full flex flex-col gap-y-4">
                                            <label className="font-raleway text-xl leading-[30px] font-medium text-[#1B1A1ACC]">Name</label>
                                            <input type="text" name="name" placeholder="Enter coffee Name" autoComplete="off" className="p-[11px] h-[48px] font-raleway text-base leading-[26px] font-normal text-[#1B1A1ACC] placeholder:text-[#1B1A1A99] rounded-[5px] outline-none" />
                                        </div>
                                        <div className="w-full flex flex-col gap-y-4">
                                            <label className="font-raleway text-xl leading-[30px] font-medium text-[#1B1A1ACC]">Supplier</label>
                                            <input type="text" name="supplier" placeholder="Enter coffee supplier" autoComplete="off" className="p-[11px] h-[48px] font-raleway text-base leading-[26px] font-normal text-[#1B1A1ACC] placeholder:text-[#1B1A1A99] rounded-[5px] outline-none" />
                                        </div>
                                        <div className="w-full flex flex-col gap-y-4">
                                            <label className="font-raleway text-xl leading-[30px] font-medium text-[#1B1A1ACC]">Category</label>
                                            <input type="text" name="cate" placeholder="Enter coffee category" autoComplete="off" className="p-[11px] h-[48px] font-raleway text-base leading-[26px] font-normal text-[#1B1A1ACC] placeholder:text-[#1B1A1A99] rounded-[5px] outline-none" />
                                        </div>
                                    </div>
                                    <div className="w-full space-y-6">
                                        <div className="w-full flex flex-col gap-y-4">
                                            <label className="font-raleway text-xl leading-[30px] font-medium text-[#1B1A1ACC]">Chef</label>
                                            <input type="text" name="chef" placeholder="Enter coffee chef" autoComplete="off" className="p-[11px] h-[48px] font-raleway text-base leading-[26px] font-normal text-[#1B1A1ACC] placeholder:text-[#1B1A1A99] rounded-[5px] outline-none" />
                                        </div>
                                        <div className="w-full flex flex-col gap-y-4">
                                            <label className="font-raleway text-xl leading-[30px] font-medium text-[#1B1A1ACC]">Taste</label>
                                            <input type="text" name="supplier" placeholder="Enter coffee taste" autoComplete="off" className="p-[11px] h-[48px] font-raleway text-base leading-[26px] font-normal text-[#1B1A1ACC] placeholder:text-[#1B1A1A99] rounded-[5px] outline-none" />
                                        </div>
                                        <div className="w-full flex flex-col gap-y-4">
                                            <label className="font-raleway text-xl leading-[30px] font-medium text-[#1B1A1ACC]">Details</label>
                                            <input type="text" name="cate" placeholder="Enter coffee details" autoComplete="off" className="p-[11px] h-[48px] font-raleway text-base leading-[26px] font-normal text-[#1B1A1ACC] placeholder:text-[#1B1A1A99] rounded-[5px] outline-none" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full space-y-6 mt-6">
                                    <div className="w-full flex flex-col gap-y-4">
                                        <label className="font-raleway text-xl leading-[30px] font-medium text-[#1B1A1ACC]">Photo</label>
                                        <input type="text" name="url" placeholder="Enter photo url" autoComplete="off" className="p-[11px] h-[48px] font-raleway text-base leading-[26px] font-normal text-[#1B1A1ACC] placeholder:text-[#1B1A1A99] rounded-[5px] outline-none" />
                                    </div>
                                    <div className="w-full">
                                        <button className="w-full h-[50px] bg-[#D2B48C] border-2 border-[#331A15] rounded-[5px] font-rancho text-[24px] leading-[30px] font-normal text-[#331A15]">Add Coffee</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateCoffeePage;