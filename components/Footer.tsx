import { socialIcons } from "@/data"
import MagicButton from "./MagicButton"
import { ToolTip } from "./ToolTip"

function Footer() {
  return (
    <footer className="w-full pt-48 pb-10 " id="contact">
        <div className="flex flex-col items-center">
            <h1 className="bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text text-5xl text-center font-extrabold py-5" >Ready to take your digital presence to the next level</h1>
            <p className="text-neutral-200 md:mt-10 my-5 text-center">

                Reach out me today and discuss how I can help you achieve your goals
               

            </p>

            <ToolTip/>
        </div>
    </footer>
  )
}

export default Footer