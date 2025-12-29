import { useState } from 'react';
import Footer from '../../Components/Footer';
import styles from './PageBase.module.css';
import { Outlet } from 'react-router-dom';
import { BiSolidVolumeFull, BiSolidVolumeMute } from "react-icons/bi";
import backgroundImage from '../../imgs/cloud-neon-vibe.png';
import IllustrativePage from '../IllustrativePage';
import DataProvider from '../../Components/DataContext';

function PageBase() {

    const [validateSound, setValidateSound] = useState(true)

    //constante booleana para saber se os dados da api foram recebidos com sucesso e mostrar as páginas em seguida ou não mostrar se não receber
    const [requestData, setRequestData] = useState(false)
 
    const [showIllustrativePage, setShowIllustrativePage] = useState(false) // para habilitar ou não a página ilustrativa

    const [activePageFormsQuestionsOptions, setActivePageFormsQuestionsOptions] = useState(false)

    // questões corretas das páginas main e multi
    const [numCorrectOption, setNumCorrectOption] = useState(0)
    const [numIncorrectOption, setNumIncorrectOption] = useState(0)

    // inicializar com um valor que não existe no intervalo (número das questões) para poder ser gerado um número dentro do intervalo nas funções 'uniqueRandomMain e uniqueRandomMulti'
    const [lastRandomMain, setLastRandomMain] = useState(-1);
    const [lastRandomMulti, setLastRandomMulti] = useState(-1);

    // resultados estatísticos
    const dataResults = {
        numCorrectOption, 
        numIncorrectOption, 
        allCorrectIncorrectResults: (numCorrectOption + numIncorrectOption), 
        pontuationResults: (numCorrectOption + numIncorrectOption > 0) ? `${Math.floor(Number((((numCorrectOption/(numCorrectOption + numIncorrectOption))*1000))))}/1000` : 0,
        performanceResults: (numCorrectOption + numIncorrectOption > 0) ? `${(((((numCorrectOption/(numCorrectOption+ numIncorrectOption))*1000))/1000)*100).toFixed(2)}%` : 0
    }

    // função que habilita ou desabilita os ícones dos audios
    function validateSoundBaseFunc() {
        const soundFull = document.querySelector('#soundFullBaseId')
        const soundMute = document.querySelector('#soundMuteBaseId')
        if (validateSound === true) {
            setValidateSound(false)
            soundFull.style.display = 'none'
            soundMute.style.display = 'flex'

        } 
        else {
            setValidateSound(true)
            soundFull.style.display = 'flex'
            soundMute.style.display = 'none'

        }
        
    }
    
    // torna showIllustrativePage true para verificar se mostrará ou não a página ilustrativa, dependendo do recebimento dos dados do backend    
    setTimeout(() => {
        setShowIllustrativePage(true)
    }, 1000)

    function repeatedAlternativesDefault(option1, option2) { // função que verifica se as alternativas se repetem e retorna os que forem repetidos
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

    return(   

        <div className={styles.pageBaseOutlet}>
            <DataProvider>
                {(requestData && activePageFormsQuestionsOptions === false) && 
                <img 
                    className={`backgroundImageClass ${styles.backgroundImage}`} 
                    src={backgroundImage} 
                    alt='imagem de fundo'
                />}          

                <Outlet 
                    context={{ validateSound, setValidateSound, requestData, 
                        setRequestData, numCorrectOption, setNumCorrectOption, numIncorrectOption, 
                        setNumIncorrectOption, dataResults, lastRandomMain, setLastRandomMain, 
                        lastRandomMulti, setLastRandomMulti, activePageFormsQuestionsOptions, 
                        setActivePageFormsQuestionsOptions, repeatedAlternativesDefault
                        }} 
                />

                {(requestData && activePageFormsQuestionsOptions === false) && <BiSolidVolumeFull 
                    onClick={validateSoundBaseFunc} 
                    id='soundFullBaseId' 
                    className={styles.soundFull} 
                    />}

                {(requestData && activePageFormsQuestionsOptions === false) && <BiSolidVolumeMute 
                    onClick={validateSoundBaseFunc} 
                    id='soundMuteBaseId' 
                    className={styles.soundMute}
                    />}

                {(requestData || activePageFormsQuestionsOptions) && <Footer />}

                {showIllustrativePage && requestData === false && activePageFormsQuestionsOptions === false && <IllustrativePage />}
                
            </DataProvider>

        </div>
       
    )
}

export default PageBase;
