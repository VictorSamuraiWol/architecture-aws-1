import styles from './AnswerDescription.module.css'
import apiGateway from '../../imgs/answers-imgs/API_Gateway.png'
import dynamoDB from '../../imgs/answers-imgs/DynamoDB.png'
import ec2 from '../../imgs/answers-imgs/EC2.png'
import elasticLoadBalancing from '../../imgs/answers-imgs/Elastic_Load_Balancing.png'
import fsxForLustre from '../../imgs/answers-imgs/FSx_for_Lustre.png'
import globalAccelerator from '../../imgs/answers-imgs/Global_Accelerator.png'
import identityAndAccessManagement from '../../imgs/answers-imgs/Identity_and_Access_Management.png'
import simpleQueueService from '../../imgs/answers-imgs/Simple_Queue_Service.png'
import simpleStoragesService from '../../imgs/answers-imgs/Simple_Storage_Service.png'
import storageGateway from '../../imgs/answers-imgs/Storage_Gateway.png'
import { useContext, useState } from 'react'
import { DataContext } from '../DataContext'

function AnswerDescription({ 
    answer, description, imageDescription, answerDescriptionDisplay, descriptionDisplay, setDescriptionDisplay, 
    item, itens
}) {

    const { listUnicOptionsContext, listMultiOptionsContext } = useContext(DataContext)

    // colocando todas as imagens disponíveis das questões relacionadas em um objeto para serem usadas nas suas respectivas questões dinamicamente
    const [imagesDescriptions] = useState({
        storageGateway: storageGateway,
        simpleStoragesService: simpleStoragesService,
        fsxForLustre: fsxForLustre,
        globalAccelerator: globalAccelerator,
        ec2: ec2,
        apiGateway: apiGateway,
        simpleQueueService: simpleQueueService,
        elasticLoadBalancing: elasticLoadBalancing,
        identityAndAccessManagement: identityAndAccessManagement,
        dynamoDB: dynamoDB
    })

    function ableDisableDescription() {
        if (document.querySelector('#descriptionId').classList.contains(`${styles.visibleDescription}`)) {
                descriptionDisplay && setDescriptionDisplay(styles.invisible)

        } else {
            descriptionDisplay && setDescriptionDisplay(styles.visibleDescription)
            
        }

    }

    function descriptionOnMouseOver() {
        const descriptionNewStyle = document.querySelector('#descriptionId')
        descriptionNewStyle.classList.add(styles.descriptionNewStyleClass)
        
    }

    function descriptionOnMouseOut() {
        const descriptionDefaultStyle = document.querySelector('#descriptionId')
        descriptionDefaultStyle.classList.remove(styles.descriptionNewStyleClass)

    }

    return(
        <section            
            id='answerId' 
            className={`${styles.answerDescription} ${answerDescriptionDisplay}`}
        > 
            {itens && <h3 className={styles.itens}>{itens}</h3>} {/* itens que serão mostrados na PageMulti */}   
            <div
                onClick={ableDisableDescription}
                id='answerTitle'                
                className={styles.answerDisplay}
            >
                {item && <h3 className={styles.item}>{item}</h3>} {/* item que será mostrado na PageMain */}
                <h3>{(listUnicOptionsContext && answer) || (listMultiOptionsContext && answer)}</h3>
                <p>Click here for more information</p>
            </div>

            <p
                onMouseOver={descriptionOnMouseOver}
                onMouseOut={descriptionOnMouseOut} 
                id='descriptionId' 
                className={`${styles.descriptionDisplay} ${descriptionDisplay}`}
            >
                {imageDescription !== '' && <img className={styles.imageDescription} src={imagesDescriptions[imageDescription]} alt='img' />}
                {description}
            </p>

        </section>
    )
}

export default AnswerDescription;
