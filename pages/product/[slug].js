import React from "react";
import { useRouter } from "next/router";
import data from "../api/database/data/data";

import Layout from "../components/Layout";
import NextLink from "next/link";
import Image from "next/image";

const SingleProduct = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const product = data.products.find((item) => item.slug === slug);
  if (!product) {
    return <h3>Product Not Found</h3>;
  }
  return (
    <>
      <Layout title={product.name}>
        <NextLink href="/">Back to home</NextLink>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
              <Image
                className=""
                src={product.image}
                alt={product.name}
                height={640}
                width={640}
                layout="responsive"
              ></Image>
            </div>
            <div className="col-md-6">
              <h5>Category: {product.category}</h5>
              <h2 className="py-3">{product.name}</h2>
              <h2 className="">Brand: {product.brand} </h2>
              <h2 className="">Brand: {product.countInStock > 0 ? "In Stock" : "Unavailable"} </h2>
              <h2 className="py-3">Ratings: {product.rating}</h2>
              <h2 className="">Price: {product.price}</h2>
              <p>{product.desc}</p>
              <button className="product-btn">Add To Cart</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SingleProduct;
