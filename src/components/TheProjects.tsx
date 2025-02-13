import Heading from "./common/Heading";
import Image from "next/image";
import Description from "./common/Description";
import { PROJECT_DATA } from "../utils/helper";

interface ProjectItem {
    image: string;
    description: string;
}

const TheProject = () => {
    return (
        <div className="bg-dark-blue lg:py-[65px] sm:py-[70px] py-8 -mt-[1px]" id="project">
            <div className="max-w-[1176px] container mx-auto px-8 max-sm:px-4 relative z-10 max-md:px-4 max-lg:px-8">
                <div className="lg:flex-row flex flex-col xl:gap-[92px] md:gap-[53px] gap-10">
                    <div className='lg:max-w-[560px] max-lg:mx-auto max-lg:w-full about flex flex-col justify-center'>
                        <Heading styleClass="pb-5 " text="THE PROJECT" classDesign="translate-y-[-1.3px]" />
                        {PROJECT_DATA.map((obj: ProjectItem, index) => (
                            <div key={index} className="flex gap-5 pb-2 items-start">
                                <Image
                                    src={obj.image}
                                    alt="about-icon"
                                    width={29}
                                    height={29}
                                    className="max-w-[29px]" />
                                <Description
                                    styleClass={`max-lg:tracking-[1.3px] max-sm:tracking-[1.5px] max-lg:max-w-[720px] max-sm:max-w-[294px] ${index === 0 ? "max-w-[269px] lg:max-w-[551px]": index === 1 ? "max-w-[267px] lg:max-w-[502px] max-sm:max-w-[279px] " : index === 2 ? "max-w-[267px] lg:max-w-[512px]" : "xl:max-w-[456px] max-w-[254px]"
                                        }`}
                                    description={obj.description}/>                    
                                    </div>
                        ))}
                    </div>
                    <div className="image flex max-lg:justify-center">
                        <Image src="/assets/images/webp/project-girl.png"
                            alt="project-image"
                            width={471}
                            height={626}
                            className="max-xl:w-full max-w-[471px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheProject