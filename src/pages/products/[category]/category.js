import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import { Advertisement, Listproducts, Footer, NotFound, FooterApp } from "@/components";


export default function category(props) {
  const { products, category } = props;
  const hasProduct = size(products) > 0;




  return (
    <div>
      <BasicLayout>
        <Advertisement />
      </BasicLayout>
 
      {hasProduct ? <Listproducts products={products} title={category.name} /> : <NotFound title={"Upppss... No hay productos para mostrar en esta categoría"}/>}
      <FooterApp />
      <Footer />
    </div>
  );
}
