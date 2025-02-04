import React from "react"
import './SidebarFooter.css'
import logo from '../assets/icons/logo-spotify.png'

const SidebarFooter = () => {
    return (
        <div>
            <div className="sidebar">
            <nav className="sidebarNavigation">
                <div className="logo">
                    <a href="">
                        <img src={logo} alt="Logo do spotify"/>
                    </a>
                </div>
                    <ul>
                        <li>
                            <a href="">
                                <span className="fa fa-home"></span>
                                <span>Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="fa fa-search"></span>
                                <span>Buscar</span>
                            </a>
                        </li>
                    </ul>
            </nav>
            <div className="library">
                <div className="libraryContent">
                    <button className="libraryButton">
                        <span className="fa fas fa-book"></span>
                        <span>Sua biclioteca</span>
                    </button>
                    <span className="fa fa-plus"></span>
                </div>
                <section className="sectionPlaylist">
                    <div className="sectionPlaylistContent">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamor te ajudar.</span>
                        <button className="sectionPlaylistButton">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <a href="">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languagesButton">
                        <span className="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div> 
        </div>


            <footer className="disclaimerPremium">
                <div className="text">
                    <p className="disclaimerPremiumTitle">Testar o Premium de graça</p>
                    <p className="disclaimerPremiumSubtitle">
                        Inscreva-se para curtir música ilimitada e podcasts só com alguns
                        anúncios. Não precisa de cartão de crédito.
                    </p>
                </div>
                <div className="button">
                    <button type="button">Inscreva-se grátis</button>
                </div>
            </footer>
        
        </div>

    )
}

export default SidebarFooter