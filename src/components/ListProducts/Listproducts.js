import React, { useState } from "react";
import { Button, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";
import { WhatsApp } from "../WhatsApp";
import { BsPencilSquare } from "react-icons/bs";
import AddEditProductForm from "../Common/ModalBasic/AddEditProductForm";
import { useAuth } from "@/hooks/useAuth";

import styles from "./ListProduts.module.scss";
import Link from "next/link";
import { ModalBasic } from "../Common";

export function Listproducts(props) {
  const { products, title } = props;
  const { user } = useAuth();

  return (
    <>
      <div className={styles.category}>
        <h2>
          {title}{" "}
          {user?.is_staff && (
            <ModalBasic
              titleButton={"Nuevo Producto"}
              title="Nuevo Producto"
              children={<AddEditProductForm />}
            />
          )}
        </h2>
      </div>

      <div className={styles.list}>
        {map(products, (product, index) => (
          <div key={index} className={styles.list__product}>
            <div>
              <Link href={`/${product.productData.slug}`}>
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + product.productData.images}
                />
              </Link>
              <div className={styles.product}>
                <CardTitle className={styles.title}>
                  <h5>{product.productData.name_extend}</h5>
                </CardTitle>

                <div className={styles.title}>
                  
                  <CardSubtitle>
                    {product.productData.price1 !== null && (
                      <h5> $ {product.productData.price1}</h5>
                    )}
                  </CardSubtitle>

                  <div>
                    <WhatsApp
                      phoneNumber="+573145741972"
                      message={
                        BASE_NAME +
                        product.productData.images +
                        " " +
                        product.productData.name_extend +
                        " " +
                        "Referencia: " +
                        product.productData.ref
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {user?.is_staff && (
              <ModalBasic
                data={product.productData.name_extend}
                iconButton={true}
                children={<AddEditProductForm />}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
