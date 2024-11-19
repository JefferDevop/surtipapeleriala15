import styles from "./AboutUs.module.scss";

export function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Nosotros</h1>
        <p>
          Bienvenidos a Surtipapeleria la 15, la papelería líder en el centro de
          la ciudad de Cali. Nos enorgullece ser una empresa con más de 2 años
          de experiencia en la venta de artículos de papelería y oficina,
          ofreciendo una amplia gama de productos y servicios de calidad a
          precios competitivos. En nuestra papelería encontrarás todo lo que
          necesitas para tus proyectos escolares, laborales y personales, desde
          artículos básicos como cuadernos, lápices y carpetas, hasta productos
          especializados como material de dibujo, papelería fina y suministros
          de oficina, para ayudarte a llevar tus proyectos al siguiente nivel.
          En Surtipapeleria la 15 nos esforzamos por ofrecer una experiencia de
          compra excepcional a nuestros clientes, brindando un servicio al
          cliente personalizado y amable en un ambiente acogedor y amigable. Nos
          enorgullece mantener una relación cercana y duradera con nuestros
          clientes, proveedores y colaboradores, y ser un lugar de trabajo donde
          se fomente el desarrollo personal y profesional de nuestro equipo.
          Gracias por elegir Surtipapeleria la 15 como tu papelería de
          confianza. Esperamos servirte pronto y satisfacer todas tus
          necesidades de papelería y oficina.
        </p>
      </div>

      <div className={styles.mision}>
        <h5>Misión</h5>
        <p>
          En Surtipapeleria la 15, nos comprometemos a satisfacer las
          necesidades de nuestros clientes ofreciendo productos y servicios de
          alta calidad a precios competitivos. Nos esforzamos por ser una
          empresa líder en Cali, proporcionando una experiencia de compra
          excepcional y un servicio al cliente excepcional en un ambiente
          acogedor y amigable. Nos esforzamos por mantener una relación cercana
          y duradera con nuestros clientes, proveedores y colaboradores, y ser
          un lugar de trabajo donde se fomente el desarrollo personal y
          profesional de nuestro equipo.
        </p>
      </div>

      <div className={styles.vision}>
        <h5>Visión</h5>
        <p>
          Ser la papelería líder en la ciudad de Cali, ofreciendo una amplia
          gama de productos y servicios de calidad a precios competitivos,
          brindando una experiencia excepcional al cliente.
        </p>
      </div>

      <div className={styles.phone}>
        <h5>Líneas de atención</h5>
        <ul>
          <li>(602) 881 08 92</li>
          <li>(+57) 312 6840 386</li>
          <li>(+57) 314 5721 972</li>       
        </ul>
      </div>

      <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>Cll 15 # 9-64, Centro de Cali</p>
      </div>
    </div>
  );
}
