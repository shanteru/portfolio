"use client";

import Link from "@/node_modules/next/link";
import { Button } from "../ui/button";

//import swiper react component
import {Swiper,SwiperSlide} from 'swiper/react'

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "../Project/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "XXX Website",
    description: "Lorem thingy",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "XXX Website",
    description: "Lorem thingy",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "XXX Website",
    description: "Lorem thingy",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "XXX Website",
    description: "Lorem thingy",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "XXX Website",
    description: "Lorem thingy",
    link: "/",
    github: "/",
  },
];
const RecentProject = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text  */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center
        xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Some askdpokaspodksakdpokad</p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* slider */}

        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px] " slidesperView={1} breakpoints={{
            640:{
              slidesPerView:2
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{clickable:true}}
          >
            {/* show first 4 project only */}
            {projectData.slice(0,4).map((project,index)=>{
              return <SwiperSlide key={index}>
                <ProjectCard project={project}></ProjectCard>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RecentProject;
