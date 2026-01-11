import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Ticket,
  Twitter,
  X,
} from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
      <div className="w-full">
        <p className="text-3xl text-slate-800 font-semibold">Modave</p>
        <p className="text-md text-slate-600 py-2">
          549 Oak St.Crystal Lake, IL 60014
        </p>
        <Link
          href="/contact"
          className="flex items-center gap-1.5 mt-4 text-md font-semibold"
        >
          GET DIRECTION{" "}
          <span>
            <ArrowUpRight className="size-4" />
          </span>
        </Link>

        <div className="text-sm">
          <div className="flex items-center gap-3 py-4">
            <Mail className="size-4" />
            <p>gyakubu14@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <Phone className="size-4" />
            <p>08030420079</p>
          </div>
        </div>
        <div className="w-full py-4 flex items-center gap-3">
          <span className="flex items-center justify-center p-1 rounded-full border border-black hover:bg-black size-10 text-black hover:text-white">
            <Facebook className="size-5" />
          </span>
          <span className="flex items-center justify-center p-1 rounded-full border border-black hover:bg-black size-10 text-black hover:text-white">
            <Twitter className="size-5" />
          </span>
          <span className="flex items-center justify-center p-1 rounded-full border border-black hover:bg-black size-10 text-black hover:text-white">
            <Instagram className="size-5" />
          </span>
          <span className="flex items-center justify-center p-1 rounded-full border border-black hover:bg-black size-10 text-black hover:text-white">
            <Ticket className="size-5" />
          </span>
          <span className="flex items-center justify-center p-1 rounded-full border border-black hover:bg-black size-10 text-black hover:text-white">
            <X className="size-5" />
          </span>
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center lg:justify-center gap-14">
          <div>
            <p className="text-md font-semibold text-slate-800 mb-4">
              Information
            </p>
            <div className="flex flex-col gap-2 justify-center">
              {informationLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="text-slate-700 text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-md font-semibold text-slate-800 mb-4">
              Information
            </p>
            <div className="flex flex-col gap-2 sjustify-center">
              {informationLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="text-slate-700 text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <p className="text-md font-semibold text-slate-800 mb-4">Information</p>
        <p className="text-slate-600 text-sm">
          Sign up for our newsletter and get 10% off your first purchase
        </p>
        <div className="w-full py-3">
          <div className="w-full border border-slate-800 rounded-full flex items-center justify-center p-0.5">
            <input
              type="text"
              className="w-full px-3 outline-none"
              placeholder="Enter your email"
            />
            <span className="bg-black flex items-center justify-center rounded-full p-2">
              <ArrowUpRight className="size-8 text-white" />
            </span>
          </div>
          <p className="text-sm text-slate-600 py-2">
            By clicking subcribe, you agree to the{" "}
            <Link href="#" className="font-semibold underline text-slate-800">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="font-semibold underline text-slate-800">
              Privacy Policy
            </Link>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const informationLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Our Story",
    href: "/#",
  },
  {
    title: "Size Guide",
    href: "/#",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
  {
    title: "Career",
    href: "/#",
  },
  {
    title: "My Account",
    href: "/my-account",
  },
];
