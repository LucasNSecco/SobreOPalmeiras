import PostModelo from "componentes/PostModelo";
import fotoCapa from '../../assets/video-2.3/assets/bandeiraitalia.png'
import './Titulos.css'

import CopaRio from '../../assets/trofeus/CopaRio1951.png'
import Libertadores from '../../assets/trofeus/libertadores.png'
import mercosul from '../../assets/trofeus/mercosul.png'
import recopa from '../../assets/trofeus/recopa.png'
import paulista from '../../assets/trofeus/paulista.png'
import brasileiro from '../../assets/trofeus/brasileiro.png'
import copadobrasil from '../../assets/trofeus/copadobrasil.png'
import supercopa from '../../assets/trofeus/supercopa.png'
import copadoscampeos from '../../assets/trofeus/copadoscampeos.png'
import brasileirob from '../../assets/trofeus/brasileirob.png'
import riosp from '../../assets/trofeus/riosp.png'


export default function Titulos(){
    return(<PostModelo
        fotoCapa={fotoCapa}
        titulo="Titulos"
        >
        <h2 className="h2_titulos">Mundiais:</h2>
        <p className="p_titulos">Copa Rio Internacional: 1 (1951)</p>
        <img src={CopaRio} className="img_titulos"></img>

        <h2 className="h2_titulos">Continentais:</h2>
        <p className="p_titulos">Copa Libertadores da América: 3 (1999, 2020 e 2021)</p>
        <p className="p_titulos">Copa Mercosul: 1 (1998)</p>
        <p className="p_titulos">Recopa Sul-Americana: 1 (2022)</p>

        <img src={Libertadores} className="img_titulos" title="Libertadores"></img>
        <img src={mercosul} className="img_titulos" title="Mercosul"></img>
        <img src={recopa} className="img_titulos" title="Recopa"></img>

        <h2 className="h2_titulos">Nacionais:</h2>
        <p className="p_titulos">Campeonato Brasileiro: 11 (1960, 1967(1), 1967(2), 1969, 1972, 1973, 1993, 1994, 2016, 2018 e 2022)</p>
        <p className="p_titulos">Copa do Brasil: 4 (1998, 2012, 2015 e 2020)</p>
        <p className="p_titulos">Supercopa do Brasil: 1 (2023)</p>
        <p className="p_titulos">Copa dos Campeões: 1 (2000)</p>
        <p className="p_titulos">Campeonato Brasileiro - Série B: 2 (2003 e 2013)</p>
        <img src={brasileiro} className="img_titulos" title="Brasileiro"></img>
        <img src={copadobrasil} className="img_titulos" title="Copa do Brasil"></img>
        <img src={supercopa} className="img_titulos" title="Supercopa do Brasil"></img>
        <img src={copadoscampeos} className="img_titulos" title="Copa dos campeões"></img>
        <img src={brasileirob} className="img_titulos" title="Brasileiro B"></img>

        <h2 className="h2_titulos">Interestaduais:</h2>
        <p className="p_titulos">Torneio Rio-São Paulo: 5 (1933, 1951, 1965, 1993 e 2000)</p>
        <p className="p_titulos">Copa dos Campeões Estaduais Rio-São Paulo: 4 (1926, 1934, 1942 e 1947)</p>
        <img src={riosp} className="img_titulos" alt="riosp" title="Rio-sp"></img>

        <h2 className="h2_titulos">Estaduais:</h2>
        <p className="p_titulos">Campeonato Paulista: 24 (1920, 1926, 1927, 1932, 1933, 1934, 1936, 1940, 1942, 1944, 1947, 1950, 1959, 1963, 1966, 1972, 1974, 1976, 1993, 1994, 1996, 2008, 2020 e 2022)</p>
        <p className="p_titulos">Campeonato Paulista Extra: 2 (1926 e 1938)</p>
        <img src={paulista} className="img_titulos" title="Paulista"></img>
    </PostModelo>)
}