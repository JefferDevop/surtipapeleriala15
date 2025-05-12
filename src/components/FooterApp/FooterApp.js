import { WhatsApp } from "../WhatsApp";

import styles from "./FooterApp.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";
import { Spinner } from "reactstrap";
import { BtnLink } from "../Common";

export function FooterApp() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className={styles.btnWhatsapp}>
      <div className={styles.paneluser}>
        <BtnLink link={"/"} title={"HOME"} logo={<AiOutlineHome size={20} />} />
        <BtnLink
          link={"/featured"}
          title={"EXCLUSIVO"}
          logo={<MdOutlineCategory size={20} />}
        />

        <WhatsApp
          phoneNumber="+573126840386"
          message="Hola, me gustaría obtener más información sobre sus productos."
        />
        <BtnLink
          link={"/ofert"}
          title={"OFERTAS"}
          logo={<MdOutlineLocalOffer size={20} />}
        />
        <BtnLink
          link={
            "https://surtipapeleriala15.conexion.bar/admin-dashboard/"
          }
          title={"ADMIN"}
          logo={<CiUser size={20} />}
        />
      </div>
    </div>
  );
}
