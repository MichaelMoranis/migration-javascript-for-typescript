import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

  const  Banner = ({ enderecoImagem, textoAlternativo } :BannerProps) => {
    return (
        <header className="banner">
            {/* <img src="./imagens/banner.png" alt="banner do projeto"/> */}
        <img src={enderecoImagem} alt={textoAlternativo}/>
        </header>
    )
}

export default Banner


