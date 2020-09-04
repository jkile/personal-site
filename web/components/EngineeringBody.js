import React from 'react';
import AlbumTile from './AlbumTile';

export default function EngineeringBody() {

    const records = [
        {
            title: "The Book of Keen",
            artist: "Cafe Lounge",
            image: "/assets/book_of_keen_cover.jpg"
        },
        {
            title: "Color Codes",
            artist: "Dr. Bugg",
            image: "/assets/color_codes_cover.jpg"
        },
        {
            title: "Businessland",
            artist: "James World",
            image: "/assets/businessland_cover.jpg"
        },
        {
            title: "As/Is",
            artist: "Steady Wander",
            image: "/assets/as_is_cover.jpg"
        },
        {
            title: "Growth and Decay",
            artist: "Grove",
            image: "/assets/growth_and_decay_cover.jpg"
        },
        {
            title: "Things",
            artist: "Tanner Durrett",
            image: "/assets/things_cover.jpg"
        },
        {
            title: "Take Care of Yourself",
            artist: "Grove",
            image: "/assets/take_care_of_yourself_cover.jpg"
        },
        
    ]

    return (
        <div className="text-center pt-20 md:pt-32 md:ml-36">
            <h1 className="px-6 font-serif text-3xl text-gray-600 tracking-wider lg:text-4xl">Engineering</h1>
            <div className="flex flex-wrap ml-6 pt-12 justify-center">
                {records.map(item => {
                    return <AlbumTile image={item.image} artist={item.artist} title={item.title}/>
                })}
            </div>
        </div>
    )
}
