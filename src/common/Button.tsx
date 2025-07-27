const HeaderButton: React.FC<{
  text: string;
  outline?: boolean;
  onClick?: () => void;
}> = (props) => {
  const baseStyles = `group flex items-center shadow-sm px-8 py-2 transition-all rounded-2xl `;
  const filledStyles = `bg-amber-400 hover:bg-amber-500 text-white`;
  const outlinedStyles = ` hover:border-primary-200 text-primary`;
  const btnStyles = `${baseStyles} ${props.outline ? outlinedStyles : filledStyles
    }`;
  return (
    <button className={`${btnStyles} text-xl  md:m-0 `} onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  );
};

export { HeaderButton };