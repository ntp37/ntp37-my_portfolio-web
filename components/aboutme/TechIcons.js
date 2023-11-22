import Image from "next/image";

import htmlIcon from "../../public/techIcons/html5-original.svg";
import cssIcon from "../../public/techIcons/css3-original.svg";
import javaScriptIcon from "../../public/techIcons/javascript-original.svg";
import typeScriptIcon from "../../public/techIcons/typescript-original.svg";
import bootstrapIcon from "../../public/techIcons/bootstrap-original.svg";
import tailwindIcon from "../../public/techIcons/tailwindcss-plain.svg";
import nodejsIcon from "../../public/techIcons/nodejs-original.svg";
import gitIcon from "../../public/techIcons/git-original.svg";
import reactIcon from "../../public/techIcons/react-original.svg";
import nextjsIcon from "../../public/techIcons/nextjs-original.svg";
import mysqlIcon from "../../public/techIcons/mysql-original-wordmark.svg";
import expressIcon from "../../public/techIcons/express-original-wordmark.svg";

const icons = [
  { name: "HTML",icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: javaScriptIcon },
  { name: "TypeScript", icon: typeScriptIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Node.js", icon: nodejsIcon  },
  { name: "Express.js", icon: expressIcon },
  { name: "Git", icon: gitIcon },
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "MySQL", icon: mysqlIcon },
];

export default function TechIcons() {
  return (
    <>
        {icons.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center p-2 sm:p-3 gap-4 text-base sm:text-xl font-medium">
                {/* <Image src={tech.icon} alt={`${tech.name}-icon`} width={width} height={height} /> */}
                <div className="w-14 h-14 sm:w-20 sm:h-20">
                  <Image src={tech.icon} alt={`${tech.name}-icon`} style={{width: "100%", height: "auto"}} />
                </div>
                <p className="text-center">{tech.name}</p>
            </div>
        ))}
    </>
  )
}
