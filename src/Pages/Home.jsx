import React, { useState } from 'react';
import Hero from '../Components/Hero';
import PhonesContainer from '../Components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();
    const [phones, sePhones] = useState(data)
    const handleSearch = (e , text) => {
        e.preventDefault()
        const searchedPhones = data.filter(phone => 
       phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) || 
       phone.brand.toLowerCase().split(' ').includes(text.toLowerCase())
    )
    sePhones(searchedPhones);
    }

    return (
        <div>
            <Hero handleSearch={handleSearch}/>
            <PhonesContainer phones = {phones}/>
        </div>
    );
};

export default Home;