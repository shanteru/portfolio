'use client';
import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/common/ProjectCard';

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
    category: "asdadsa",
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


// remove duplicates 
const uniqueCategories = ['all projects', ...Array.from(new Set(projectData.map((item) => item.category)))]
const Projects = () => {

  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');
  const filterProjects=projectData.filter(project=>{

    return category === "all projects" ? project : project.category===category;

  })
  return (
    <section className='min-h-screen pt-12'>

      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full h-full grid md:grid-cols-5 lg:max-w-[800px] mb-12 mx-auto md:border dark:border-none" >
            {categories.map((category, index) => {
              return <TabsTrigger 
              onClick={()=>setCategory(category)}
              value={category} key={index} className='capitalize w-[162px] xl:w-auto' >{category}</TabsTrigger>
            })}
          </TabsList>

          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filterProjects.map((project, index)=>{
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects