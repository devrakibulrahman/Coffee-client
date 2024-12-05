
const HomePage = () => {
    return (
        <>
            <div className="w-full">
                {/* home banner */}
                <div className="w-full min-h-[calc(100vh-92px)] bg-banner bg-cover bg-no-repeat bg-center flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        <div className="w-full flex items-center justify-end">
                            <div className="w-full max-w-[730px]">
                                <h1 className="font-rancho text-[55px] leading-[68px] font-normal text-white">Would you like a Cup of Delicious Coffee?</h1>
                                <div className="w-full mt-4">
                                    <p className="font-raleway text-base leading-[30px] font-normal text-white">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                                </div>
                                <button className="px-[22px] h-[48px] bg-[#E3B577] mt-8 border-2 border-[#E3B577] font-rancho text-[24px] leading-[30px] font-normal text-[#242222] transition ease-out duration-200 hover:border-2 hover:border-white hover:text-white hover:bg-transparent">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;