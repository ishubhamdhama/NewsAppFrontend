import { useEffect } from "react";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "react-router-dom";

function Entertainment() {
    const [getEntertainment,setGetEntertainment] =  useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async() =>{
            const response = await fetch("https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=57383e0a076a459486f0397fce7a3495");
            try {
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setGetEntertainment(result.articles)
                setLoading(false)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    },[])

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <>
    
        
    <div className="wrapper">
    {loading && <div className="text-center h-[100vh] flex justify-center items-center" style={{fontSize:"4rem"}}><i className="fa-solid fa-arrows-rotate fa-spin fa-2xl"></i></div>}
            <h1 className="text-center text-gray-900 text-5xl font-bold py-6">Entertainment</h1>
                <h1 className="text-center text-gray-900 text-6xl font-extrabold"><i className="fa-solid fa-down-long"></i></h1>
                {loading && <div className="text-center"><i className="fa-solid fa-arrows-rotate"></i></div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 back">
                    {getEntertainment.slice(0, 99).map((data, index) => (
                        <div key={index} className="md:h-[700px] lg:h-[700px]">
                            {data && ( // Add this check to ensure 'data' is not null or undefined
                                <CardContainer className="inter-var">
                                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] md:w-[25rem] lg:w-[30rem] h-auto rounded-lg p-6 border">
  {/* Card content */}

                                        <CardItem
                                            translateZ="50"
                                            className="text-lg font-bold text-neutral-600 dark:text-white"
                                        >
                                            {data.title?.slice(0, 60)}...
                                        </CardItem>
                                        <CardItem
                                            as="p"
                                            translateZ="60"
                                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                        >
                                            {data.publishedAt?.slice(0, 10)}
                                        </CardItem>
                                        <CardItem translateZ="100" className="w-full mt-4">
                                            {data.urlToImage ? (
                                                <img 
                                                src={data.urlToImage} 
                                                style={{ height: "300px", width: "400px" }} 
                                                alt="" 
                                                onError={(e)=>{
                                                    e.currentTarget.src = "https://images.pexels.com/photos/161772/las-vegas-nevada-cities-urban-161772.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                }}/>
                                            ) : (
                                                <img src="https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder" style={{ height: "300px", width: "400px" }} /> // Render placeholder image if urlToImage is null
                                            )}
                                        </CardItem>
                                        <div className="flex justify-between items-center mt-20">
                                            <CardItem
                                                translateZ={20}
                                                as="a"
                                                href="https://twitter.com/mannupaaji"
                                                target="__blank"
                                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                            >
                                                <p className="text-base">{data.description?.slice(0, 90)}..</p>
                                            </CardItem>

                                            <CardItem
                                                translateZ={20}
                                                as="button"
                                                className="px-6 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                            >
                                                <Link to={data.url}>
                                                    Go to Website
                                                </Link>
                                            </CardItem>
                                        </div>
                                    </CardBody>
                                </CardContainer>
                            )}
                        </div>
                    ))}

                </div>

                <button
                className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md"
                onClick={scrollToTop}
            >
                Back to Top
            </button>
            </div>
    </>
  )
}

export default Entertainment