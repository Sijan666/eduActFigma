
const Container = ({ children, className }) => {
  return (
    <div className={`lg:w-330 lg:px-0 px-3 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
