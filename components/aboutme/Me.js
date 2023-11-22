import Image from "next/image";
import meImg from "../../public/me.jpg"

export default function Me() {
  return (
    <>
      <div className="text-2xl sm:text-4xl font-medium">
        <h1>Let&apos;s get to know me</h1>
      </div>
      <div className="max-w-full lg:max-w-6xl rounded-xl flex flex-col lg:flex-row p-3 md:p-6 lg:p-10 lg:gap-6 mt-8 items-center bg-slate-500 shadow-lg">
        <div className="max-w-xs h-auto lg:max-w-sm p-2 lg:p-0 my-4 lg:my-0 flex">
          <Image
            src={meImg}
            alt="my image"
            sizes="100vw"
            // width={350}
            // style={{ borderRadius: "12px" }}
            style={{ borderRadius: "12px", width: '100%', height: 'auto' }}
          />
        </div>
        <div className="introduce-myself">
          <h3 className="text-center font-medium text-xl sm:text-3xl mb-3">I&apos;m Nithipan Promsri</h3>
          <p className="text-base leading-loose sm:leading-8 sm:text-lg p-2 sm:p-1 indent-5 sm:indent-8">
            2 years experienced in technologies with Electronics and Software. I
            have interest in Website and Web Application development. So, I
            enjoy to learning relevant skills and always learn new things to be
            a great developer. So, I had a strong desire to career as a web
            developer.
          </p>
        </div>
      </div>
    </>
  );
}