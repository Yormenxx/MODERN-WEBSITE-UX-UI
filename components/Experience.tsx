import { workExperience } from "@/data"
import { Button } from "./ui/moving-border"
import { BiBorderRadius } from "react-icons/bi"



function Experience() {
  return (
    <>

      <section id="experience" className=" px-10 ">

        <h1 className="bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text text-5xl text-center font-extrabold py-5" >
          <span >Experience</span>
        </h1>



        <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-3  gap-10">
          {
            workExperience.map((experience) => (
              <Button key={experience.id} borderRadius="1.75em" duration={Math.floor(Math.random() * 10000) + 10000} className="text-white py-4 " style={{background:"rgb(0,0,0)", borderRadius:`calc(1.75em * 0.96)`}}>

                <div className="flex flex-col items-center px-3 py-6 gap-2">
                  <img src={experience.thumbnail} alt={experience.thumbnail} className="w-16 text-center" />
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold">{experience.title}</h1>
                    <p className="text-neutral-500 mt-3 font-semibold">{experience.description}</p>
                  </div>
                </div>


              </Button>

            ))
          }

        </div>
      </section>


    </>
  )
}

export default Experience