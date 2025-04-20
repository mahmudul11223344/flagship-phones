import React, { useEffect, useState } from 'react';
import PhoneCard from '../Components/PhoneCard';
import { getFavorites, removeFavorite } from '../Utils';
import EmptyState from '../Components/UI/EmptyState';

const Favorite = () => {
    const [displayPhones, setDisplayPhones] = useState([])
    useEffect(() => {
        const savedPhones = getFavorites();
        console.log('Saved Phones:', savedPhones);
        setDisplayPhones(savedPhones)
    }, [])

    const handleDelete = id => {
        removeFavorite(id)
        setDisplayPhones(getFavorites())
    }
    if(displayPhones.length < 1) return <EmptyState></EmptyState>
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map(phone => <PhoneCard key={phone.id} phone={phone} deletable={true} handleDelete={handleDelete}/>)
                }
            </div>
        </div>
    );
};

export default Favorite;