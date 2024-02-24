import DevImg from "../common/DevImg";
import Image from "@/node_modules/next/image";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";


interface InfoItem {
  icon: JSX.Element;
  text: string;
}

interface QualificationItem {
  university?: string;
  qualification?: string;
  years: string;
  company?: string;
  role?: string;
}

interface QualificationData {
  title: string;
  data: QualificationItem[];
}

interface SkillItem {
  name?: string;
  imgPath?: string;
}

interface SkillData {
  title: string;
  data: SkillItem[];
}


const infoData: InfoItem[] = [
  {
    icon: <User2 size={20} />,
    text: 'Chantelle Loh Yi Wei',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'chantelle.lyw@gmail.com',
  },
];

const qualificationData: QualificationData[] = [
  {
    title: "education",
    data: [
      {
        university: "Monash University",
        qualification: "Bachelor of Computer Science",
        years: "Oct 2019 - Oct 2022",
      },
      {
        university: "Monash University",
        qualification: "Bachelor of Computer Science (Honours)",
        years: "Feb 2023 - Feb 2024",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "Jeffrey Cheah School of Medicine & Health Sciences",
        role: "Project Manager",
        years: "Sept 2021 - Sept 2022",
      },
      {
        company: "Dah Reply AI",
        role: "AI Developer",
        years: "Nov 2021 - Feb 2022",
      },
      {
        company: "Ventionex International",
        role: "Full Stack Developer",
        years: "Dev 2023 - Jun 2024",
      },
    ],
  },
];

const skillData: SkillData[] = [
  {
    title: "skills",
    data: [
      {
        name: "ReactJS",
      },
      {
        name: "NodeJS, Flask, Django, SpringBoot",
      },
      {
        name: "MongoDB, PostgreSQL, Flyway",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
    ],
  },
];

const About : React.FC = () => {
  const getData = <T, >(arr: T[], title: string): T | undefined => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <section className="xl:h-[100vh] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}

          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>

          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w -[162px]xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Content for each tabs */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal content */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Connecting AI Research with Practicality
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0 ">
                      As a fresh graduate with significant industrial exposure,
                      my academic journey through a final year project and
                      honors thesis research in AI ignited a passion for
                      bridging the gap between theoretical models and their
                      practical applications. This drives my eagerness to make a
                      real difference through practical AI solutions.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Proficiency</div>
                      <div className="border-b border-border"></div>
                      <div>
                        English, Chinese (Mandarin), Bahasa Melayu (Malay)
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Learning Journey
                    </h3>
                    {/* exp + education Wrapper*/}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* exp */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            
                            {getData(qualificationData, "experience")?.title}
                          </h4>
                        </div>
                        {/* exp-list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience")?.data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]  group-hover:h-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foregorund mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education")?.title}
                          </h4>
                        </div>
                        {/* education-list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education")?.data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]  group-hover:h-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foregorund mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">
                      Familiar Tools, Language & Frameworks
                    </h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills")?.data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gop-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools")?.data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath as string}
                                width={48}
                                height={48}
                                alt=""
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
