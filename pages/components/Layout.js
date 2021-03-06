import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

// let navStyle = {
//   textDecoration: "underline",
//   color: "#9932cc",
//   border: "0px solid black",
// };

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - E-commerce` : "E-commerce"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {/* navbar   */}
      <Header />

      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
