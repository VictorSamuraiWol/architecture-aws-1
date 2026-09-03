import styles from './PageBase.module.css'
import DataProvider from '../../Components/DataContext'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BiSolidVolumeFull, BiSolidVolumeMute } from "react-icons/bi"

function PageBase() {

    const [requestData, setRequestData] = useState(false) //constante booleana para saber se os dados da api foram recebidos com sucesso e mostrar as páginas em seguida ou não mostrar se não receber
    const [activePageFormsQuestionsOptions, setActivePageFormsQuestionsOptions] = useState(false) // verifica se a página Forms está ativa
    const [activePageDemo, setActivePageDemo] = useState(false)
    const [activePageMain, setActivePageMain] = useState(false)
    const [activePageMulti, setActivePageMulti] = useState(false)
    const [activePageThreeMulti, setActivePageThreeMulti] = useState(false)
    const [activeZeroImgMain, setActiveZeroImgMain] = useState(false)
    const [activeZeroImgMulti, setActiveZeroImgMulti] = useState(false)
    const [activeZeroImgThreeMulti, setActiveZeroImgThreeMulti] = useState(false)
    const [mute, setMute] = useState(false)
    const [numCorrectOption, setNumCorrectOption] = useState(0) // questões corretas das páginas main e multi
    const [numIncorrectOption, setNumIncorrectOption] = useState(0) // questões corretas das páginas main e multi  
    
    const dataResults = { // resultados estatísticos
        numCorrectOption, 
        numIncorrectOption, 
        allCorrectIncorrectResults: (numCorrectOption + numIncorrectOption), 
        pontuationResults: (numCorrectOption + numIncorrectOption > 0) ? `${Math.floor(Number((((numCorrectOption/(numCorrectOption + numIncorrectOption))*1000))))}/1000` : 0,
        performanceResults: (numCorrectOption + numIncorrectOption > 0) ? Number.isInteger(Number((((((numCorrectOption/(numCorrectOption+ numIncorrectOption))*1000))/1000)*100))) ? `${(((((numCorrectOption/(numCorrectOption+ numIncorrectOption))*1000))/1000)*100)}` : `${(((((numCorrectOption/(numCorrectOption+ numIncorrectOption))*1000))/1000)*100).toFixed(2)}` : 0
    }

    function validateSound() { // ativa ou desativa os sons e os icones dos sons
        mute === false 
            ? setMute(true)
            : setMute(false)
        
    }

    function repeatedAlternativesDefault(option1, option2) { // função padrão (será reutilizada) que verifica se as alternativas se repetem e retorna os que forem repetidos
        let repeated = '';
        
        if (option1 && ((option1[0] !== undefined && option1[0] !== '') || (option1[1] !== undefined && option1[1] !== '') || (option1[2] !== undefined && option1[2] !== '') || (option1[3] !== undefined && option1[3] !== ''))) {
        // condição: a opção tem que existir e pelo menos uma das alternativas não pode ser indefinida e nem vazia
            repeated = option1.filter((option, index) => 
            (option1.indexOf(option) !== index) && option !== ''); // indexOf(option) → primeira posição do item, index → posição atual, se forem diferentes → item repetido.

        } else if (option2 && ((option2[0] !== undefined && option2[0] !== '') || (option2[1] !== undefined && option2[1] !== '') || (option2[2] !== undefined && option2[2] !== '') || (option2[3] !== undefined && option2[3] !== ''))) {
        // condição: a opção tem que existir e pelo menos uma das alternativas não pode ser indefinida e nem vazia
            repeated = option2.filter((option, index) => 
            (option2.indexOf(option) !== index) && option !== ''); // indexOf(option) → primeira posição do item, index → posição atual, se forem diferentes → item repetido.

        }

        return repeated
  
    }

    function checkAlternativeAnswerDefault(option, multiOption, answer) { // função que verifica se há correspondência das alternativas da opção com a resposta da questão    
        let matchedOptionMain = null // variáveis usadas ao preencher o formulário 1    
        let matchedOptionMultiMain = null // variáveis usadas para preencher o formulário 2
        let matchedOptionThreeMultiMain = null // variáveis usadas para preencher o formulário 3  
        let checkWithoutMatched = false // variável utilizada ao preencher todos os formulários
        
        // filtra a opção única correspondente
        matchedOptionMain = option && option.filter(option => option === answer)[0]
        
        // retorna 'true' se os valores de 'Option1' e 'Option2' estiverem incluídos na resposta da questão múltipla
        matchedOptionMultiMain = activePageMulti && answer && answer.includes(multiOption && multiOption[0]) && answer.includes(multiOption && multiOption[1])

        // retorna 'true' se os valores de 'Option1', 'Option2' e 'Option3' estiverem incluídos na resposta da questão múltipla
        matchedOptionThreeMultiMain = activePageThreeMulti && answer && answer.includes(multiOption && multiOption[0]) && answer.includes(multiOption && multiOption[1]) && answer.includes(multiOption && multiOption[2])
        
        if (answer && option && (option[0] !== undefined && option[1] !== undefined && option[2] !== undefined && option[3] !== undefined) && matchedOptionMain === undefined) {
        checkWithoutMatched = true
        
        } else if (activePageMulti && answer && multiOption && (multiOption[0] !== undefined && multiOption[1] !== undefined && multiOption[2] !== undefined && multiOption[3] !== undefined) && matchedOptionMultiMain === false) {
        checkWithoutMatched = true

        } else if (activePageThreeMulti && answer && multiOption && (multiOption[0] !== undefined && multiOption[1] !== undefined && multiOption[2] !== undefined && multiOption[3] !== undefined) && matchedOptionThreeMultiMain === false) {
        checkWithoutMatched = true

        }

        return checkWithoutMatched
    
    }

    return(   
        <div className={styles.pageBaseOutlet}>
            <DataProvider>
                <Outlet 
                    context={{ mute, requestData, 
                        setRequestData, numCorrectOption, setNumCorrectOption, numIncorrectOption, 
                        setNumIncorrectOption, dataResults, activePageFormsQuestionsOptions, 
                        setActivePageFormsQuestionsOptions, repeatedAlternativesDefault,
                        checkAlternativeAnswerDefault, activePageDemo, setActivePageDemo, activePageMain, setActivePageMain, 
                        activePageMulti, setActivePageMulti, activePageThreeMulti, setActivePageThreeMulti, activeZeroImgMain, 
                        setActiveZeroImgMain, activeZeroImgMulti,  setActiveZeroImgMulti, activeZeroImgThreeMulti,  setActiveZeroImgThreeMulti
                    }} 
                />                

                {mute === false && (requestData || activePageFormsQuestionsOptions || activePageDemo) &&
                // condição: se o mute for false, e ter alguma requisição de dados backend ou a página de formulário estiver ativa
                    <BiSolidVolumeFull // unmute sound icon
                        onClick={validateSound}
                        id='soundFull'
                        className={styles.soundFull}
                    />
                }                

                {mute && (requestData || activePageFormsQuestionsOptions || activePageDemo) &&
                // condição: se o mute for true, e ter alguma requisição de dados backend ou a página de formulário estiver ativa
                    <BiSolidVolumeMute // mute sound icon
                        onClick={validateSound}
                        id='soundMute'
                        className={styles.soundMute}
                    />
                }

            </DataProvider>

        </div>
       
    )
}

export default PageBase
