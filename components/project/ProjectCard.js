"use client";
import Image from "next/image";
import Link from "next/link";

import { FaRegFileCode } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Tooltip } from "react-tooltip";

import projectImg_1 from "../../public/project/project1.png";
import projectImg_2 from "../../public/project/project2.png";
import projectImg_3 from "../../public/project/project3.png";
import projectImg_4 from "../../public/project/project4.png";

const projectData = [
  {
    name: "N-Fabrion company website",
    image: projectImg_1,
    liveLink: "https://nfabrion-company.onrender.com/",
    repoLink: "https://github.com/ntp37/nfabrion-company-web",
  },
  {
    name: "Employee management",
    image: projectImg_2,
    liveLink: "https://ntp37-crud-hr-management-react.vercel.app/",
    repoLink: "https://github.com/ntp37/CRUD-HR_Management-React",
  },
  {
    name: "Countries in the World",
    image: projectImg_3,
    liveLink: "https://ntp37-rest-countries-api-next-js.vercel.app/",
    repoLink: "https://github.com/ntp37/REST-Countries-app-API-Next.js",
  },
  {
    name: "Task management (To-do List)",
    image: projectImg_4,
    liveLink: "https://ntp37-todo-list-react.netlify.app/",
    repoLink: "https://github.com/ntp37/TodoList-React_ntp37",
  },
];

export default function ProjectCard() {
  return (
    <>
      <IconContext.Provider value={{ className: "text-xl" }}>
        {projectData.map((project, index) => (
          <div
            key={`project-${index}`}
            className="project-card max-w-sm flex flex-col gap-6 justify-center items-center bg-slate-700 rounded-lg"
          >
            <div className="relative hover:[&>*:last-child]:opacity-100">
              <Image
                src={project.image}
                alt={project.name}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <div
                className={`btn-box-hover w-full h-full flex opacity-0 transition-opacity duration-500 absolute top-0 right-0 justify-end bg-[#000000b3]`}
                style={{ borderRadius: "8px 8px 0 0" }}
              >
                <div className="btn-group flex flex-col gap-4 mr-3 mt-3">
                  <Link href={project.liveLink} target="_blank">
                    <button
                      id="live-site-btn"
                      className="bg-blue-500 hover:bg-indigo-500 rounded-md w-10 h-10 shadow-md duration-300 hover:scale-110 ease-in-out"
                    >
                      <div className="flex items-center justify-center">
                        <FaDesktop />
                      </div>
                    </button>
                    <Tooltip
                      anchorSelect="#live-site-btn"
                      content="Live site"
                      place="left-start"
                      border="1px solid #6366f1"
                    />
                  </Link>
                  <Link href={project.repoLink} target="_blank">
                    <button
                      id="code-repo-btn"
                      className="bg-red-500 hover:bg-rose-500 rounded-md w-10 h-10 shadow-md duration-300 hover:scale-110 ease-in-out"
                    >
                      <div className="flex items-center justify-center">
                        <FaRegFileCode />
                      </div>
                    </button>
                    <Tooltip
                      anchorSelect="#code-repo-btn"
                      content="GitHub repository"
                      place="left-start"
                      border="1px solid #f43f5e"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-name text-lg sm:text-xl font-medium mb-4">
              <p>{project.name}</p>
            </div>
          </div>
        ))}
      </IconContext.Provider>
    </>
  );
}