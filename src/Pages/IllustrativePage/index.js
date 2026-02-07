import styles from './IllustrativePage.module.css'
import backgroundImage from '../../imgs/cloud-neon-vibe.png'
import image from '../../imgs/icone-wolverine-sem-fundo.png'
import imageStart from '../../imgs/icon-start.png'
import storageGateway from '../../imgs/answers-imgs/Storage_Gateway.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoPlus } from "react-icons/go"
import { RxHamburgerMenu } from "react-icons/rx"
import { MdEditSquare } from "react-icons/md"
import { MdDelete } from "react-icons/md"
import { BiSolidVolumeFull } from "react-icons/bi"

function IllustrativePage() {

    // ativa ou desativa a imagem da descrição
    const [activeImageDescription, setActiveImageDescription] = useState(true)

    function onClickIllustrativePage() { // função que destaca uma frase em cada elemento da página em sequência
        const headerH1 = document.querySelector('#headerH1')
        const questionId = document.querySelector('#questionId')
        const optionA = document.querySelector('#optionA')
        const optionB = document.querySelector('#optionB')
        const optionC = document.querySelector('#optionC')
        const optionD = document.querySelector('#optionD')
        const optionE = document.querySelector('#optionE')
        const inputValidate = document.querySelector('#inputValidateId')
        const inputInvalidate = document.querySelector('#inputInvalidateId')
        const answerTitleId = document.querySelector('#answerTitleId')
        const answerClickId = document.querySelector('#answerClickId')
        const descriptionId = document.querySelector('#descriptionId')
        const textDescriptionId = document.querySelector('#textDescriptionId')

        headerH1.innerText = 'Welcome! For the best experience, initialize an API using the "db.json" file included in this project.'
        headerH1.classList.add(`${styles.newHeaderTitle}`)
        headerH1.classList.remove(`${styles.headerTitle}`)

        setTimeout(() => {
            headerH1.innerHTML = "ILLUSTRATIVE PAGE / Resolution 1 - Randomly"        
            headerH1.classList.remove(`${styles.newHeaderTitle}`)
            headerH1.classList.add(`${styles.headerTitle}`)

        }, 3000)

        setTimeout(() => {
            questionId.innerText = 'Welcome! For the best experience, initialize an API using the "db.json" file included in this project.'
            questionId.classList.add(`${styles.newQuestion}`)
            questionId.classList.remove(`${styles.question}`) 

        }, 3000)

        setTimeout(() => {
            questionId.innerText = "What the most efficient service can integrate data files from its on-premises with AWS Cloud via an NFS interface?"
            questionId.classList.add(`${styles.question}`) 
            questionId.classList.remove(`${styles.newQuestion}`)

        }, 6000)

        setTimeout(() => {
            optionA.innerText = 'Welcome! For the best experience, initialize an API using the "db.json" file included in this project.'
            optionA.classList.add(`${styles.newTextOptionsA}`)
            optionA.classList.remove(`${styles.textOptions}`)

        }, 6000)

        setTimeout(() => {
            optionA.innerText = "a) Storage Gateway - Volume Gateway."
            optionA.classList.add(`${styles.textOptions}`)
            optionA.classList.remove(`${styles.newTextOptionsA}`)

        }, 9000)

        setTimeout(() => {
            optionB.innerText = 'Welcome! For the best experience, initialize an API using the "db.json" file included in this project.'
            optionB.classList.add(`${styles.newTextOptionsB}`)
            optionB.classList.remove(`${styles.textOptions}`)

        }, 9000)

        setTimeout(() => {
            optionB.innerText = "b) Site-to-Site VPN."
            optionB.classList.add(`${styles.textOptions}`)
            optionB.classList.remove(`${styles.newTextOptionsB}`)

        }, 12000)

        setTimeout(() => {
            optionC.innerText = 'Welcome! For the best experience, initialize an API using the "db.json" file included in this project.'
            optionC.classList.add(`${styles.newOptionValidate}`)
            inputValidate.classList.add(`${styles.newInputValidate}`)
            optionC.classList.remove(`${styles.optionValidate}`)
            inputValidate.classList.remove(`${styles.inputValidate}`)

        }, 12000)

        setTimeout(() => {
            optionC.innerText = "c) Storage Gateway - File Gateway."
            optionC.classList.add(`${styles.optionValidate}`)
            inputValidate.classList.add(`${styles.inputValidate}`)
            optionC.classList.remove(`${styles.newOptionValidate}`)
            inputValidate.classList.remove(`${styles.newInputValidate}`)

        }, 15000)

        setTimeout(() => {
            optionD.innerText = 'Welcome! For the best experience, initialize an API using the "db.json" file included in this project.'
            optionD.classList.add(`${styles.newTextOptionsD}`)
            optionD.classList.remove(`${styles.textOptions}`)

        }, 15000)

        setTimeout(() => {
            optionD.innerText = "d) Storage Gateway - Tape Gateway."
            optionD.classList.add(`${styles.textOptions}`)
            optionD.classList.remove(`${styles.newTextOptionsD}`)

        }, 18000)

        setTimeout(() => {
            optionE.innerText = 'Welcome! For the best experience, initialize an API using the "db.json" file included in this project.'
            optionE.classList.add(`${styles.newOptionInvalidate}`)
            inputInvalidate.classList.add(`${styles.newInputInvalidate}`)
            optionE.classList.remove(`${styles.optionInvalidate}`)
            inputInvalidate.classList.remove(`${styles.inputInvalidate}`)

        }, 18000)

        setTimeout(() => {
            optionE.innerText = "e) Instance Store."
            optionE.classList.add(`${styles.optionInvalidate}`)
            inputInvalidate.classList.add(`${styles.inputInvalidate}`)
            optionE.classList.remove(`${styles.newOptionInvalidate}`)
            inputInvalidate.classList.remove(`${styles.newInputInvalidate}`)

        }, 21000)

        setTimeout(() => {
            answerTitleId.innerText = 'Welcome! For the best experience, initialize an API using the "db.json" file included in this project.'
            answerClickId.innerText = ''
            answerTitleId.classList.add(`${styles.newAnswerTitleText}`)
            answerTitleId.classList.remove(`${styles.answerTitleText}`)

        }, 21000)

        setTimeout(() => {
            answerTitleId.innerText = "c) Storage Gateway - File Gateway."
            answerClickId.innerText = 'Click here for more information'
            answerTitleId.classList.add(`${styles.answerTitleText}`)
            answerTitleId.classList.remove(`${styles.newAnswerTitleText}`)

        }, 24000)

        setTimeout(() => {
            setActiveImageDescription(false)    
            textDescriptionId.innerText = 'Welcome! For the best experience, initialize an API using the "db.json" file included in this project.'
            descriptionId.classList.add(`${styles.newDescription}`)
            descriptionId.classList.remove(`${styles.description}`)

        }, 24000)

        setTimeout(() => {
            setActiveImageDescription(true)
            textDescriptionId.innerText = "AWS Storage Gateway's file interface, or file gateway, offers you a seamless way to connect to the cloud in order to store application data files and backup images as durable objects on Amazon S3 cloud storage. File gateway offers SMB or NFS-based access to data in Amazon S3 with local caching."
            descriptionId.classList.add(`${styles.description}`)
            descriptionId.classList.remove(`${styles.newDescription}`)

        }, 27000)
        
    }

    useEffect(() => {
        //capturando as páginas main e multi e certificando que elas não irão aparecer ao renderizar a página ilustrativa
        const allQuestionsMain = document.querySelector('#allQuestionsMainId')
        const allQuestionsMulti = document.querySelector('#allQuestionsMultiId')

        allQuestionsMain && (allQuestionsMain.style.display = 'none')
        allQuestionsMulti && (allQuestionsMulti.style.display = 'none')
        
    }, [])

    return(
        <div
            onClick={onClickIllustrativePage}
            id='illustrativePageId' 
            className={styles.illustrativePage}
        >
            <img className={styles.backgroundImage} src={backgroundImage} alt='imagem de fundo' />

            <div className={styles.header}>
                <img className={styles.iconStart} src={imageStart} alt='icon-start' />

                <h1 id='headerH1' className={styles.headerTitle}>
                    ILLUSTRATIVE PAGE / Resolution 1 - Randomly              
                </h1>

                <nav>
                    <RxHamburgerMenu className={styles.hamburger} />   
                    <ul className={styles.ulIllustrative}>
                        <li className={styles.link}>Home</li>                
                        <li className={styles.link}><GoPlus />Create</li>                 
                    </ul>
                </nav>
            </div>

            <div className={styles.main}>
                <h2 id='questionId' className={styles.question}>
                    1) What the most efficient service can integrate data files from its on-premises with AWS Cloud via an NFS interface?
                </h2>

                <div className={styles.menu}>
                    <div className={styles.menuTools}>
                        <span>Menu</span>

                    </div>

                    <div className={styles.menuToolsSelector}>
                        <MdEditSquare className={styles.editIcon}/>

                        <MdDelete className={styles.deleteIcon}/>
                        
                    </div>

                </div>

                <div className={styles.optionsMain}>
                    <div className={styles.alternativeOptions}>
                        <input
                            className={styles.inputOptions}  
                            type='radio' 
                            name='options' 
                            value='0'
                        />
                        <p id='optionA' className={styles.textOptions}>
                            a) Storage Gateway - Volume Gateway.
                        </p>
                    </div>

                    <div className={styles.alternativeOptions}>
                        <input
                            className={styles.inputOptions} 
                            type='radio' 
                            name='options' 
                            value='1' 
                        />
                        <p id='optionB' className={styles.textOptions}>
                            b) Site-to-Site VPN.
                        </p>
                    </div>

                    <div className={styles.alternativeOptions}>
                        <input 
                            id='inputValidateId'
                            className={styles.inputValidate} 
                            type='radio' 
                            name='options' 
                            value='2' 
                        />
                        <p id='optionC' className={styles.optionValidate}>
                            c) Storage Gateway - File Gateway.
                        </p>
                    </div>

                    <div className={styles.alternativeOptions}>
                        <input 
                            className={styles.inputOptions} 
                            type='radio' 
                            name='options' 
                            value='3' 
                        />
                        <p id='optionD' className={styles.textOptions}>
                            d) Storage Gateway - Tape Gateway.
                        </p>
                    </div>

                    <div className={styles.alternativeOptions}>
                        <input 
                            id='inputInvalidateId'
                            className={styles.inputInvalidate}
                            checked='true' 
                            type='radio'
                            name='options' 
                            value='4' 
                        />
                        <p id='optionE' className={styles.optionInvalidate}>
                            e) Instance Store.
                        </p>
                    </div>
                </div>

                <button className={styles.buttonAnswer}>
                    Answer
                </button>

                <section className={styles.answer}>   
                    <div className={styles.answerTitle}>
                        <h3 id='answerTitleId' className={styles.answerTitleText}>c) Storage Gateway - File Gateway.</h3>
                        <p id='answerClickId' className={styles.answerClickText}>Click here for more information</p>
                    </div>

                    <p id='descriptionId' className={styles.description}>
                        {activeImageDescription && 
                            <img
                                className={styles.imageDescription}
                                src={storageGateway} 
                                alt='img' 
                            />
                        }
                        <span
                            id='textDescriptionId' 
                            className={styles.textDescription}>AWS Storage Gateway's file interface, or file gateway, offers you a seamless way to connect to the cloud in order to store application data files and backup images as durable objects on Amazon S3 cloud storage. File gateway offers SMB or NFS-based access to data in Amazon S3 with local caching.
                        </span>
                    </p>
                </section>

                <button className={styles.buttonNext}>
                    Next
                </button>

                <button className={styles.buttonResultsModal}>
                    Results
                </button> 
            </div>

            <div className={styles.footer}>
                <BiSolidVolumeFull // unmute sound icon
                    className={styles.soundFull}
                />
                <div id='timerId' className={styles.timer}>
                    <h1>2:00</h1>
                    <div>
                        <button>Play</button>
                        <button>Pause</button>
                    </div>
                </div>

                <img src={image} alt="icon wolverine" />

                <p>Created by Victor Cardoso. Feel free to connect on  
                    <Link id='contactLink' to="https://www.linkedin.com/in/victor-cardoso-cloud-front/" target="_blank"> Linkedin.
                    </Link>
                </p>
            </div>

        </div>
    )
}

export default IllustrativePage
