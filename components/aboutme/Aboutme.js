import Me from "./Me";
import Skills from "./Skills";

export default function Aboutme() {
  return (
    <div className="snap-start p-3 sm:p-10" id="about-me">
      <div className="container mx-auto">
        <div className="know-me flex flex-col justify-center items-center mt-4 sm:mt-0">
            <Me />
        </div>
        <div className="techSkills mt-16 sm:mt-20">
            <Skills />
        </div>
      </div>
    </div>
  );
}