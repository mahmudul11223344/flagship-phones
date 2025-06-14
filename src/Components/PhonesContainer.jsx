import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';

const PhonesContainer = ({ phones }) => {
    const [displayPhones, setDisplayPhones] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        if(showAll){
            setDisplayPhones(phones)
        }
        else{
            setDisplayPhones(phones.slice(0,  6))
        }
    }, [phones, showAll])
    console.log(phones);
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map(phone => <PhoneCard key={phone.id} phone={phone} />)
                }
            </div>
            <button onClick={() => {
                setShowAll(prv => !prv)
                if(showAll) window.scrollTo(0, 400)
            }} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group cursor-pointer">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">{showAll ? 'Show Less' : 'Show All'}</span>
            </button>
        </div>
    );
};

export default PhonesContainer;