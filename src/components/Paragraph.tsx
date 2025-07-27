import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  large?: boolean;
  whiteText?: boolean;
  footerText?: boolean;
  contact?: boolean;
  swiper?: boolean;
  swiperText?: boolean;
  copyText?: boolean;
}

export default function Paragraph({
  children,
  large,
  copyText
}: ParagraphProps) {
  const words = React.Children.toArray(children).join(" ").split(" ");
  const defaultText = large
    ? "text-lg pb-6"
    : copyText
      ? "text-white text-center py-2"
      : "text-gray-700 py-4";

  return (
    <p className={`${defaultText}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`${word === "PRAXIO" ? "font-semibold" : ""}`}
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
}