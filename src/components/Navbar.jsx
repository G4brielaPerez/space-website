import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div data-aos="fade-down" className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-white text-xl font-bold">
                        <img src={logo} alt="logo" className="w-10" />
                        <span>TCJ-SPACE</span>
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6 text-xl py-4 sm:py-0 text-white">
                            <li className="link">About</li>
                            <li className="link">Technology</li>
                            <li className="link">Galaxy</li>
                            <li className="link">Satelite</li>
                        </ul>
                    </div>
                    
                    <button className="login-btn">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar