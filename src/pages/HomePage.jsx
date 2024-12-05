import DetailsCard from "../components/DetailsCard";
import Cup from '../assets/icons/1.png';
import Badge from '../assets/icons/2.png';
import Coffee from '../assets/icons/3.png';
import Pot from '../assets/icons/4.png';

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
                {/* home details card */}
                <div className="w-full min-h-[300px] bg-[#ECEAE3] flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        <div className="w-full grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-4">
                            <DetailsCard icon={Cup} title={'Awesome Aroma'} para={'You will definitely be a fan of the design & aroma of your coffee'}></DetailsCard>
                            <DetailsCard icon={Badge} title={'High Quality'} para={'We served the coffee to you maintaining the best quality'}></DetailsCard>
                            <DetailsCard icon={Coffee} title={'Pure Grades'} para={'The coffee is made of the green coffee beans which you will love'}></DetailsCard>
                            <DetailsCard icon={Pot} title={'Proper Roasting'} para={'Your coffee is brewed by first roasting the green coffee beans'}></DetailsCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;