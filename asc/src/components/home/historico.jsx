import { useState } from "react";
import "../../styles/Historico.css"
import foto from "../../imagens/instagram.png"




function Historico() {

    return (
        <>

            <div id="cont">
                <div className="historico">
                    <img className="imagemhistorico" src={foto} alt="" />
                   

                </div>
                <div className="historico2">
                    <img className="imagemhistorico" src={foto} alt="" />
                   

                </div>
                <div className="historico">
                    <img className="imagemhistorico" src={foto} alt="" />
                   

                </div>
                <div className="historico2">
                    <img className="imagemhistorico" src={foto} alt="" />
                   

                </div>




            </div>



        </>
    )
}
export default Historico