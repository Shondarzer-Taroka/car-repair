import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="carousel w-full rounded-xl">

                {
                    baners.map((banner, index) =>
                        <div
                            // style={{ backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3),url(/assets/images/homeCarousel/4.jpg))` }}
                            // style={{backgroundImage:`url(/assets/images/homeCarousel/${index+1}.jpg)`}}
                            style={{backgroundImage:`linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)),url(/assets/images/homeCarousel/${index+1}.jpg)`}}
                            key={index}
                            id={`slide${index + 1}`}
                            className="carousel-item relative w-full h-[90vh]"

                        >
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href={banner.prev} className="btn btn-circle">❮</a>
                                <a href={banner.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};


const baners = [
    {
        title: 'Affordable Price for Car servicing',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet explicabo reprehenderit iusto fugit est temporibus.',
        next: '#slide2',
        prev: '#slide4',
    },
    {
        title: 'Affordable Price for Car servicing',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet explicabo reprehenderit iusto fugit est temporibus.',
        next: '#slide3',
        prev: '#slide1',
    },
    {
        title: 'Affordable Price for Car servicing',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet explicabo reprehenderit iusto fugit est temporibus.',
        next: '#slide4',
        prev: '#slide2',
    },
    {
        title: 'Affordable Price for Car servicing',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet explicabo reprehenderit iusto fugit est temporibus.',
        next: '#slide1',
        prev: '#slide3',
    },
]

export default Banner;