import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";

const Layout = ({ children }) => {
  return (
    <div>
      <MyNavBar />
      {children}
      <MyFooter />
    </div>
  );
};

export default Layout;
