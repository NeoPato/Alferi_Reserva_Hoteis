import style from '../styles/pages/App.module.css';
import Menu from '../components/menu.jsx';
import Footer from '../components/footer.jsx';

function App() {
  return(
    <>
        <div className={style.TelaPrincipal}>
            <Menu/>
            
            <div className={style.TextoBoasVindas}>
              <h4>Aproveite suas férias com os Hotéis Alferi</h4>
              <h1>Deixe-nos planejar suas férias perfeitas</h1>
            </div>

            <div className={style.Inputs}>  
              <input type="text" id='pesquisar_local' placeholder='Local aonde você deseja ir'/>
              <input type="date" id='pesquisar_dataEntrada' placeholder='Data chegada'/>
              <input type="date" id='pesquisar_dataSaida' placeholder='Data Saída'/>
              <input type="number" id='pesquisar_QuantidadeP' placeholder='Quantidade de Pessoas'/>
              <button id='bt_pesquisa'><img src="src/assets/imagens/icones/lupa.svg" alt="Pesquisa" /></button>
            </div>
            
            <div className={style.Maps}></div>
            
            <h4>Tipos de Viagens</h4>

            <div className={style.imagensViagens}>
              <div className={style.Chacara}>
                <a href="/Viagens">  
                  <img src="src/assets/imagens/Estados e Cidades/rustic-patio-furniture-house-deck-with-vegetation.svg" alt="Chácara" />
                </a>                
                  <h5>Chácara</h5>
              </div>
              <div className={style.CidadeGrande}>
                <a href="/Viagens">  
                  <img src="src/assets/imagens/Estados e Cidades/road-tall-buildings.svg" alt="Cidade Grande" />
                </a>
                  <h5>Cidade Grande</h5>
              </div>
              <div className={style.Praia}>
                <a href="/Viagens">  
                  <img src="src/assets/imagens/Estados e Cidades/vertical-shot-palm-trees-beach-cloudy-sunny-day.svg" alt="Praia" /> 
                </a>
                  <h5>Praia</h5>
              </div>
            </div>


            <h4>Estados Disponíveis Para Reserva</h4>

            <div className={style.imagensEstados}>
              <div className={style.Parana}>
                <img src="src\assets\imagens\Estados e Cidades\pexels-drethousand-8571265.svg" alt="Paraná" />
                <h5>Paraná</h5>
              </div>
              <div className={style.RioDeJaneiro}>
                <img src="src\assets\imagens\Estados e Cidades\pexels-florencia-potter-82066-351283.svg" alt="Rio De Janeiro" />
                <h5>Rio De Janeiro</h5>
              </div>
              <div className={style.SantaCatarina}>
                <img src="src\assets\imagens\Estados e Cidades\pexels-pixabay-433086.svg" alt="Santa Catarina" />
                <h5>Santa Catarina</h5>
              </div>
              <div className={style.Bahia}>
                <img src="src\assets\imagens\Estados e Cidades\pexels-leonardodourado-14059766.svg" alt="Bahia" />
                <h5>Bahia</h5>
              </div>
            </div>

          <Footer/>

        </div>
    </>
  );
}

export default App;
