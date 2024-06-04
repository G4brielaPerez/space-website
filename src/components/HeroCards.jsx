import { FaReact } from "react-icons/fa"
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6"
import wave from "../assets/wave_Gif.gif"

const Services = () => {
    return (
        <div className="container text-white relative">
            <div className="min-h-[300px]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {DATA.map((item, index) => (
                        <div 
                            key={index} 
                            data-aos="fade-up" 
                            data-aos-delay={item.aosDelay} 
                            className="min-h-[180px] flex flex-col gap-2 justify-center items-center rounded-xl bg-sky-900/60 backdrop-blur-sm py-8 px-4 w-full lg:w-[300px] mx-auto"
                        >
                            <div>{item.icon}</div>
                            <h1 className="text-xl font-bold">{item.title}</h1>
                            <p>{item.content}</p>
                            <p className="text-sm text-center">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <img 
                src={wave} 
                alt="wave" 
                className="h-[180px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]" 
            />
        </div>
    )
}

const DATA = [
    {
        title: "HST",
        content: "300-1500km",
        description: "Used for astronomical observations, capturing stunning images of the universe",
        icon: <FaReact className="text-7xl" />,
        aosDelay: "300"
    },
    {
        title: "ISS",
        content: "500-1500km",
        description: "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
        icon: <FaShuttleSpace className="text-7xl" />,
        aosDelay: "500"
    },
    {
        title: "GPS",
        content: "300-1500km",
        description: "Part of the Global Positioning System (GPS) used for navigation",
        icon: <FaSpaceAwesome className="text-7xl" />,
        aosDelay: "300"
    }
]

export default Services