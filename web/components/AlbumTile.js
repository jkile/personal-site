import React from 'react'

export default function AlbumTile(props) {
    return (
        <>
            {/* <img src={props.image} className="w-64" /> */}
            <div className=" w-80 h-80 bg-contain transition duration-150 relative text-transparent hover:text-gray-100" style={{ backgroundImage: `url(${props.image})` }}>
                <div className="h-80 absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center cursor-pointer transition duration-150 hover:bg-gray-800 hover:bg-opacity-50">
                    <p className="font-sans text-lg font-light  tracking-widest">{props.title}</p>
                    <p className="font-sans">by</p>
                    <p className="font-sans text-lg font-light  tracking-widest">{props.artist}</p>
                </div>
            </div>
        </>
    )
}
