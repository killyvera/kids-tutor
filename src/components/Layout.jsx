import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";

const Layout = ({ children, allProducts, total }) => {
  return (
    <div>
      <MyNavBar allProducts={allProducts} total={total} />
      <div className="" >
      {children}
      </div>
      <MyFooter />
    </div>
  );
};

export default Layout;
