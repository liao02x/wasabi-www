import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main">{children}</div>
    </>
  );
};

export default Layout;
