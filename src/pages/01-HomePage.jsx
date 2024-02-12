import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";

export default function HomePage() {
  return (
    <>
      <header>
        <NavbarComp></NavbarComp>
      </header>
      <main className="bg-dark-subtle">
        <section id="about" className="container w-100">
          <div className="d-flex flex-column justify-content-center align-items-center text-center p-4">
            <div>
              <h2>MavidevApp</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas fugit, itaque ipsam exercitationem modi reprehenderit
                nisi cupiditate eaque maiores delectus minima error illo
                explicabo libero eligendi ex magni blanditiis quibusdam!
              </p>
              <h3>Şehir Database Hizmeti</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas fugit, itaque ipsam exercitationem modi reprehenderit
                nisi cupiditate eaque maiores delectus minima error illo
                explicabo libero eligendi ex magni blanditiis quibusdam!
              </p>
            </div>

            <div>
              <h3>Vizyonumuz</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas fugit, itaque ipsam exercitationem modi reprehenderit
                nisi cupiditate eaque maiores delectus minima error illo
                explicabo libero eligendi ex magni blanditiis quibusdam!Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                fugit, itaque ipsam exercitationem modi reprehenderit nisi
                cupiditate eaque maiores delectus minima error illo explicabo
                libero eligendi ex magni blanditiis quibusdam!
              </p>
            </div>

            <div>
              <h3>Değerlerimiz</h3>
              <ul className="list-unstyled">
                <li>
                  <b>İnsan Odaklılık:</b> Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Incidunt velit totam odio,
                  inventore dolores nostrum rerum. Recusandae voluptatem quod
                  doloremque omnis quas? Doloribus possimus aperiam provident
                  necessitatibus repudiandae quae! Laborum!
                </li>
                <li>
                  <b>İnovasyon:</b> Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Incidunt velit totam odio, inventore dolores
                  nostrum rerum.
                </li>
                <li>
                  <b>İşbirliği:</b> Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Incidunt velit totam odio, inventore dolores
                  nostrum rerum.
                </li>
                <li>
                  <b>Şeffaflık ve Güvenilirlik:</b> Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Incidunt velit totam odio,
                  inventore dolores nostrum rerum. Recusandae voluptatem quod
                  doloremque omnis quas?
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt velit totam odio, inventore dolores nostrum rerum.
                Recusandae voluptatem quod doloremque omnis quas? Doloribus
                possimus aperiam provident necessitatibus repudiandae quae!
                Laborum!
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterComp></FooterComp>
    </>
  );
}
