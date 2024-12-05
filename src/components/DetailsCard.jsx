

const DetailsCard = ({icon, title, para}) => {
    return (
        <>
            <div className="w-full">
                <div className="w-[70px] h-[70px]">
                    <img src={icon} alt="icon" />
                </div>
                <div className="w-full mt-4">
                    <h1 className="font-rancho text-[35px] leading-[43px] font-normal text-[#331A15]">{title}</h1>
                    <div className="w-full mt-[7px]">
                        <p className="font-raleway text-base leading-[26px] font-normal text-[#1B1A1A]">{para}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsCard;