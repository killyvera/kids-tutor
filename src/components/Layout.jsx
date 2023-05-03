import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";

const Layout = ({ children }) => {
  return (
    <>
      <MyNavBar />
      <div className="" >
      {children}
      </div>
      <MyFooter />
    </>
  );
};

export default Layout;
