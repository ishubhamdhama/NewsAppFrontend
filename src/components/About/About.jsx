import { Link } from "react-router-dom";
import { useState } from "react";
import Pic from './Pics';
import './About.css'

function About() {
    const [selectedYear, setSelectedYear] = useState("2021");

    const handleOnClick = (year) => {
        setSelectedYear(year)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className="container mx-auto px-4 lg:flex lg:justify-between lg:items-center mainDiv">
                <div className="lg:w-1/2 lg:pr-12">
                    <p className="font-semibold italic ">Meet the Team:</p>
                    <h2 className="font-bold text-3xl leading-10 mt-4 mb-6"> Discover the Minds Behind Our News App</h2>
                    <p className="leading-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Sint reiciendis eaque dicta cumque, error impedit officiis<br /> temporibus id, fugiat voluptates assumenda, debitis dolor<br /> et ducimus voluptatem consequatur saepe dolore nostrum <br />esse! Molestias non laboriosam ea cupiditate totam nulla odit <br />quasi.</p>
                    <button className="bg-gray-800 text-white hover:bg-white hover:text-black font-semibold px-4 py-2 rounded-full mt-4">
                        <Link to='/contact'>Contact us</Link>
                    </button>
                </div>
                <div className="lg:w-1/2">
                    <img src={Pic.Pic5} alt="" className="h-auto lg:h-64 mt-6 lg:mt-0 lg:ml-auto lg:mr-0 mx-auto shadow-xl transform rotate-3" />
                </div>
            </div>

            <div className=" h-[50%] mx-auto px-4 mt-[6rem] childDiv">
                <h1 className="font-bold text-4xl mb-6">Why Choose NewsHub</h1>
                <ul className="list-disc list-inside">
                    <li className="mb-4"><span className="font-semibold italic text-gray-600">Breaking News, Thoughtful Analysis: </span> Our Approach to News at NewsHub</li>
                    <li className="mb-4"><span className="font-semibold italic text-gray-600">Informed, Balanced, Engaging:</span> Discover Our Approach to Journalism</li>
                    <li className="mb-4"><span className="font-semibold italic text-gray-600">A New Perspective on News: </span> Learn About Our Innovative Approach at NewsHub</li>
                </ul>
            </div>

            <hr className="border-gray-300 my-12" />

            <div className="container mx-auto px-4 childDiv2">
                <div className="flex justify-center mb-8 buttonsFl">
                    <button className={`buttonsFle bg-gray-600 text-white py-1 px-9 rounded-lg mr-4 ${selectedYear === "2021" ? 'bg-gray-800' : ''}`} onClick={() => handleOnClick("2021")}>2021</button>

                    <button className={`buttonsFle bg-gray-600 text-white py-1 px-9 rounded-lg mr-4 ${selectedYear === "2022" ? 'bg-gray-800' : ''}`} onClick={() => handleOnClick("2022")}>2022</button>

                    <button className={`buttonsFle bg-gray-600 text-white py-1 px-9 rounded-lg mr-4 ${selectedYear === "2023" ? 'bg-gray-800' : ''}`} onClick={() => handleOnClick("2023")}>2023</button>

                    <button className={`buttonsFle bg-gray-600 text-white py-1 px-9 rounded-lg mr-4 ${selectedYear === "2024" ? 'bg-gray-800' : ''}`} onClick={() => handleOnClick("2024")}>2024</button>

                </div>
                <div className="text-center aboutContent">
                    {selectedYear === "2021" && (
                        <div>
                            <img src={Pic.Pic1} alt="" className="mx-auto h-auto lg:h-64 mb-6 shadow-xl" />
                            <h2 className="text-lg font-bold mb-2">Year 2021</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui at ullam blanditiis numquam facilis molestiae voluptas corporis expedita ad quidem, excepturi labore sint consequuntur asperiores tempora voluptate sunt rerum distinctio accusamus minus.</p>
                        </div>
                    )}
                    {selectedYear === "2022" && (
                        <div>
                            <img src={Pic.Pic2} alt="" className="mx-auto h-auto lg:h-64 mb-6 shadow-xl" />
                            <h2 className="text-lg font-bold mb-2">Year 2022</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui at ullam blanditiis numquam facilis molestiae voluptas corporis expedita ad quidem, excepturi labore sint consequuntur asperiores tempora voluptate sunt rerum distinctio accusamus minus.</p>
                        </div>
                    )}
                    {selectedYear === "2023" && (
                        <div>
                            <img src={Pic.Pic3} alt="" className="mx-auto h-auto lg:h-64 mb-6 shadow-xl" />
                            <h2 className="text-lg font-bold mb-2">Year 2023</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui at ullam blanditiis numquam facilis molestiae voluptas corporis expedita ad quidem, excepturi labore sint consequuntur asperiores tempora voluptate sunt rerum distinctio accusamus minus.</p>
                        </div>
                    )}
                    {selectedYear === "2024" && (
                        <div>
                            <img src={Pic.Pic4} alt="" className="mx-auto h-auto lg:h-64 mb-6 shadow-xl" />
                            <h2 className="text-lg font-bold mb-2">Year 2024</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui at ullam blanditiis numquam facilis molestiae voluptas corporis expedita ad quidem, excepturi labore sint consequuntur asperiores tempora voluptate sunt rerum distinctio accusamus minus.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="fixed bottom-4 right-4 message-top-Button">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-md mr-4">
                    <Link to="/contact">
                        <i className="fa-solid fa-message fa-lg"></i>
                    </Link>
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md" onClick={scrollToTop}>
                    Back to Top
                </button>
            </div>
        </>
    )
}

export default About;
