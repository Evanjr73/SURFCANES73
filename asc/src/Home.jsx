import { useState } from 'react'
import './App.css'
import Carde from "./components/home/carde"
import Carde2 from "./components/home/carde2"
import Carde3 from "./components/home/carde3"
import Rolagem from './components/home/rolagem'

// import logo from 'D:\\DEV\\PROJETOS\\pprojetoloja\\lojavirtual\\src\\imagens\\Untitled.jpg'
import instagram from './imagens/instagram.png'
import whatssapp from './imagens/whatsapp.png'
import gmail from './imagens/gmail.png'
import logo from "./imagens/asc.png"
import Historico from './components/home/historico'
import DownloadButton from './DownloadButton';
import estatuto from './pdfs/Estatuto-ASC.pdf';

function Home() {
    const pdfUrl = './pdfs/Estatuto-ASC.docx';


    const [animalogo, setAnimalogo] = useState("")

    const handledeta = () => {

        setAnimalogo("rodar 2s alternate")



    }

    return (
        <>
            <main>

                <a href="https://www.instagram.com/_asurfcanavieirense/" className="links"><img src={instagram} className='contatos' /></a>
                <a href="" className="links"><img src={whatssapp} className='contatos' /></a>
                <a href="" className="links"><img src={gmail} className='contatos' id='gmail' /></a>
            </main>
            <div id='imgg'>

                <div id='containertextimg'>
                    {/* <div id='containerlogo'>
            
          </div> */}
                    <img src={logo} id='logo' style={{ animation: animalogo }} />
                    <details onClick={handledeta}>

                        <ul className='logoText'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui non amet
                                molestiae dolores quidem nemo nihil ipsum necessitatibus laborum neque
                                
                            </p>
                        </ul>
                    </details>
                </div>

            </div>
            <div id='separa'>
                <a href="https://docs.google.com/document/d/1uV0Zm9YO8coWXGASIBSeUOXlvDER7hGyfHnjCXqtC70/edit?usp=sharing" target="_blank"><button style={{}} className='butonsepara'>baixar estatuto</button></a>
                <a href="https://docs.google.com/document/d/1usIpFTbFV1Q3VZpbfoOorzn7Yz64MAUcv_8IAEVjzak/edit?usp=sharing" target="_blank"><button style={{}} className='butonsepara'>baixar ficha de filiação </button></a>

            </div>
            <div style={{display:"flex", flexDirection:"column" , alignItems:"center" ,marginTop:"2vh" , color:"black"}}><h2>FOTOS</h2></div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start" , overflow:"scroll" }}>
                <Rolagem></Rolagem>
            </div>
            <div style={{ display:"flex" , flexDirection:"column", alignItems:"center" ,justifyContent:"center" , color:"black" , marginTop:"5vh" ,boxShadow:""}}>
                <h2>PAGINAS</h2>
                
                </div>
            <div id='grid'>
                {/* <a href="" className='link_card'><div className='card'>
          
          </div></a>
        <a href="" className='link_card'><div className='card'>
          
          
          </div></a>
        <a href="" className='link_card'><div className='card'>
          
          
          </div></a>
        <a href="" className='link_card'><div className='card'>
          
          </div></a> */}

                <Carde>
                </Carde>
                <Carde2></Carde2>
                <Carde3></Carde3>
                <Carde></Carde>




            </div>
            {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2vh" }}>
                <Historico></Historico>
            </div > */}
            

            <footer>
                {/* <DownloadButton pdfUrl={pdfUrl} fileName="Estatuto-ASC.pdf" /> */}

            </footer>
        </>
    )
}

export default Home
