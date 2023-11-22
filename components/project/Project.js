import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className="snap-start p-3 sm:p-10" id="our-project">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="flex text-2xl sm:text-4xl mt-4 md:mt-0 font-medium items-center justify-center">
            <h1>Our Projects</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-6 md:mt-12 mb-7 md:mb-0">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}
