"use client";
import { testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


function Clients() {
    return (
        <>
            <section id='testimonials' className='py-10'>

                <h1 className="bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text text-5xl text-center font-extrabold py-10">Kind words from satisfied Clients</h1>

                <div>

                    <div >

                        <InfiniteMovingCards
                            items={testimonials}
                            direction="left"
                            speed="slow"
                        />


                    </div>



                </div>


            </section>

        </>
    )
}

export default Clients