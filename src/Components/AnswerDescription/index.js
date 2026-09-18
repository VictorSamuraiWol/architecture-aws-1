import styles from './AnswerDescription.module.css'
import ModalDescription from '../Modal/ModalDescription'
import iconNotFound from '../../imgs/answers-imgs/description/icons/iconNotFound.png'
import apiGateway from '../../imgs/answers-imgs/description/icons/API_Gateway.png'
import dynamoDB from '../../imgs/answers-imgs/description/icons/DynamoDB.png'
import ec2 from '../../imgs/answers-imgs/description/icons/EC2.png'
import elasticLoadBalancing from '../../imgs/answers-imgs/description/icons/Elastic_Load_Balancing.png'
import fsxForLustre from '../../imgs/answers-imgs/description/icons/FSx_for_Lustre.png'
import globalAccelerator from '../../imgs/answers-imgs/description/icons/Global_Accelerator.png'
import identityAndAccessManagement from '../../imgs/answers-imgs/description/icons/Identity_and_Access_Management.png'
import simpleQueueService from '../../imgs/answers-imgs/description/icons/Simple_Queue_Service.png'
import simpleStoragesService from '../../imgs/answers-imgs/description/icons/Simple_Storage_Service.png'
import storageGateway from '../../imgs/answers-imgs/description/icons/Storage_Gateway.png'
import none from '../../imgs/imageNotFound.png'
import description100 from '../../imgs/answers-imgs/description/detailsDescriptions/description100.png'
import { useContext, useState } from 'react'
import { DataContext } from '../DataContext'

function AnswerDescription({ 
    questionMain, questionMulti, answer, description, iconDescription, answerDescriptionDisplay, item, itens
}) {

    const { listUnicOptionsContext, listMultiOptionsContext, listThreeMultiOptionsContext } = useContext(DataContext)

    // todos os icons das descrições das respostas
    const [iconsDescriptions] = useState({
        iconNotFound: iconNotFound,
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

    // todos as imagens das descrições das respostas
    const [imagesDescriptions] = useState({
        none: none, 
        description100: description100
    })

    return(
        <section            
            id='answerId' 
            className={`${styles.answerDescription} ${answerDescriptionDisplay}`}
        > 
            {itens && <h3 className={styles.itens}>{itens}</h3>} {/* itens que serão mostrados na PageMulti */}   
            <div
                id='answerTitle'                
                className={styles.answerDisplay}
            >
                {item && <span className={styles.item}>{item}</span>} {/* item que será mostrado na PageMain */}
                <h3 className={styles.textAnswer}>{(listUnicOptionsContext && answer) || (listMultiOptionsContext && answer) || (listThreeMultiOptionsContext && answer)}</h3>
            </div>

            <ModalDescription 
                iconsDescriptions={iconsDescriptions}
                iconDescription={iconDescription}
                imagesDescriptions={imagesDescriptions}
                description={description}
                questionMain={questionMain}
                questionMulti={questionMulti}
            />

        </section>
    )
}

export default AnswerDescription
