import Navbar from "./Navbar";
import Image from "next/image";
import backgroundImg from "../public/coding-high.jpg";
import styles from "../Overlay.module.css";
// import dynamic from "next/dynamic";

// const NavbarNoSSR = dynamic(() => import('./Navbar.js'), {ssr: false})

export default function Header() {
  return (
    <div className={`w-full h-96 sm:h-screen snap-start ${styles.overlay}`}>
      <div className="absolute p-3 flex flex-col text-center gap-6 font-medium w-full z-50 top-1/2 text-slate-50">
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          Welcome to&nbsp;<span className="text-amber-500">Nithipan&apos;s</span>&nbsp;portfolio
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Let&apos;s to know me better with this website.
        </p>
      </div>
      <Navbar />
      <Image
        src={backgroundImg}
        alt="Header background"
        style={{ objectFit: "cover" }}
        sizes="100vw"
        placeholder="blur"
        fill
      />
    </div>
  );
}
