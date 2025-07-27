import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { HeaderButton } from "./common/Button";

function Header() {
  const [click, setClick] = useState(false);
  const [smallScreen, setSmallScreen] = useState<boolean>(true);
  const isClient = typeof window === `object`;

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 950);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [isClient]);

  const navigation = [
    { url: "/", label: "Home" },
    { label: "Service", url: "/service" },
    { label: "About Us", url: "/about" },
    { label: "Destination", url: "/destination" },
  ];

  return (
    <div className="w-full container">
      <header
        className={`scroll-smooth ${!smallScreen
          ? "flex"
          : smallScreen && !click
            ? "flex w-full"
            : "fixed w-full h-full overflow-auto bg-neutral-50 z-10"
          } justify-between lg:py-2.5 py-4 text-neutral-900`}
      >
        <div className={`flex ${smallScreen && `w-full`} justify-between`}>
          <a href="/">
            <p className="font-bold text-2xl">
              Nginep <span className="text-amber-400">Boss</span>
            </p>
          </a>
          {smallScreen && (
            <div
              className={`${smallScreen ? "block" : "hidden"
                } text-primary w-8 text-center cursor-pointer text-2xl font-medium rounded`}
              onClick={() => setClick(!click)}
            >
              {click ? <FaXmark className="-ml-10" /> : <FaBars />}
            </div>
          )}
        </div>

        <nav>
          <ul
            className={`font-semibold ${smallScreen && click
              ? `mt-4 flex pt-4 w-full h-auto inset-y-0 right-0 bg-neutral-50 z-50 flex-col overflow-auto text-base space-y-6`
              : smallScreen
                ? "hidden"
                : "flex items-center xl:space-x-11 space-x-4"
              }`}
          >
            {navigation.map((item, index) => (
              <li
                className="navList cursor-pointer hover:text-amber-500 px-3 text-lg transition-all"
                key={index}
              >
                {item.url ? (
                  <a href={item.url} onClick={() => setClick(false)}>
                    {item.label}
                  </a>
                ) : (
                  <p>{item.label}</p>
                )}
              </li>
            ))}
            {smallScreen && (
              <div>
                <HeaderButton text={"Get the App"} />
              </div>
            )}
          </ul>
        </nav>

        {!smallScreen && (
          <div>
            <HeaderButton text={"Get the App"} />
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
