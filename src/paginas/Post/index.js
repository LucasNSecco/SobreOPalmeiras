import { Route, Routes, useParams } from "react-router-dom"
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css"
import NaoEncontrada from "paginas/NaoEncontrada";
import italia from "../../assets/video-2.3/assets/bandeiraitalia.png";
import jogadores from "../../assets/video-3.1/json/jogadores.json"

export default function Post(){
    const parametros = useParams()

    const post = jogadores.find((jogadores) =>{
        return jogadores.id === Number(parametros.id);
    })

    if(!post){
        return(
            <NaoEncontrada/>
        )
    }

    return(
        <Routes>
                <Route index element={
                <PostModelo
                    fotoCapa={italia}
                    titulo={post.Titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.Texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    } />
        </Routes>
        
    )
}