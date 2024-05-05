import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import alenLogo from "../../images/alen.png";

const AboutUs = ()=>{

    return (
        <div className="main-body">
           <b>AboutUs</b>
           <section className="pt-10 overflow-hidden bg-white dark:bg-white md:pt-0 sm:pt-16 2xl:pt-16">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 className="text-3xl font-bold leading-tight text-black dark:text-black sm:text-4xl lg:text-5xl">Hey 👋 I
                    am
                    <br className="block sm:hidden text-purple-600" />           <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Alen Pariyar',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'an IT Student',
        1000,
        'a developer',
        1000,
        'tech enthusiast',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='text-purple-600'
      repeat={Infinity}
    />
                </h2>
     
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-black dark:text-black md:mt-8">
                   A <b>Computer Applications</b> student currently pursuing <b>Bachelors in Computer Applications, in Tribhuwan University.</b>
                </p>

                <p className="mt-4 text-xl text-black dark:text-black md:mt-8">
                    <span className="relative inline-block">
                       
                    <span className="relative"> Have a question? </span>
                    </span>
                    <br className="block sm:hidden" />Ask me on <a href="https://github.com/AlenPariyarOct10" title=""
                        className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">GitHub</a>
                </p>
            </div>

            <div className="relative">
                <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={alenLogo} alt="" />
            </div>

        </div>
    </div>
</section>
        </div>
    )
}

export default AboutUs;