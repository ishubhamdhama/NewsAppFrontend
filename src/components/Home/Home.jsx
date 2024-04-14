import { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "react-router-dom";

function Home() {
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true); // State variable to track loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=57383e0a076a459486f0397fce7a3495');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPopular(data.articles);
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of error
            }
        };
        fetchData();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional: Smooth scrolling animation
        });
    };

    return (
        <>
            <div className="wrapper">
            {loading && <div className="text-center h-[100vh] flex justify-center items-center" style={{fontSize:"4rem"}}><i className="fa-solid fa-arrows-rotate fa-spin fa-2xl"></i></div>}
                <h1 className="text-center text-gray-900 text-5xl font-bold py-6">Popular News</h1>
                <h1 className="text-center text-gray-900 text-6xl font-extrabold"><i className="fa-solid fa-down-long"></i></h1>

                {/* Show loader if data is loading */}
                

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 homeCard">
                    {popular.slice(0, 9).map((article, index) => (
                        <div key={index} className="md:h-[700px] lg:h-[640px]">
                            <CardContainer className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] md:w-[25rem] lg:w-[30rem] h-auto rounded-lg p-6 border">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        {article.title.slice(0,60)}...
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        {article.publishedAt.slice(0, 10)}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <img src={article.urlToImage} alt="" height="150px" />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-20">
                                        <CardItem
                                            translateZ={20}
                                            as="a"
                                            href="https://twitter.com/mannupaaji"
                                            target="__blank"
                                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                        >
                                            <p className="text-base">{article.description.slice(0, 90)}..</p>
                                        </CardItem>

                                        <CardItem
                                            translateZ={20}
                                            as="button"
                                            className="px-6 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                        >
                                            <Link to={article.url}>
                                            Go to Website
                                            </Link>
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
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
    );
}

export default Home;
