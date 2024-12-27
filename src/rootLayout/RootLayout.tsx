import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default RootLayout;
