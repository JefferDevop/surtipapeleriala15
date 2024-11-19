import { Advertisement, Footer, AboutUs, FooterApp } from "@/components";
import { BasicLayout } from "../../layouts";

export default function AboutHome() {


  return (
    <>
      <BasicLayout>
        <Advertisement />
      </BasicLayout>

      <AboutUs />
      <FooterApp />
      <Footer />
    </>
  );
}
