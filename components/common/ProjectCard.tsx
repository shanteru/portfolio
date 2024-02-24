import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";
import { Card, CardHeader } from "../ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "../ui/badge";


type Project = {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
};

type ProjectCardProps = {
  project: Project;
};

const  ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="group relative overflow-hidden ">
      <CardHeader className="p-0">
        {/* image */}
        {/* COLOR TO FIX  */}
        <div
          className="relative w-full h-[300px] flex items-center justify-center bg-accent/50 dark:bg-secondary/40 
        xl:bg-project_bg_light xl:bg-[110%] xl:dark:bg-project_bg_dark xl:bg-no-repeat overflow-hidden"
        >
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          {/*  buttons */}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0
               opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white"/>
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0
               opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github className="text-white"/>
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
