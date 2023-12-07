import imagens from "../../imagens/gmail.png"
import foto from '../../imagens/competmolecada.png'
import foto2 from '../../imagens/bonde.jpeg'
import foto3 from '../../imagens/sufgril.jpeg'
import foto4 from '../../imagens/surfkids.jpeg'
import juizes from '../../imagens/juizes.jpeg'
import body from '../../imagens/bodyboard.jpeg'
import setadireita from "../../imagens/seta-para-a-direita.png"
import "../../styles/Rolagem.css"
function Rolagem() {
    return (
        <div>
            


            <div className="containernomes">
                {/* <div className="nomes"></div> */}
                <img src={foto} alt="" />
                <img src={foto2} alt="" />
                <img src={foto3} alt="" />
                <img src={foto4} alt="" />
                <img src={juizes} alt="" />
                <img src={body} alt="" />
                



            </div>


        </div>
    )
}

export default Rolagem