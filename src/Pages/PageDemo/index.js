import styles from './PageDemo.module.css'
import Header from '../../Components/Header'
import Main from '../../Components/Main'
import backgroundImage from '../../imgs/cloud-neon-vibe.png'
import Footer from '../../Components/Footer'
import { useOutletContext } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

function PageDemo() {

  const { requestData, setRequestData, activePageDemo, setActivePageDemo, setActivePageMain, setActivePageMulti, setActivePageThreeMulti, activePageFormsQuestionsOptions, setActivePageFormsQuestionsOptions } = useOutletContext()

  const [questionDemo] = useState({
    "questionText": "A leading online gaming company is migrating its flagship application to AWS Cloud for delivering its online games to users across the world. The company would like to use a Network Load Balancer to handle millions of requests per second. The engineering team has provisioned multiple instances in a public subnet and specified these instance IDs as the targets for the NLB. As a solutions architect, can you help the engineering team understand the correct routing mechanism for these target instances?",
    "correctAnswer": "Traffic is routed to instances using the primary private IP address specified in the primary network interface for the instance.",
    "imageKey": "",
    "description": "A Network Load Balancer functions at the fourth layer of the Open Systems Interconnection (OSI) model. It can handle millions of requests per second. After the load balancer receives a connection request, it selects a target from the target group for the default rule. It attempts to open a TCP connection to the selected target on the port specified in the listener configuration. Request Routing and IP Addresses - If you specify targets using an instance ID, traffic is routed to instances using the primary private IP address specified in the primary network interface for the instance. The load balancer rewrites the destination IP address from the data packet before forwarding it to the target instance. If you specify targets using IP addresses, you can route traffic to an instance using any private IP address from one or more network interfaces. This enables multiple applications on an instance to use the same port. Note that each network interface can have its security group. The load balancer rewrites the destination IP address before forwarding it to the target.",
    "questionNumber": "0",
    "id": "0"
  })

  const [optionDemo] = useState([
    "Traffic is routed to instances using the primary elastic IP address specified in the primary network interface for the instance.",
    "Traffic is routed to instances using the instance ID specified in the primary network interface for the instance.",
    "Traffic is routed to instances using the primary private IP address specified in the primary network interface for the instance.",
    "Traffic is routed to instances using the primary public IP address specified in the primary network interface for the instance.",
    ""
  ])

  const [answerDescriptionDisplay, setAnswerDescriptionDisplay] = useState(styles.invisibleAnswerDescription)
  const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisibleDescription)

  useEffect(() => {
    // habilitar os icones de som, imagem e footer presentes na 'página Base' ao renderizar o conteúdo da página Main
    setRequestData(true)

    setActivePageDemo(true)

    setActivePageMain(false) 
    setActivePageMulti(false) 
    setActivePageThreeMulti(false)
    setActivePageFormsQuestionsOptions(false)

  }, [setRequestData, setActivePageDemo, setActivePageMain, setActivePageMulti, setActivePageThreeMulti, setActivePageFormsQuestionsOptions])

  // O useRef serve para armazenar um valor mutável que persiste entre renders sem provocar re-render do componente, neste caso, guarda o último número randômico
  // usado na função 'uniqueRandomDemo()'
  const lastRandomMainRef = useRef(null)
  
  // função para garantir que o novo número aleatório seja sempre diferente do anterior
  const uniqueRandomDemo = (dataLength) => { // função para obter um número randômico diferente do anterior, evitando repetição
    if (dataLength <= 1) return 0

    let random

    do {
        random = Math.floor(Math.random() * dataLength)

    }
    while (random === lastRandomMainRef.current) // repete até obter um número diferente

    lastRandomMainRef.current = random

    return random            
  
  } 

  return (
    <div className={styles.pageDemoStyles}>
      <div 
          id='allQuestionsDemoId' 
          className={styles.allQuestionsDemoClass} 
          key='0'
      >
        {/* background image */}
        {(requestData && activePageFormsQuestionsOptions === false) && 
        <img 
            className={`backgroundImageClass ${styles.backgroundImage}`} 
            src={backgroundImage} 
            alt='backgoundIimage'
        />}

        {/* reutilizando componentes da página Main */}
        <Header title="Architecture Questions - Randomly" />

        <Main 
          question="A leading online gaming company is migrating its flagship application to AWS Cloud for delivering its online games to users across the world. The company would like to use a Network Load Balancer to handle millions of requests per second. The engineering team has provisioned multiple instances in a public subnet and specified these instance IDs as the targets for the NLB. As a solutions architect, can you help the engineering team understand the correct routing mechanism for these target instances?"
          answer="Traffic is routed to instances using the primary private IP address specified in the primary network interface for the instance."
          imageDescription=''
          description="A Network Load Balancer functions at the fourth layer of the Open Systems Interconnection (OSI) model. It can handle millions of requests per second. After the load balancer receives a connection request, it selects a target from the target group for the default rule. It attempts to open a TCP connection to the selected target on the port specified in the listener configuration. Request Routing and IP Addresses - If you specify targets using an instance ID, traffic is routed to instances using the primary private IP address specified in the primary network interface for the instance. The load balancer rewrites the destination IP address from the data packet before forwarding it to the target instance. If you specify targets using IP addresses, you can route traffic to an instance using any private IP address from one or more network interfaces. This enables multiple applications on an instance to use the same port. Note that each network interface can have its security group. The load balancer rewrites the destination IP address before forwarding it to the target."
          questionNumber='0'
          elementId='0'
          answerDescriptionDisplay={answerDescriptionDisplay}
          setAnswerDescriptionDisplay={setAnswerDescriptionDisplay}
          descriptionDisplay={descriptionDisplay}
          setDescriptionDisplay={setDescriptionDisplay}
          uniqueRandomMain={uniqueRandomDemo}             
          questionMain={questionDemo}
          optionMain={optionDemo}                
          optionMainNumberId={[0, 0]}
          optNum1={0}
          optNum2={1}
          optNum3={2}
          optNum4={3}
          optNum5={4}
          activeZeroImgMain={false}
          activePageDemo={activePageDemo}
        />

        <Footer />

      </div>

    </div>
      
  )

}

export default PageDemo
