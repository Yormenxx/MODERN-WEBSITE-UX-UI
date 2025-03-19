import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"



function RecentProjects() {
    return (
        <>

            <section id="projects" className="py-20 px-10">
                <h1 className="bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text text-5xl text-center font-extrabold py-5"><span className="text-green">Projects</span></h1>



                <div className="flex flex-wrap items-center justify-center gap-16 p-4">
                    {projects.map((item) => (
                        <div key={item.id} className="grid xsm:grid-cols-2 grid-cols-1 p-4 gap-10 mt-10">
                            <PinContainer

                                title="www.acernity.com"
                              
                               
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem]">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-neutral-300">{item.title}</h3>
                                    <div>
                                        <span className="text-slate-500">
                                            {item.des}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4">
                                        <img src={item.img} alt="cover" className="z-10 rounded-lg bg-cover"  />
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                </div>






            </section>



        </>
    )
}

export default RecentProjects