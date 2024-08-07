import React from 'react';
import {services} from '../../lib/services'
import ServiceCard from '../Cards/ServiceCard';


const Services = () => {
    // console.log(services);
    
    return (
        <div className=''>

            <div className='flex flex-col items-center '>
                <h1 className='text-xl font-bold text-orange-800'>Service</h1>
                <h3 className='text-3xl font-bold'>Our services are</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda asperiores deserunt harum nesciunt et. Eos?</p>
            </div>

            <div className='mt-9 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2'>

                {
                    services.map((service,index)=> <ServiceCard service={service} key={index}></ServiceCard> )
                }
            </div>

        </div>
    );
};

export default Services;