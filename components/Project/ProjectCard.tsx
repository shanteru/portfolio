import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";
import { Card, CardHeader } from "../ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "../ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group relative overflow-hidden ">
      <CardHeader className="p-0">
        {/* image */}
        {/* COLOR TO FIX  */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-accent/50 dark:bg-secondary/40 
        xl:bg-project_bg_light xl:bg-[110%] xl:dark:bg-project_bg_dark xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
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
