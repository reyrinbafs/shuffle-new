import Link from "next/link";
import Image from "next/image";


const Nav = () => {
  return (
    <nav className="w-full flex justify-center mb-16 p-3 bg-slate-400">
      <Link href="/" className="flex">
        <Image
          src="/assests/images/icon-text-logo.svg"
          alt="logo"
          width={140}
          height={140}
          className="object-contain"
        ></Image>
      </Link>


      {/* Desktop Navigation */}
    </nav>
  );
};

export default Nav;
