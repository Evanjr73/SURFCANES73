
import whatssapp from '../imagens/whatsapp.png'
import gmail from '../imagens/gmail.png'
import instagram from '../imagens/instagram.png'
import logo from "../imagens/asc.png"
import Rolagemaulas from './Rolagemaulas'
import "../styles/aulas.css"
import Historico from '../components/home/historico'
function Aulas() {
    return (

        <div>
            <main>

                <a href="" className="links"><img src={instagram} className='contatos' /></a>
                <a href="" className="links"><img src={whatssapp} className='contatos' /></a>
                <a href="" className="links"><img src={gmail} className='contatos' id='gmail' /></a>
            </main>
            <div id='imgg'>

                <div id='containertextimg'>
                    {/* <div id='containerlogo'>

</div> */}
                    <img src={logo} id='logo' />

                </div>

            </div>
            <div style={{display:"flex", flexDirection:"column" , alignItems:"center" , justifyContent:"center" , height:"10vh"}}>
                <h1>FOTOS</h1>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", overflow: "scroll" }}>
                <Rolagemaulas></Rolagemaulas>
            </div>

            <div className='descricao'>

                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repreh</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitatione
                    m, quidem! Doloribus ab asperiores voluptates fuga vitae amet eum p
                    raesentium voluptatum molestiae, hic repellat natus dolores. Vitae, 
                    placeat! Nisi, ipsa nobis? Lorem ipsum dolor sit amet consectetur adi
                    pisicing elit. Itaque eum ut officiis, quasi ullam nulla vero enim quide
                    m aut, quas temporibus velit amet quibusdam possimus nisi reiciendis non
                     omnis nihil?</p>

            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2vh" }}>
                <Historico></Historico>
            </div >

            <footer>
                
            </footer>




        </div>
    )
}

export default Aulas