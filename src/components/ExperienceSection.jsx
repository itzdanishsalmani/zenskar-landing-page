import { Buttons } from "./Others/Buttons";

export function ExperienceSetion() {
    return (
        <div className="flex flex-col justify-center w-11/12 mx-auto mt-12 p-4">
        <div className="bg-my-image bg-center bg-cover h-84 rounded-lg">
            <div className="flex flex-col justify-center items-center text-white">
                <div className="text-3xl md:text-4xl mt-12 text-center font-bold">
                    Experience billing without limits 
                </div>
                <div className="text-lg mt-8 text-center md:w-5/12">
                Collect and retain more revenue, monitor realtime usage and streamline your accounting ops with Zenskar
                </div>
                <div className="my-12">
                    <Buttons 
                    style={"bg-red-400 text-white rounded-lg p-4"}
                    text={"Schedule Demo "}
                    image={"arrow_forward.svg"}
                    />
                </div>
            </div>
        </div>
        </div>
    )
}