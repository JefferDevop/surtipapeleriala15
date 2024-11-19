import React, { useState } from "react";
import { CardImg, CardTitle } from "reactstrap";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";
import { ModalBasic } from "../Common";
import { FormCategory } from "./FormCategory";
import { useAuth } from "@/hooks/useAuth";

import styles from "./ListCategories.module.scss";
import Link from "next/link";

export function ListCategories(props) {
  const { categories, title } = props;
  const [showModal, setShowModal] = useState(false);

  const { user } = useAuth();

  // const goToCategory = (id) => {
  //   console.log(id);
  // };

  const openCloseModal = () => setShowModal((prev) => !prev);

  return (
    <div>
      <div className={styles.content}>
        <h1>CATEGORÍAS</h1>

        {user?.is_staff && (
          <>
            <div className={styles.category}>
              <h2>
                {title}{" "}
                <ModalBasic
                  titleButton={"Nueva Categoría"}
                  title="Nueva Categoría"
                  children={<FormCategory onClose={openCloseModal} />}
                  showModal={showModal}
                />
              </h2>
            </div>
          </>
        )}

        <div className={styles.list}>
          {map(categories, (category) => (
            <div key={category.id}>
              <Link
                href={`/products/${category.slug}`}
                //  className={styles.skeleton}
              >
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + category.image}
                  className={styles.skeleton}
                />

                <div className={styles.category}>
                  <CardTitle className={styles.title}>
                    <h2>{category.name}</h2>
                    <h6>ver más</h6>
                  </CardTitle>
                </div>
              </Link>

              {user?.is_staff && (
                <ModalBasic
                  data={"Categoría"}
                  iconButton={true}
                  children={
                    <FormCategory
                      onClose={openCloseModal}
                      data={category.name}
                    />
                  }
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
