import { FaLocationDot } from "react-icons/fa6"
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className=" bg-gray-800 relative z-10 text-white py-10">
            <div className="container mx-auto grid lg:grid-cols-3 pb-8">
                <div className="space-y-4 sm:pb-10 lg:pb-0">
                    <h1 className="text-3xl font-bold">Be Ready To Grow</h1>
                    <p>
                        Get Exclusive 
                        <span className="font-bold"> update </span>
                        straigt to your inbox <br />
                    </p>

                    <div className="flex items-center">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Email Address"
                        />
                        <button className="primary-btn rounded-l-none -ml-1 h-[45px]">OK</button>
                    </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 col-span-2 lg:pl-20">
                    <div>
                        <h1 className="text-2xl font-bold mb-3">Quick Links</h1>
                        <div className="text-lg space-y-3">
                            <p className="link">Home</p>
                            <p className="link">About</p>
                            <p className="link">Services</p>
                            <p className="link">Login</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-3">Quick Links</h1>
                        <div className="text-lg space-y-3">
                            <p className="link">Home</p>
                            <p className="link">About</p>
                            <p className="link">Services</p>
                            <p className="link">Login</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-8">Contact Us</h1>
                        <div className="text-lg space-y-3">
                            <div className="flex items-center gap-2">
                                <FaLocationDot />
                                Noida, Uttar Pradesh
                            </div>
                            <div className="flex items-center gap-2">
                                <MdMessage />
                                abc@gmail.com
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPhoneAlt />
                                +91 123456789
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container border-t-2 border-gray-400 pt-4 w-full">
                <div className="grid grid-cols-3">
                    <p l>copyright 2024 by TCJ</p>
                    <div className="text-white text-4xl flex items-center justify-center gap-6">
                        <FaInstagram />
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                    <p className="text-right">Privacy Policy <span className="px-3"></span> Terms & Conditions</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer