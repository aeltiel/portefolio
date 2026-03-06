import Button from "./Button";
function Reseaux() {
  return (
    <>
      <p className="presentation__reseaux">
        Retrouvez moi sur
        <a href="https://www.linkedin.com/in/ingrid-stemer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/aeltielnh/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://github.com/Aeltiel">
          <i className="fa-brands fa-github"></i>
        </a>
      </p>
      <section className="presentation__CV">
        <div className="presentation__CV--profil">
          <a
            href="/DataPdf/AssestFirst_profil.pdf"
            download="Profil-AssessFirst-IS.pdf"
          >
            <Button name={"Mon profil AssessFirst"} />
          </a>
          <p>
            Vous souhaitez connaitre mon potentiel pour travailler dans votre
            entreprise ? Je vous propose de jeter un oeil sur mon profil
            AssessFirst
          </p>
        </div>
        <div className="presentation__CV--profil">
          <a
            href="/DataPdf/CV_Software_Engineer_Ingrid_STEMER_2026.pdf"
            download="CV-Software_Engineer-Ingrid_STEMER.pdf"
          >
            <Button name={"Mon CV"} />
          </a>
          <p>N'hésitez pas à repartir avec un petit souvenir !</p>
        </div>
        <div className="presentation__CV--profil">
          <p>
            Et si vous souhaitez entrer directement en contact avec moi
            n'hésitez pas à m'écrire un mail{" "}
            <span>
              <a href="mailto:stemer.ingrid36@gmail.com">
                <i className="fa-solid fa-paper-plane"></i>
              </a>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
export default Reseaux;
