import './ExperienceCard.scss';


export default function ExperienceCard() {

    return (
        <>
            <div className="containerExperienceCard">
                <div className="containerExperienceCardHeader">
                    <div className="containerImgAndParagraphExperieceCard">
                        <div className="containerImgExperienceCardHeader">
                            <img src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw" alt="" />
                        </div>
                        <span className='span-title'>Lead Software Engineer at Google</span>
                    </div>
                    <div className="containerDateExperienceCardHeader">
                        <span className='span-date'>Nov 2019 - Present</span>
                    </div>
                </div>
                <span>
                    As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
                </span>
            </div>
        </>
    )
}
