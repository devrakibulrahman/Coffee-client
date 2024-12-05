import { FaLocationDot } from 'react-icons/fa6';
import logo from '/logo1.png';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="w-full min-h-[825px] bg-footerImg bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pt-[30px] relative">
                <div className="container mx-auto px-4">
                    <div className='w-full flex items-center justify-center gap-x-[350px]'>
                        <div className='w-full'>
                            <div className='w-[75px] h-[75px] mb-6'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className='w-full'>
                                <h1 className='font-rancho text-[45px] leading-[56px] font-normal text-[#331A15]'>Coffee House</h1>
                                <div className='w-full mt-8'>
                                    <p className='font-raleway text-xl leading-[36px] font-normal text-[#1B1A1A]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center gap-x-[19px] my-8'>
                                <div className='w-auto'>
                                    <FaFacebook className='text-[40px] text-[#331A15] cursor-pointer'></FaFacebook>
                                </div>
                                <div className='w-auto'>
                                    <FaTwitter className='text-[40px] text-[#331A15] cursor-pointer'></FaTwitter>
                                </div>
                                <div className='w-auto'>
                                    <FaInstagram className='text-[40px] text-[#331A15] cursor-pointer'></FaInstagram>
                                </div>
                                <div className='w-auto'>
                                    <FaLinkedin className='text-[40px] text-[#331A15] cursor-pointer'></FaLinkedin>
                                </div>
                            </div>
                            <div className='w-full mt-8'>
                                <div className='w-full mb-8'>
                                    <h1 className='font-rancho text-[45px] leading-[56px] font-normal text-[#331A15]'>Get in Touch</h1>
                                </div>
                                <div className='w-full flex flex-col items-center gap-y-4'>
                                    <div className='w-full flex items-center gap-x-[28px]'>
                                        <div className='w-auto'>
                                            <FaPhoneAlt className='text-xl text-[#331A15]'></FaPhoneAlt>
                                        </div>
                                        <div>
                                            <p className='font-raleway text-xl leading-[36px] font-normal text-[#1B1A1A]'>+60 12-3456789</p>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center gap-x-[28px]'>
                                        <div className='w-auto'>
                                            <FaEnvelope className='text-xl text-[#331A15]'></FaEnvelope>
                                        </div>
                                        <div>
                                            <p className='font-raleway text-xl leading-[36px] font-normal text-[#1B1A1A]'>coffeehouse.info@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center gap-x-[28px]'>
                                        <div className='w-auto'>
                                            <FaLocationDot className='text-xl text-[#331A15]'></FaLocationDot>
                                        </div>
                                        <div>
                                            <p className='font-raleway text-xl leading-[36px] font-normal text-[#1B1A1A]'>Lot 10, Jalan Sultan Ismail, 50250 Kuala Lumpur, Malaysia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full max-w-[500px]'>
                            <div className='w-full mb-8'>
                                <h1 className='font-rancho text-[45px] leading-[56px] font-normal text-[#331A15]'>Connect with Us</h1>
                            </div>
                            <div className='w-full'>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className='w-full space-y-4'>
                                        <div className='w-full'>
                                            <input type="text" name='Name' placeholder='Name' className='w-full h-[48px] py-[15px] pl-3 outline-none' autoComplete='off' />
                                        </div>
                                        <div className='w-full'>
                                            <input type="text" name='email' placeholder='Email' className='w-full h-[48px] py-[15px] pl-3 outline-none' autoComplete='off' />
                                        </div>
                                        <div className='w-full'>
                                            <textarea name="message" placeholder='Message' rows={5} className='w-full py-[15px] pl-3 outline-none resize-none' autoComplete='off'></textarea>
                                        </div>
                                    </div>
                                    <div className='w-full mt-6'>
                                        <div className='w-auto'>
                                            <button className='px-5 h-[48px] border-2 border-[#331A15] rounded-full font-rancho text-2xl leading-[30px] font-normal text-[#331A15] transition ease-out duration-200 hover:bg-[#331A15] hover:text-white'>Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-subFooterImg bg-cover bg-center bg-no-repeat flex items-center justify-center absolute bottom-0 left-0 py-[13px]'>
                    <p className='font-rancho text-xl leading-[25px] font-normal text-white'>2024 - {new Date().getFullYear()} Copyright Coffee House ! All Rights Reserved</p>
                </div>
            </div>
        </>
    );
};

export default Footer;