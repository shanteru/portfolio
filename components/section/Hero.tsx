'use client'
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiAwardFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "@/components/common/DevImg";
import Social from "@/components/common/Social";
import Link from "@/node_modules/next/link";
import { Button } from "../ui/button";
import Floater from "../common/Floater";

import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[95vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Chantelle Loh Yi Wei
            </div>
            <h1 className="h1 md:h3 "><TypeAnimation
              sequence={[


                "Hello, I've develop Web App",
                1000,
                "Hello, I've done AI Research",
                1000,
                "Hello, I've done UI/UX Design",
                1000

              ]}
              
              speed={30}

              repeat={Infinity}
            /></h1>
            <br />
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Experience in conducting AI research, integrating AI in web
              application as well as Full-Stack web development.
            </p>

            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>

              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>

            {/* socials */}
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[28px] hover:text-primary transition-all"
            />
          </div>

          {/* image */}
          <div className="hidden xl:flex relative">
            {/* award float */}
            <Floater
              containerStyles="absolute top-[23%] -left-[5rem] "
              icon={<RiTodoFill />}
              endCountNum={36}
              floaterText="Projects Completed"
            />
            {/* float2  */}
            <Floater
              containerStyles="absolute top-[80%] -left-[1rem] "
              icon={<RiAwardFill />}
              endCountNum={10}
              floaterText="Award & Recognitions"

            />
            {/* float3  */}
            <Floater
              containerStyles="absolute top-[57%] -right-8"
              icon={<RiBriefcase4Fill />}
              endCountNum={21}
              floaterText="Months of Experience"

            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px]  h-[500px] bg-no-repeat absolute -top-1 -right-2  "></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom dark:bg-hero_shape_dark "
              imgSrc="/hero/avatar.png"
            />
          </div>
        </div>

        {/* icons */}
        <div className="hidden xl:flex left-2/4 absolute bottom-8 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
