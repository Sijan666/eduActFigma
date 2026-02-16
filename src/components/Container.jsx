
const Container = ({ children, className }) => {
  return (
    <div className={`lg:max-w-330 max-w-[390px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
