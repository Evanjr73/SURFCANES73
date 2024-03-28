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
        < >
            <main>

                <a href="https://www.instagram.com/_asurfcanavieirense/" className="links"><img src={instagram} className='contatos' /></a>
                <a href="" className="links"><img src={whatssapp} className='contatos' /></a>
                <a href="" className="links"><img src={gmail} className='contatos' id='gmail' /></a>
            </main>
            <div id='imgg'>

                <div id='containertextimg'>

                    <img src={logo} id='logo' style={{ animation: animalogo }} />
                    <details className='detail' onClick={handledeta}>

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
            <div id='saibamais'  style={{display:"flex",flexDirection:"column" ,alignItems:"center" , justifyContent:"center", width:"100vw" , paddingTop:"5vh"}}>
                <details  onClick={handledeta}  style={{color:"black", minHeight:"7vh"  }}>

                    <ul className='logoText' style={{fontSize:"13px", display:'flex', flexDirection:"column", alignItems:"center", justifyContent:"start", color:"black", padding:"4vw", backgroundColor:"white" , width:"90vw"}}>
                        
                            <h2>Introdução</h2>
                            <p>A prática do surf é uma atividade física que tem crescido em
                            popularidade em todo o mundo, não só como esporte, mas também como
                            uma ferramenta de formação humana. No Brasil, a praia de Canavieiras,
                            com seus 13 km de costa, é ideal para a prática do surf, sendo escolhida como local de
                            competições de surf, picos de surf treino, e aulas da escolinha de surf Educando nas
                            Ondas.</p><br />
                            <p> Fundada no dia 25 de julho de 2023, a associação de surf Canavieirense nasce com o
                            objetivo de democratizar as oportunidades da prática do surf dentro e fora de Canavieiras,
                            promovendo ações que auxiliem os atletas dessa modalidade a se manterem ativos nesse
                            cenário esportivo, bem como, cumprir com às responsabilidades de preservação da
                            natureza.</p> <br />
                            <p>Com o intuito de coordenar e organizar todos aspectos relacionados a prática de surf no
                            município de Canavieiras, foram eleitos por votação o seguinte quadro de diretoria da
                            instituição:</p><br />
                           <p> Presidente: Juliano Fraga</p>
                           <br />
                            <p>Vice presidente: Eduardo Messias</p>
                            <p>Secretária: Eduarda Fernandes</p>
                            <p> Tesoureiro: Daniel Pedreira</p>
                            <p> Conselheiros Fiscais: Gustavo Souza e Daniel Amaral</p>
                            <p>Suplentes: André Luiz Cassimiro e Tacyo Ribeiro</p>

                        
                    </ul>
                </details>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2vh", color: "black" }}><h2>FOTOS</h2></div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", overflow: "scroll" }}>
                <Rolagem></Rolagem>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "black", marginTop: "5vh", boxShadow: "" }}>
                <h2>PAGINAS</h2>

            </div>
            <div id='grid'>


                <Carde>
                </Carde>
                <Carde2></Carde2>
                <Carde3></Carde3>
                <Carde></Carde>




            </div>



            <footer style={{ color: "black", }}>

                <h3>CONTATOS</h3>
                <h4>GMAIL:</h4>
                <h5> brassociacaodesurfcanavieirense@gmail.com</h5>

            </footer>
        </>
    )
}

export default Home
