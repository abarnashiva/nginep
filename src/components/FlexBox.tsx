import React from "react";

interface FlexBoxProps {
  children: React.ReactNode;
  normal?: boolean;
  footer?: boolean;
  logo?: boolean;
  customClass?: string;
}

export default function FlexBox({
  children,
  normal,
  footer,
  logo,
  customClass,
}: FlexBoxProps) {
  const defaultFlex = normal
    ? "flex flex-wrap"
    : footer
      ? "flex flex-wrap justify-start lg:flex-nowrap xl:justify-around md:gap-12 lg:gap-10 gap-14"
      : logo
        ? "my-auto flex justify-start py-6 lg:pt-0 mx-auto lg:mx-0"
        : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center";

  return <div className={` ${customClass} ${defaultFlex}`}>{children}</div>;
}