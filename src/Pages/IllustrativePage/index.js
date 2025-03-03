import styles from './IllustrativePage.module.css'
import image from '../../imgs/icone-wolverine-sem-fundo.png'
import { Link } from 'react-router-dom'

function IllustrativePage() {

    function IllustrativePageFunc() {
        const headerH1 = document.querySelector('#headerH1')
        const timerId = document.querySelector('#timerId')
        const questionId = document.querySelector('#questionId')
        const opt1 = document.querySelector('#opt1')
        const opt2 = document.querySelector('#opt2')
        const opt3 = document.querySelector('#opt3')
        const opt4 = document.querySelector('#opt4')
        const opt5 = document.querySelector('#opt5')
        const answerTitleId = document.querySelector('#answerTitleId')
        const answerClickId = document.querySelector('#answerClickId')
        const descriptionId = document.querySelector('#descriptionId')
console.log(answerClickId, 19)

        headerH1.innerText = 'Bem-vindo!!! Para melhor experiência, inicialize uma API com o arquivo "db.json" incluido neste projeto.'
        headerH1.classList.add(`${styles.onClickClass}`)
        headerH1.style.color = 'Crimson'
        headerH1.style.border = '1px solid Crimson'
        timerId.classList.add(`${styles.invisible}`)

        setTimeout(() => {
            headerH1.innerText = "🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 1 - Randomly!"
            headerH1.classList.remove(`${styles.onClickClass}`)
            headerH1.style.color = '#430A5D'
            headerH1.style.border = 'none'            
            timerId.classList.remove(`${styles.invisible}`)

        }, 3000)

        setTimeout(() => {
            questionId.innerText = 'Bem-vindo!!! Para melhor experiência, inicialize uma API com o arquivo "db.json" incluido neste projeto.'
            questionId.classList.add(`${styles.onClickClass}`)
            questionId.style.color = 'PaleVioletRed'
            questionId.style.border = '1px solid PaleVioletRed' 

        }, 3000)

        setTimeout(() => {
            questionId.innerText = "🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 1 - Randomly!"
            questionId.classList.remove(`${styles.onClickClass}`)
            questionId.style.color = '#430A5D'
            questionId.style.border = 'none'

        }, 6000)

        setTimeout(() => {
            opt1.innerText = 'Bem-vindo!!! Para melhor experiência, inicialize uma API com o arquivo "db.json" incluido neste projeto.'
            opt1.classList.add(`${styles.onClickClass}`)
            opt1.style.color = 'Tomato'
            opt1.style.border = '1px solid Tomato'

        }, 6000)

        setTimeout(() => {
            opt1.innerText = "Storage Gateway - Volume Gateway."
            opt1.classList.remove(`${styles.onClickClass}`)
            opt1.style.color = '#430A5D'
            opt1.style.border = 'none'

        }, 9000)

        setTimeout(() => {
            opt2.innerText = 'Bem-vindo!!! Para melhor experiência, inicialize uma API com o arquivo "db.json" incluido neste projeto.'
            opt2.classList.add(`${styles.onClickClass}`)
            opt2.style.color = 'Gold'
            opt2.style.border = '1px solid Gold'

        }, 9000)

        setTimeout(() => {
            opt2.innerText = "Site-to-Site VPN."
            opt2.classList.remove(`${styles.onClickClass}`)
            opt2.style.color = '#430A5D'
            opt2.style.border = 'none'

        }, 12000)

        setTimeout(() => {
            opt3.innerText = 'Bem-vindo!!! Para melhor experiência, inicialize uma API com o arquivo "db.json" incluido neste projeto.'
            opt3.classList.add(`${styles.onClickClass}`)
            opt3.style.color = 'Lavender'
            opt3.style.border = '1px solid Lavender'

        }, 12000)

        setTimeout(() => {
            opt3.innerText = "Storage Gateway - File Gateway."
            opt3.classList.remove(`${styles.onClickClass}`)
            opt3.style.color = '#430A5D'
            opt3.style.border = 'none'

        }, 15000)

        setTimeout(() => {
            opt4.innerText = 'Bem-vindo!!! Para melhor experiência, inicialize uma API com o arquivo "db.json" incluido neste projeto.'
            opt4.classList.add(`${styles.onClickClass}`)
            opt4.style.color = 'MediumSpringGreen'
            opt4.style.border = '1px solid MediumSpringGreen'

        }, 15000)

        setTimeout(() => {
            opt4.innerText = "Storage Gateway - Tape Gateway."
            opt4.classList.remove(`${styles.onClickClass}`)
            opt4.style.color = '#430A5D'
            opt4.style.border = 'none'

        }, 18000)

        setTimeout(() => {
            opt5.innerText = 'Bem-vindo!!! Para melhor experiência, inicialize uma API com o arquivo "db.json" incluido neste projeto.'
            opt5.classList.add(`${styles.onClickClass}`)
            opt5.style.color = 'Cyan'
            opt5.style.border = '1px solid Cyan'

        }, 18000)

        setTimeout(() => {
            opt5.innerText = "Instance Store."
            opt5.classList.remove(`${styles.onClickClass}`)
            opt5.style.color = '#430A5D'
            opt5.style.border = 'none'

        }, 21000)

        setTimeout(() => {
            answerTitleId.innerText = 'Bem-vindo!!! Para melhor experiência, inicialize uma API com o arquivo "db.json" incluido neste projeto.'
            answerTitleId.classList.add(`${styles.onClickClass}`)
            answerTitleId.style.color = 'Chocolate'
            answerTitleId.style.border = '1px solid Chocolate'
            answerClickId.innerText = ''


        }, 21000)

        setTimeout(() => {
            answerTitleId.innerText = "Storage Gateway - File Gateway."
            answerTitleId.classList.remove(`${styles.onClickClass}`)
            answerTitleId.style.color = '#430A5D'
            answerTitleId.style.border = 'none'
            answerClickId.innerText = 'Click here for more information'


        }, 24000)

        setTimeout(() => {
            descriptionId.innerText = 'Bem-vindo!!! Para melhor experiência, inicialize uma API com o arquivo "db.json" incluido neste projeto.'
            descriptionId.classList.add(`${styles.onClickClass}`)
            descriptionId.style.color = 'Silver'
            descriptionId.style.border = '1px solid Silver'

        }, 24000)

        setTimeout(() => {
            descriptionId.innerText = "AWS Storage Gateway's file interface, or file gateway, offers you a seamless way to connect to the cloud in order to store application data files and backup images as durable objects on Amazon S3 cloud storage. File gateway offers SMB or NFS-based access to data in Amazon S3 with local caching."
            descriptionId.classList.remove(`${styles.onClickClass}`)
            descriptionId.style.color = '#430A5D'
            descriptionId.style.border = 'none'

        }, 27000)

    }

    return(
        <div
            onClick={IllustrativePageFunc}
            id='IllustrativePageId' 
            className={styles.IllustrativePage}
        >
            <div className={styles.header}>
                <h1 id='headerH1'>
                    "🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 1 - Randomly!"
                </h1>
                <div id='timerId' className={styles.timer}>
                    <h1>12:00</h1>
                    <div>
                        <button>Play</button>
                        <button>Pause</button>
                    </div>
                 </div>
            </div>

            <div className={styles.main}>
                <h2 id='questionId' className={styles.question}>
                    "What the most efficient service can integrate data files from its on-premises with AWS Cloud via an NFS interface?"
                </h2>

                <div className={styles.optionsMain}>
                    <div className={styles.checkOpt}>
                        <input
                            className={styles.inputOptions}  
                            type='radio' 
                            name='options' 
                            value='0'
                        />
                        <p id='opt1' className={styles.option}>
                            "Storage Gateway - Volume Gateway."
                        </p>
                    </div>

                    <div className={styles.checkOpt}>
                        <input
                            className={styles.inputOptions} 
                            type='radio' 
                            name='options' 
                            value='1' 
                        />
                        <p id='opt2' className={styles.option}>
                            "Site-to-Site VPN."
                        </p>
                    </div>

                    <div className={styles.checkOpt}>
                        <input 
                            className={styles.inputOptions} 
                            type='radio' 
                            name='options' 
                            value='2' 
                        />
                        <p id='opt3' className={styles.option}>
                            "Storage Gateway - File Gateway."
                        </p>
                    </div>

                    <div className={styles.checkOpt}>
                        <input 
                            className={styles.inputOptions} 
                            type='radio' 
                            name='options' 
                            value='3' 
                        />
                        <p id='opt4' className={styles.option}>
                            "Storage Gateway - Tape Gateway."
                        </p>
                    </div>

                    <div className={styles.checkOpt}>
                        <input 
                            className={styles.inputOptions} 
                            type='radio' 
                            name='options' 
                            value='4' 
                        />
                        <p id='opt5' className={styles.option}>
                            "Instance Store."
                        </p>
                    </div>
                </div>

                <button className={styles.button}>
                    Answer
                </button>

                <section className={styles.answerClass}>   
                    <div className={styles.answerTitle}>
                        <h3 id='answerTitleId'>"Storage Gateway - File Gateway."</h3>
                        <p id='answerClickId'>Click here for more information</p>
                    </div>

                    <p id='descriptionId' className={styles.descriptionClass}>
                        "AWS Storage Gateway's file interface, or file gateway, offers you a seamless way to connect to the cloud in order to store application data files and backup images as durable objects on Amazon S3 cloud storage. File gateway offers SMB or NFS-based access to data in Amazon S3 with local caching."
                    </p>
                </section>

                <button className={styles.buttonnext}>
                    Next
                </button>
            </div>

            <div className={styles.footer}>
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
