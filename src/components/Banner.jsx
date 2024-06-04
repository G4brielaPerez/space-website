import satelite1 from "../assets/satelite1.jpg"
import satelite2 from "../assets/satelite2.jpg"

const Banner = ({ d }) => {
    const x = "border-r-2 border-l-2 border-r-sky-800 border-l-sky-800"
    
    return (
        <div className="container text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pb-12">
                {d === "r" && (
                    <img 
                        src={satelite1} 
                        alt="satelite" 
                        className="xl:pr-36" 
                        data-aos="zoom-in" 
                    />
                )}
                
                <div className={`space-y-6 p-4 border-${d}-2 border-b-2 border-b-sky-800 border-${d}-sky-800`}>
                    <p data-aos="fade-up" className="text-sky-800 uppercase">Our Mission</p>
                    <h1 data-aos="fade-up" data-aos-delay="300" className="uppercase text-5xl">Rapidcast</h1>
                    <p data-aos="fade-up" data-aos-delay="500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fugit perspiciatis incidunt maiores ipsum consequuntur minima, 
                        excepturi eligendi assumenda officiis adipisci repellendus 
                        reprehenderit, quibusdam perferendis natus saepe eveniet 
                        facere autem quaerat?
                    </p>
                    <button data-aos="fade-up" data-aos-delay="600" className="primary-btn">Learn More</button>
                </div>

                {d === "l" && (
                    <img 
                        src={satelite2} 
                        alt="satelite" 
                        className="xl:pl-36" 
                        data-aos="zoom-in"
                    />
                )}
            </div>
        </div>
    )
}

export default Banner