import React, { useEffect } from "react";
import { Categories } from "@/api/category"; 
import { Products } from "@/api/products"; 
import { Listproducts } from "@/components";

export { default } from "./category";

export async function getServerSideProps(context) {
 
  const { query, params } = context;
  const { category } = params;

console.log(category);

  const categoryCtrl = new Categories();
  const responseCategory = await categoryCtrl.getBySlug(category)
  
 

  const productCtrl = new Products();
  const responseProduct = await productCtrl.getProductsByCategory(responseCategory.id)



  return {
    props: {
      category: responseCategory,
      products: responseProduct,
      // pagination: null,
    },
  };
}
