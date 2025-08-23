import './ExperienceCard.scss';


export default function ExperienceCard({ TituloCard, ConteudoCard, Data, LogoEmpresa, Technologies }) {

    return (
        <>
            <div className="containerExperienceCard">
                <div className="containerExperienceCardHeader">
                    <div className="containerImgAndParagraphExperieceCard">
                        <div className="containerImgExperienceCardHeader">
                            <img src={LogoEmpresa} alt="" />
                        </div>
                        <span className='span-title'>{TituloCard}</span>
                    </div>
                    <div className="containerDateExperienceCardHeader">
                        <span className='span-date'>{Data}</span>
                    </div>
                </div>
                <span>
                    {ConteudoCard}
                </span>
                <span className='ExperienceTechnologies'><strong>Tecnologias Desempenhadas:</strong>{Technologies}</span>
            </div>
        </>
    )
}
