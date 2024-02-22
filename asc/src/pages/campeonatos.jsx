
import whatssapp from '../imagens/whatsapp.png'
import gmail from '../imagens/gmail.png'
import instagram from '../imagens/instagram.png'
import logo from "../imagens/asc.png"
import Rolagemaulas from './Rolagemaulas'
import "../styles/aulas.css"
import Historico from '../components/home/historico'
function Campeonatos() {
    return (

        <div>
            <main>
                <h2 style={{margin:"40px" , color:"black"}}>NAS ONDAS</h2>

                <a href="" className="links"><img src={instagram} className='contatos' /></a>
                <a href="" className="links"><img src={whatssapp} className='contatos' /></a>
                <a href="" className="links"><img src={gmail} className='contatos' id='gmail' /></a>
            </main>
            <div id='imgg' style={{height:"40vh"}}>

                <div id='containertextimg' >
                    {/* <div id='containerlogo'>

</div> */}
                    <img src={logo} id='logo'  />

                </div>

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
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "10vh" }}>
                <h1>FOTOS</h1>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", overflow: "scroll" }}>
                <Rolagemaulas></Rolagemaulas>
            </div>
            <div className='descricao' style={{borderRadius:"5px" , backgroundColor:"gray", padding:"10px"}}>
                <h1> agende sua aula </h1><br />
            <a href="" className="links"><img src={whatssapp } className='contatos'  style={{width:"90px" , height:"90px"}}/></a>



            </div >
            



            <footer style={{ color: "black", }}>

                <h3>CONTATOS</h3>
                <h4>GMAIL:</h4>
                <h5> brassociacaodesurfcanavieirense@gmail.com</h5>

            </footer>






        </div>
    )
}

export default Campeonatos