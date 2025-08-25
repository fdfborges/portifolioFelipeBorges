import ExperienceCard from '../ExperienceCard/ExperienceCard';
import LogoAilouise from '../../assets/LogoEmpresasExperience/LogoAilouise.jpg';
import './Experience.scss';


export default function Experience({ secaoRef2 }) {

    return (
        <>
            <div className="divcontainerExperience" >
                <p ref={secaoRef2}>EXPERIENCIA </p>
                <ExperienceCard TituloCard={"Desenvolvedor Junior na aiLouise"} ConteudoCard={"Fui responsável pelo desenvolvimento e implementação de novas funcionalidades, bem como pela manutenção das funcionalidades existentes na página de apresentação da inteligência artificial aiLousie. Meu foco era garantir uma experiência de usuário fluida e intuitiva, aplicando conceitos de UX para aprimorar a interação do cliente com a plataforma."} Data={"Jan 2023 - Fev 2024"} LogoEmpresa={LogoAilouise} Technologies={" #ReactJS, #NextJS, #Sass, #Jest"} />
            </div>
        </>
    )
}
