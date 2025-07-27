import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FlexBox from "./components/FlexBox";
import FlexContent from "./components/FlexContent";
import Paragraph from "./components/Paragraph";
import SubHeading from "./components/SubHeading";

export default function Footer() {
  const [smallScreen, setSmallScreen] = useState(true);
  const currentYear = new Date().getFullYear();

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 900);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="bg-black">
      <div className="text-white py-8 container">
        {smallScreen && (
          <FlexBox logo>
            <div>
              <p className="font-bold text-2xl text-white pb-6">
                Nginep <span className="text-amber-400">Boss</span>
              </p>
              <FlexContent normal>website to find hotel recommendations at prices that suit your wishes</FlexContent>
              <div className="flex gap-4 pt-4">
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-4">
                  <FaFacebook size={30} />
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-4">
                  <FaInstagram size={30} />
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-4">
                  <FaTwitter size={30} />
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-4">
                  <FaLinkedin size={30} />
                </div>
              </div>
            </div>
          </FlexBox>
        )}
        <FlexBox footer>
          {!smallScreen && (
            // <FlexBox logo>
            <div>
              <p className="font-bold text-3xl text-white">
                Nginep <span className="text-amber-400">Boss</span>
              </p>
              <p className="py-6">website to find hotel recommendations at prices that suit your wishes</p>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-4">
                  <FaFacebook size={30} />
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-4">
                  <FaInstagram size={30} />
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-4">
                  <FaTwitter size={30} />
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-4">
                  <FaLinkedin size={30} />
                </div>
              </div>

            </div>

            // </FlexBox>
          )}

          <div>
            <SubHeading whiteText>Company</SubHeading>
            <FlexContent normal>
              <a
                href="/"
                className="hover:text-amber-400"
              >
                Home
              </a>
              <a
                href="/service"
                className="hover:text-amber-400"
              >
                Service
              </a>
              <a
                href="/about"
                className="hover:text-amber-400"
              >
                About Us
              </a>
              <a href="/destination" className="hover:text-amber-400">
                Destination
              </a>
            </FlexContent>
          </div>
          <div>
            <SubHeading whiteText>Contact</SubHeading>
            <FlexContent normal>
              <p
              >
                (021) 02831
              </p>
              <p
              >
                www.Example.com
              </p>
              <p
              >
                Example@gmail.com
              </p>
              <p>
                Jl Artadinata
              </p>
            </FlexContent>
          </div>
          <div>
            <SubHeading whiteText>Support</SubHeading>
            <FlexContent normal>
              <a
                href="/customer"
                className="hover:text-amber-400"
              >
                Customer Service
              </a>
              <a
                href="/booking"
                className="hover:text-amber-400"
              >
                Booking Hotel
              </a>
            </FlexContent>
          </div>
        </FlexBox>
      </div>
      <hr className="text-white container font-bold" />
      <div className="flex lg:flex-nowrap flex-wrap justify-between container">
        <Paragraph copyText>Copyright © {currentYear} Hotel Booking. All Right Reserved</Paragraph>
        <Paragraph copyText>Use Terms & Condition | Privacy Policy</Paragraph>
      </div>
    </footer>
  );
}