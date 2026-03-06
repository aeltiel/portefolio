import moi from "../Assets/moi.webp";
import Corbeau from "../Assets/Corbeau-sur-crâne-01.webp";
import NavBar from "../Layout/NavBar";
import NavBarMobile from "../Layout/NavBarMobile";
import Footer from "../Layout/Footer";
import Slider from "../Component/Slider";
import Button from "../Component/Button";
import Title from "../Component/Title";
import Reseaux from "../Component/Reseaux";
import Presentation from "../Component/Présentation";
import DiplomesDisplay from "../Component/DiplomesDisplay";
import Container from "../Component/Container";
import Book from "../Data/book.json";
import Quest from "../Data/quest.json";
import { Link } from "react-router-dom";
import { setInfos } from "../Reduxtore/InfoRedux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.info.infos);
  const [loading, setLoading] = useState(true);
  const dataQuest = Quest;

  useEffect(() => {
    let info = Book;
    dispatch(setInfos(info));
    setLoading(false);
  }, []);

  if (loading) {
    return <div></div>;
  } else {
    return (
      <>
        <NavBar />
        <NavBarMobile />
        <main className="homeContainer">
          <Title title={"Bienvenue dans mon portefolio !"} />

          <section className="presentation">
            <img className="presentation__img" src={moi} alt="Ingrid Stemer" />
            <Presentation
              title={
                "Ingrid STEMER / Sotftware Engineer"
              }
              description={data[0].description}
            />
          </section>

          <nav className="home__nav">
            <p>Accédez à ce qui vous intéresse en un clin d'oeil : </p>
            <ul className="home__nav--ul">
              <li>
                <a href="#project">Projets</a>
              </li>
              <li>
                <a href="#diplome">Diplômes</a>
              </li>
              <li>
                <a href="#loisirs">Loisirs</a>
              </li>
            </ul>
          </nav>
          <Reseaux />

          <div className="home__info">
            <div className="home__info__text">
              <p className="home__info__text--text">
                Avant de continuer, j'aimerais vous donner quelques précisions
                sur le fonctionnement de ce portefolio. En effet, l'onglet
                Bibliothèque vous transportera dans une version alternative de
                mon portefolio, je vous laisse, bien sur, le soin de le
                découvrir par vous-même. Le reste du portefolio est construit de
                manière tout à fait classique.
              </p>
              <p className="home__info__text--text--1">Bonne visite!</p>
            </div>
            <img
              className="home__info--img"
              src={Corbeau}
              alt="Dessin d'un corbeau sur un crane"
            />
          </div>

          <section className="home__project" id="project">
            <Slider />
            <div className="home__project__container">
              <h2 className="home__project--title presentation__title">
                Mes projets !
              </h2>
              <p className=" home__project--text">
                Vous souhaitez voir de quoi je suis capable ? Regardez mes
                projets !
              </p>
              <div className="home__project__btn">
                <Link to="/Projects">
                  <Button name={"Mes Projets"} />
                </Link>
              </div>
            </div>
            <div className="home__activities">
              <h3 className="home__activities__title">
                Mes projets et activités du moment !
              </h3>
              {dataQuest.map((activity) => {
                return (
                  <div className="home__activities--text" key={activity.id}>
                    <p className="home__activities--text-title">
                      {activity.title}
                    </p>
                    <p>{activity.activity}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="home__diplome" id="diplome">
            <Presentation title={data[2].title} />
            {data[2].formations.map((element) => (
              <DiplomesDisplay
                key={element.id}
                image={element.image}
                title={element.title}
                ecole={element.ecole}
                date={element.date}
              />
            ))}
          </section>

          <section className="home__loisirs" id="loisirs">
            <Presentation
              title={data[3].title}
              description={data[3].description}
            />
            {data[3].Loisirs.map((element) => (
              <Container
                key={element.id}
                id={element.id}
                title={element.title}
                description={element.description}
                image={element.image}
              />
            ))}
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
