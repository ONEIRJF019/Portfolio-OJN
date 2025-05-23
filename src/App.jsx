import React, { useEffect, useState, useRef } from 'react';
import './main.css'; // Importar CSS personalizado
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as THREE from 'three'; // Importar THREE para Vanta
import NET from 'vanta/dist/vanta.net.min'; // Importar o efeito NET do Vanta

// --- Componente Navbar ---
const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleLinkClick = () => {
        if (isActive) {
            setIsActive(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#home" onClick={handleLinkClick}>
                        <img src={'/images/Logos/logo_OJN-removebg-preview.png'} alt="Logo-Oneir" />
                    </a>
                </div>
                
                <div className={`navbar-menu-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <div className={`navbar-links ${isActive ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#sobreMim-" onClick={handleLinkClick}>Sobre Mim</a></li>
                        <li><a href="#projetos-container" onClick={handleLinkClick}>Projetos</a></li>
                        <li><a href="#Competencias" onClick={handleLinkClick}>Competências</a></li>
                        <li><a href="#contato" onClick={handleLinkClick}>Contatos</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// --- Componente Header ---
const Header = () => {
    // A div .name dentro deste componente será o alvo do Vanta.js
    return (
        <div className="name" id="home" data-aos="fade-up">
            <h3>Oneir Júnior</h3>
            <h1>&lt; PORTFOLIO/&gt;</h1>
            <h3>Desenvolvedor</h3>
            {/* O script letteranimation.js será carregado no App.jsx */}
            <h3><div className="cssanimation leFadeInLeft infinite sequence"> FullStack </div></h3>
        </div>
    );
};

// --- Componente About ---
const About = () => {
    return (
        <article>
            <br />
            <div className="sobreMim" id="sobreMim-">
                <img src={'/images/fotosOneir/Retrato elegante de jovem homem.png'} data-aos="fade-right" alt="Oneir Junior" />
                <div className="text-sobreMim" data-aos="fade-up-left">
                    <h1 id="sobreMim">SOBRE MIM</h1>
                    <h2><b>Olá, me chamo Oneir Júnior</b></h2>
                    <br />
                    <p>Sou Desenvolvedor FullStack. Tenho uma enorme busca e vontade de transformar ideias em soluções digitais eficazes. Além disso, sou cristão e gosto bastante de ensinar e aprender</p>
                    <br />
                    <p>Hoje, como desenvolvedor full-stack em formação, possuo conhecimentos básicos em linguagens e tecnologias como Java, Bootstrap, JavaScript, React, Node.js e Git. Embora esteja em um estágio inicial, tenho um enorme desejo de crescer e contribuir para o sucesso da empresa. Sou comunicativo, social e tenho facilidade em aprender, o que me permite adaptar rapidamente a novas ferramentas e desafios do setor.</p>
                    <br />
                    <p>Estou motivado a colaborar com soluções criativas e eficientes, utilizando minhas habilidades para contribuir com projetos de impacto. Meu objetivo é crescer profissionalmente junto com a empresa, evoluindo como desenvolvedor e entregando valor por meio da tecnologia.</p>
                    <p>Atualmente, estou cursando Engenharia de Software para aprofundar ainda mais meus conhecimentos. Se você está buscando um parceiro para levar seu negócio online ao próximo nível!</p>
                </div>
            </div>
        </article>
    );
};

// --- Componente Projects ---
const Projects = () => {
    return (
        <article>
            <div id="projetos-container"></div>
            <div className="projetos-container">
                <div className="tituloProjet" data-aos="fade-up">
                    <h2>MEUS PROJETOS</h2>
                </div>
            </div>
            <br />
            <div className="cards-section">
                <div className="card" data-aos="fade-right">
                    <img src={'/images/Imagemprojetos/IMGprojet01.png'} alt="projeto01" />
                    <div className="card-conteudo">
                        <h2>Site de Estudos Bíblicos</h2>
                        <p>Meu primeiro projeto publicado foi um site de estudos bíblicos, criado com dedicação e propósito. Com ele, dei meus primeiros passos no desenvolvimento web, aprendendo a construir interfaces simples e funcionais. Foi através desse projeto que descobri o poder de usar a tecnologia para compartilhar valores e edificar pessoas.</p>
                        <form className="form-card">
                            <div className="button-group">
                                <a className="btn-github" href="https://github.com/ONEIRJF019/site-ebd" target="_blank" rel="noopener noreferrer">Github code</a>
                                <a className="btn-github" href="https://projeto-1-zeta-bice.vercel.app/" target="_blank" rel="noopener noreferrer">Project Demo</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card" data-aos="fade-up-left">
                    <img src={'/images/Imagemprojetos/IMGproject02.png'} alt="projeto02" />
                    <div className="card-conteudo">
                        <h2>Quiz de Tecnologia da Informação</h2>
                        <p>Neste projeto, desenvolvi um quiz sobre Tecnologia da Informação usando Java. Além de reforçar meus conhecimentos na linguagem, pratiquei lógica de programação e interação com o usuário. Foi um passo importante na minha formação como desenvolvedor, unindo aprendizado técnico com criatividade.</p>
                        <form className="form-card">
                            <div className="button-group">
                                <a className="btn-github" href="https://github.com/ONEIRJF019/site-ebd" target="_blank" rel="noopener noreferrer">Github code</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </article>
    );
};

// --- Componente Skills ---
const Skills = () => {
    const skillsData = {
        usingNow: [
            { name: 'HTML5', icon: 'html5/html5-original.svg' },
            { name: 'CSS3', icon: 'css3/css3-original.svg' },
            { name: 'SASS', icon: 'sass/sass-original.svg' },
            { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
            { name: 'Bootstrap', icon: 'bootstrap/bootstrap-original.svg' },
            { name: 'Git', icon: 'git/git-original.svg' },
            { name: 'Figma', icon: 'figma/figma-original.svg' },
            { name: 'Java', icon: 'java/java-original.svg' },
        ],
        learning: [
            { name: 'NodeJS', icon: 'nodejs/nodejs-original.svg' },
            { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
        ],
    };

    return (
        <article>
            <div id="Competencias"></div>
            <section className="skills-section">
                <h2 data-aos="fade-up">COMPETÊNCIAS</h2>
                <div className="skills-category">
                    <h3>Usando agora:</h3>
                    <div className="skills-grid">
                        {skillsData.usingNow.map(skill => (
                            <div className="skill" key={skill.name}>
                                <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`} alt={skill.name} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Aprendendo:</h3>
                    <div className="skills-grid">
                        {skillsData.learning.map(skill => (
                            <div className="skill" key={skill.name}>
                                <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`} alt={skill.name} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
};

// --- Componente Contact ---

// --- Componente Contact ---
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({
        name: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Validação específica para o campo nome
        if (name === 'name') {
            setErrors({
                ...errors,
                name: !value.includes(' ') && value.length > 0
            });
        }
    };

    const handleSubmit = (e) => {
        // Validação final antes de enviar
        if (!formData.name.includes(' ')) {
            e.preventDefault();
            setErrors({
                ...errors,
                name: true
            });
            return;
        }
        
        // Se chegou aqui, o formulário será enviado normalmente
    };

    return (
        <section id="contato" className="contato-section">
            <div className="container-contato">
                <h2 data-aos="fade-up" className="titulo-contato">CONTATOS</h2>
                <p className="descricao-contato">
                    Vamos construir algo incrível juntos? <br />
                    Me envie uma mensagem — estou aberto a ideias, projetos e boas conversas!
                </p>
                <div className="divisao"></div>
                <form 
                    action="https://formsubmit.co/a29d4a3f227f04804c7bcb5eaddc91a7" 
                    method="POST" 
                    className="form-contato" 
                    target="_blank"
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Seu nome completo*" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <div className="error-message">Por favor, insira nome e sobrenome</div>}
                    
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Insira seu email*" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                    />
                    
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="Seu telefone" 
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    
                    <textarea 
                        name="message" 
                        placeholder="Sua mensagem*" 
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    
                    <input type="hidden" name="_next" value="#" />
                    <input type="hidden" name="_captcha" value="false" />
                    <button type="submit">ENVIAR</button>
                </form>
            </div>
        </section>
    );
};

// --- Componente Footer ---
const Footer = () => {
    return (
        <footer className="footer">
            <a href="#home" className="back-to-top">⬆ VOLTAR AO TOPO</a>
            <div className="social-icons">
                <a href="https://github.com/ONEIRJF019" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/oneir-j%C3%BAnior-503b8b341/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/neiro.018/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="mailto:oneirjunior13@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            </div>
            <p className="direitos">&copy;{new Date().getFullYear()} OJN - Oneir Júnior. Todos os direitos reservados.</p>
        </footer>
    );
};

// --- Componente App (Principal) ---
function App() {
    const vantaRef = useRef(null); // Ref para o elemento alvo do Vanta
    const [vantaEffect, setVantaEffect] = useState(null); // Estado para guardar o efeito Vanta

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });

        // Carregar e executar letteranimation.js
        // No Vite, os scripts em 'public' são servidos na raiz
        const letterAnimationScript = document.createElement('script');
        letterAnimationScript.src = '/Bibliotecas/letteranimation.js'; // Caminho ajustado
        letterAnimationScript.async = true;
        document.body.appendChild(letterAnimationScript);

        // Inicialização do Vanta.js
        if (!vantaEffect) {
            // A div .name no componente Header é o alvo
            const vantaTargetElement = document.querySelector(".name"); 
            if (vantaTargetElement) {
                setVantaEffect(NET({
                    el: vantaTargetElement,
                    THREE: THREE, // Passar a instância do THREE importada
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x3c3cfc,
                    backgroundColor: 0xebebeb // Cor de fundo da página
                }));
            } else {
                console.warn("Elemento alvo .name para Vanta.js não encontrado.");
            }
        }

        // Limpeza ao desmontar o componente
        return () => {
            if (document.body.contains(letterAnimationScript)) {
                document.body.removeChild(letterAnimationScript);
            }
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    // Adicionar vantaEffect às dependências para evitar recriação desnecessária
    // Executar apenas uma vez na montagem, por isso o array de dependências vazio pode ser mantido se for o comportamento desejado
    // ou adicionar vantaEffect se a intenção for recriar caso ele mude (o que não deveria acontecer aqui)
    }, [vantaEffect]); 

    return (
        <div className="App">
            <Navbar />
            <Header /> {/* Este componente contém a div .name para o Vanta */}
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

