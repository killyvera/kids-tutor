import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";

const Layout = ({ children, allProducts, total }) => {
  return (
    <>
      <MyNavBar allProducts={allProducts} total={total} />
      <div className="" >
      {children}
      </div>
      <MyFooter />
    </>
  );
};

export default Layout;
