import React from 'react'

export default function HomeBody() {
    return (
        <div className="text-center pt-20 md:pt-32 md:ml-36">
            <h1 className="px-6 font-serif text-3xl text-gray-600 tracking-wider lg:text-4xl">Artist, <span className="font-sans font-thin text-2xl lg:text-3xl">Developer</span>, Audio Engineer.</h1>
            <div className="mt-16 flex flex-col space-y-12 md:space-y-2 lg:ml-4 xl:items-center">
                <div className="flex flex-col items-center md:flex-row md:max-w-4xl">
                    <img src="/assets/collage_cover.jpg" className="w-64 h-64 rounded-full mr-8 flex-none" />
                    <p className="font-serif text-xl text-center text-gray-500 px-6 md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam aperiam consectetur recusandae corrupti, atque, a minus aliquid dolore facilis debitis ea! Minima sit modi assumenda maiores asperiores, repudiandae odit!</p>
                </div>
                <div className="flex flex-col items-center md:flex-row lg:max-w-4xl">
                    <img src="/assets/growth_and_decay_cover.jpg" className="w-64 h-64 rounded-full mr-8 flex-none" />
                    <p className="font-serif text-xl text-center text-gray-500 px-6 md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam aperiam consectetur recusandae corrupti, atque, a minus aliquid dolore facilis debitis ea! Minima sit modi assumenda maiores asperiores, repudiandae odit!</p>
                </div>
                <div className="flex flex-col items-center md:flex-row lg:max-w-4xl">
                    <img src="/assets/take_care_of_yourself_cover.jpg" className="w-64 h-64 rounded-full mr-8 flex-none" />
                    <p className="font-serif text-xl text-center text-gray-500 px-6 md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam aperiam consectetur recusandae corrupti, atque, a minus aliquid dolore facilis debitis ea! Minima sit modi assumenda maiores asperiores, repudiandae odit!</p>
                </div>

            </div>
        </div>
    )
}


