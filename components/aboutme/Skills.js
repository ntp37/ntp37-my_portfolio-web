import TechIcons from "./TechIcons";

export default function Skills() {
  return (
    <>
      <div className="flex text-2xl sm:text-4xl font-medium items-center justify-center">
        <h1>Technical Skills</h1>
      </div>
      <div className="w-full rounded-xl flex justify-center p-3 sm:p-10 mt-4 items-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-20">
          <TechIcons />
        </div>
      </div>
    </>
  );
}
