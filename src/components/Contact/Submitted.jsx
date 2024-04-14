import { Link } from 'react-router-dom';
import SubmitIcon from '../../images/submit-successfully.svg';
function Submitted() {
    return (
        <>
        <button className='bg-gray-800 text-white m-4 p-3 rounded-xl'><Link to='/'><i className="fa-solid fa-arrow-left fa-fade" style={{}}></i>Back to Home</Link></button>
            <div className='wrapper flex justify-center items-center h-[100vh]'>
                <div className='flex flex-col items-center'>
                    <img src={SubmitIcon} alt="" className='h-[30%] w-[30%] ' />
                    <h3 className='text-3xl font-bold leading-[6rem]'>Your Form Submitted Successfully</h3>
                    <h5 className='font-medium text-xl'>Thank You for Your Precious Time</h5>
                </div>
            </div>
        </>
    )
}

export default Submitted