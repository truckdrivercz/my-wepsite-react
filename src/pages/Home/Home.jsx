import Animation from "../AnimationFrames/Animation";
import Menu from "../Menu/Menu";
import Flags_dark from "../Flag_dark/Flags_dark";
import './Home.css';
export default function Home() {
  document.title = 'VTC Hell Riders';
  return (
    <>
    <head>
      <link rel="shortcut icon" href="../Logos/Logvtc.gif" type="image/x-icon" />
    </head>
      <Flags_dark />
      <Menu/>
      <Animation />
      <div id="flexWrap">
        <div id="firstWrap">
          <div id="informations">
            <h1 className="title">Základní informace: </h1>
            <p>Zdravím všechny příznivce hry ETS 2. Tato firma byla založena uživatelem známým na Twitchi i v ETS2 jako LucianusShow.</p>
            <p>Ve firmě máme jak zkušené, tak i začínající řidiče.</p>
            <p>Jsme fajn parta lidí, která se nebojí jakékoliv výzvy.</p>
            <p>Každý měsíc se konají soutěže o DLC ETS 2 nebo jiné hry.</p>
            <p>Jezdíme převážně na závodní statistiku.</p>
            <p>Více informací na našem Discordu.</p>
          </div>
        </div>
        <div id="secondWrap">
          <div id="achievements">
            <h1 className="title">Úspěchy</h1>
            <p>1. místo na světě: březen 2023</p>
            <p>2. místo na světě: červen 2023</p>
            <p>3. místo na světě: červen 2022, říjen 2022, listopad 2023, únor 2024</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div>
            <h1 className="footerTitle"><a href="https://trucksbook.eu/company/133784"><span id="odkaz">VTC Hell Riders</span></a> | Eduard Orvoš | Ondřej Fíla</h1>
        </div>
    </footer>
    </>
  );
}
