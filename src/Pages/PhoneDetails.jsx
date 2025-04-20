import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Components/UI/Button';
import { MdBookmarkAdd, MdOutlineShoppingCart } from "react-icons/md";
import { addFavorite } from '../Utils';


const PhoneDetails = () => {
    const phonesData = useLoaderData()

    const { id } = useParams()

    const singlePhone = phonesData.find(phone => phone.id === parseInt(id))

    const { name, image, brand, price, description, storage, camera_info } = singlePhone || {}

    const handleFavorite = () => {
        addFavorite(singlePhone)
    }

    return (
        <div className='w-full py-12'>
            <img src={image} alt="Banner Image" className='w-full mx-auto md:w-auto mb-8' />
            {/* title and buttons */}
            <div className='flex justify-between'>
                <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                <div className='space-x-3'>
                    <Button label={<MdOutlineShoppingCart />
                    }></Button>
                    <Button onClick={handleFavorite} label={<MdBookmarkAdd />
                    }/>
                </div>
            </div>
            {/* Details */}
            <div>
                <h3 className='text-2xl'>{brand}</h3>
                <h4 className='text-xl font-semibold mb-2'>Price:</h4>
                <ul className='mb-4'>
                    {price && Object.entries(price).map(([variant, cost]) => (
                        <li key={variant} className='text-lg'>
                            {variant}: {cost}
                        </li>
                    ))}
                </ul>
                <p>{description}</p>
                <p>{storage}</p>
                <p>{camera_info}</p>
            </div>
        </div>
    );
};

export default PhoneDetails;