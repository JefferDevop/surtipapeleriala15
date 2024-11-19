import {
  Advertisement,
  Footer,
  FooterApp,
  Exclusive,
  NotFound,
} from "@/components";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import React from "react";

export default function FeaturedPage(props) {
  const { products } = props;
  const hasProduct = size(products) > 0;

  return (
    <>
      <BasicLayout>
        <Advertisement />
      </BasicLayout>

      {hasProduct ? (
        <Exclusive products={products} />
      ) : (
        <NotFound
          title={"Uppss... en este momento no hay productos Destacados"}
        />
      )}

      <FooterApp />
      <Footer />
    </>
  );
}
