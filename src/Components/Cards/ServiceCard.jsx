import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
const ServiceCard = ({ service }) => {
    console.log(service);

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <Image
                        alt={service.title}
                        width={400}
                        height={400}
                        // Importing an image will
                        // automatically set the width and height
                        src={service.img}

                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>${service.price}</p>
                    <div className="card-actions justify-end">
                    <Link href={`/services/${service._id}`}><button className="btn btn-primary">View Details</button></Link>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;