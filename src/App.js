import search from "./search.svg";
import profile from "./profile.svg";
import bell from "./bell.svg";
import tv from "./tv.svg";
import ytLogo from "./youtube.svg";
import home from "./house.svg";
import shorts from "./srts.svg";
import plus from "./plus.svg";
import inscricoes from "./inscricoes.svg";
import library from "./biblioteca.svg";
import menu from "./menuHambuger.svg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <div className="logo"><img src={ytLogo} /></div>
          <nav className="menu">
            <ul>
              <li><img src={tv} /></li>
              <li><img src={bell} /></li>
              <li><img src={search} /></li>
              <li ><img src={profile} /></li>
            </ul>
         </nav>
      </header>
      <main>
         <div className="videoContainer">
            <div className="video"></div>
            <p className="infos">
              <img src={profile} className="profileV"/>
              <p className="canalInfos">
                <p>
                  <strong>Título do vídeo</strong>
                  <p>
                  Nome do Canal • Número de Views • Data
                  </p>
                </p>
                <img src={menu} className="menuV" />
              </p>
             </p>
            </div>
            <div className="videoContainer">
            <div className="video"></div>
            <p className="infos">
              <img src={profile} />
              <p className="canalInfos">
                <p>
                  <strong>Título do vídeo</strong>
                  <p className="canalInfoAdicionais">
                  Nome do Canal • Número de Views • Data
                  </p>
                </p>
                <img src={menu} />
              </p>
             </p>
            </div>
            <div className="videoContainer">
            <div className="video"></div>
            <p className="infos">
              <img src={profile} />
              <p className="canalInfos">
                <p>
                  <strong>Título do vídeo</strong>
                  <p className="canalInfoAdicionais">
                  Nome do Canal • Número de Views • Data
                  </p>
                </p>
                <img src={menu} />
              </p>
             </p>
            </div>
            <div className="videoContainer">
            <div className="video"></div>
            <p className="infos">
              <img src={profile} />
              <p className="canalInfos">
                <p>
                  <strong>Título do vídeo</strong>
                  <p className="canalInfoAdicionais">
                  Nome do Canal • Número de Views • Data
                  </p>
                </p>
                <img src={menu} />
              </p>
             </p>
            </div>
            <div className="videoContainer">
            <div className="video"></div>
            <p className="infos">
              <img src={profile} />
              <p className="canalInfos">
                <p>
                  <strong>Título do vídeo</strong>
                  <p className="canalInfoAdicionais">
                  Nome do Canal • Número de Views • Data
                  </p>
                </p>
                <img src={menu} />
              </p>
             </p>
            </div>
            <div className="videoContainer">
            <div className="video"></div>
            <p className="infos">
              <img src={profile} />
              <p className="canalInfos">
                <p>
                  <strong>Título do vídeo</strong>
                  <p className="canalInfoAdicionais">
                  Nome do Canal • Número de Views • Data
                  </p>
                </p>
                <img src={menu} />
              </p>
             </p>
            </div>
            <div className="videoContainer">
            <div className="video"></div>
            <p className="infos">
              <img src={profile} />
              <p className="canalInfos">
                <p>
                  <strong>Título do vídeo</strong>
                  <p className="canalInfoAdicionais">
                  Nome do Canal • Número de Views • Data
                  </p>
                </p>
                <img src={menu} />
              </p>
             </p>
            </div>
            <div className="videoContainer">
            <div className="video"></div>
            <p className="infos">
              <img src={profile} />
              <p className="canalInfos">
                <p>
                  <strong>Título do vídeo</strong>
                  <p className="canalInfoAdicionais">
                  Nome do Canal • Número de Views • Data
                  </p>
                </p>
                <img src={menu} />
              </p>
             </p>
            </div>
            <div className="videoContainer">
            <div className="video"></div>
            <p className="infos">
              <img src={profile} />
              <p className="canalInfos">
                <p>
                  <strong>Título do vídeo</strong>
                  <p className="canalInfoAdicionais">
                  Nome do Canal • Número de Views • Data
                  </p>
                </p>
                <img src={menu} />
              </p>
             </p>
            </div>
      </main>
      <article>
         <div className="downBar">
            <ul>
              <li><img src={home} />Início</li>
              <li><img src={shorts} />Shorts</li>
              <li><img className="plus" src={plus} /></li>
              <li><img src={inscricoes} />Incrições</li>
              <li><img src={library} />Biblioteca</li>
            </ul>
         </div>
      </article>
    </div>
  );
}

export default App;
