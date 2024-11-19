import {
  Advertisement,
  Footer,
  FooterApp,
  Promotion,
  NotFound,
} from "@/components";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import React from "react";

export default function OfertPage(props) {
  const { products } = props;
  const hasProduct = size(products) > 0;

  return (
    <>
      <BasicLayout>
        <Advertisement />
      </BasicLayout>

      {hasProduct ? (
        <Promotion products={products} />
      ) : (
        <NotFound
          title={"Uppss... en este momento no hay productos en oferta"}
        />
      )}

      <FooterApp />
      <Footer />
    </>
  );
}
