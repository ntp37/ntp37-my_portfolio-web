import ContactBox from "./ContactBox";

export default function Contact() {
  return (
    <div className="snap-start p-4 md:p-10" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="flex text-2xl sm:text-4xl md:mt-0 mt-4 font-medium items-center justify-center">
            <h1>Contact me</h1>
          </div>
          <ContactBox />
        </div>
      </div>
    </div>
  );
}
