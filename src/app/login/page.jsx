import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='container mx-auto'>
           <div className='grid grid-cols-2 gap-11'>
               <div>
                 <Image src={'/assets/images/login/login.svg'} width={540} height={540} alt='log in image'/>
               </div>

               <div className=''>
                   form
               </div>
           </div>
        </div>
    );
};

export default page;