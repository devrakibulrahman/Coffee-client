import logo from '/logo1.png';

const Header = () => {
    return (
        <>
            <div className="w-full min-h-[60px] bg-[#331A15]">
                <div className="w-full min-h-[60px] bg-headerImg bg-cover bg-no-repeat bg-center flex items-center justify-center">
                    <div className="w-full flex items-center justify-center gap-3 py-4">
                        <div className={`w-[50px]`}>
                            <img src={logo} alt="logo" />
                        </div>
                        <h1 className="font-rancho text-white text-heading-xs sm:text-heading-sm md:text-heading-md">Coffee House</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;