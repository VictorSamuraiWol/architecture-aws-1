import styles from './FormsNewQuestionsOptions.module.css'
import FieldsQuestionsOptions from './FieldsQuestionsOptions'
import ButtonDefault from '../ButtonDefault'
import saveAudio from '../../audios/save.mp3'
import errorAudio from '../../audios/errorForms.mp3'
import PopupRepeatedAlternatives from '../Popups/PopupRepeatedAlternatives'
import PopupCheckAlternativeAnswer from '../Popups/PopupCheckAlternativeAnswer'
import PopupCompareAllQuestionsAllOptions from '../Popups/PopupCompareAllQuestionsAllOptions'
import PopupMessagesTitlesForms from '../Popups/PopupMessagesTitlesForms'
import PopupCheckNumbers from '../Popups/PopupCheckNumbers'
import PopupCheckRequiredFields from '../Popups/PopupCheckRequiredFields'
import PopupQuestionSuccessfully from '../Popups/PopupQuestionSuccessfully'
import PopupOptionSuccessfully from '../Popups/PopupOptionSuccessfully'
import { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { DataContext } from '../DataContext'
import { v4 as uuidv4 } from 'uuid'

function FormsNewQuestionsOptions() {

    const uniqueId = uuidv4() // gerar uma id aleatória para a questão e a opção correspondente

    const saveSound = new Audio(saveAudio) // som ao salvar corretamente

    const errorSound = new Audio(errorAudio) // som ao tentar salvar incorretamente

    const { listUnicQuestionsContext, listUnicOptionsContext, listMultiQuestionsContext, listMultiOptionsContext, listThreeMultiQuestionsContext, listThreeMultiOptionsContext, postApi, setPostApi } = useContext(DataContext)

    // chamando a função 'repeatedAlternativesDefault' através do 'useOutletContext' criada na PageBase
    const { setActivePageFormsQuestionsOptions, repeatedAlternativesDefault, mute, setActivePageDemo, setActivePageMain, setActivePageMulti, setActivePageThreeMulti  } = useOutletContext()

    // atributos da questão única (formulário 1):
    const [newQuestionTextMain, setNewQuestionTextMain] = useState('')
    const [newImageQuestionMain, setNewImageQuestionMain] = useState('')
    const [newCorrectAnswerMain, setNewCorrectAnswerMain] = useState('')
    const [newIconDescriptionMain, setNewIconDescriptionMain] = useState('')
    const [newDescriptionMain, setNewDescriptionMain] = useState('')
    const [newImageDescriptionMain, setNewImageDescriptionMain] = useState('')
    const [newQuestionNumberMain, setNewQuestionNumberMain] = useState('')

    // atributos da opção única (formulário 2):
    const [newOptionAMain, setNewOptionAMain] = useState('')
    const [newOptionBMain, setNewOptionBMain] = useState('')
    const [newOptionCMain, setNewOptionCMain] = useState('')
    const [newOptionDMain, setNewOptionDMain] = useState('')
    const [newOptionEMain, setNewOptionEMain] = useState('')
    const [newOptionNumberMain, setNewOptionNumberMain] = useState('')

    // atributos da questão múltipla (formulário 3)
    const [newQuestionTextMulti, setNewQuestionTextMulti] = useState('')
    const [newImageQuestionMulti, setNewImageQuestionMulti] = useState('')
    const [newCorrectAnswerMulti, setNewCorrectAnswerMulti] = useState('')
    const [newIconDescriptionMulti, setNewIconDescriptionMulti] = useState('')
    const [newDescriptionMulti, setNewDescriptionMulti] = useState('')
    const [newImageDescriptionMulti, setNewImageDescriptionMulti] = useState('')
    const [newQuestionNumberMulti, setNewQuestionNumberMulti] = useState('')

    // atributos da opção múltipla (formulário 4)
    const [newOptionAMulti, setNewOptionAMulti] = useState('')
    const [newOptionBMulti, setNewOptionBMulti] = useState('')
    const [newOptionCMulti, setNewOptionCMulti] = useState('')
    const [newOptionDMulti, setNewOptionDMulti] = useState('')
    const [newOptionEMulti, setNewOptionEMulti] = useState('')
    const [newOptionNumberMulti, setNewOptionNumberMulti] = useState('')

    // atributos da questão múltipla (formulário 5)
    const [newQuestionTextThreeMulti, setNewQuestionTextThreeMulti] = useState('')
    const [newImageQuestionThreeMulti, setNewImageQuestionThreeMulti] = useState('')
    const [newCorrectAnswerThreeMulti, setNewCorrectAnswerThreeMulti] = useState('')
    const [newIconDescriptionThreeMulti, setNewIconDescriptionThreeMulti] = useState('')
    const [newDescriptionThreeMulti, setNewDescriptionThreeMulti] = useState('')
    const [newImageDescriptionThreeMulti, setNewImageDescriptionThreeMulti] = useState('')
    const [newQuestionNumberThreeMulti, setNewQuestionNumberThreeMulti] = useState('')

    // atributos da opção múltipla (formulário 6)
    const [newOptionAThreeMulti, setNewOptionAThreeMulti] = useState('')
    const [newOptionBThreeMulti, setNewOptionBThreeMulti] = useState('')
    const [newOptionCThreeMulti, setNewOptionCThreeMulti] = useState('')
    const [newOptionDThreeMulti, setNewOptionDThreeMulti] = useState('')
    const [newOptionEThreeMulti, setNewOptionEThreeMulti] = useState('')
    const [newOptionFThreeMulti, setNewOptionFThreeMulti] = useState('')
    const [newOptionNumberThreeMulti, setNewOptionNumberThreeMulti] = useState('')

    // lista de todas as alternativas da opção única (formulário 2)
    const [optionForm2, setOptionForm2] = useState('')

    // lista de todas as alternativas da opção múltipla (formulário 4)
    const [optionForm4, setOptionForm4] = useState('')

    // lista de todas as alternativas da opção múltipla (formulário 6)
    const [optionForm6, setOptionForm6] = useState('')

    const [readyToSendForm1, setReadyToSendForm1] = useState(false)
    const [readyToSendForm2, setReadyToSendForm2] = useState(false)
    const [readyToSendForm3, setReadyToSendForm3] = useState(false)
    const [readyToSendForm4, setReadyToSendForm4] = useState(false)
    const [readyToSendForm5, setReadyToSendForm5] = useState(false)
    const [readyToSendForm6, setReadyToSendForm6] = useState(false)

    // capturar a mensagem de alerta para exibir na tela dos formulários
    const [alertMessage, setAlertMessage] = useState('')
    // capturando os números usados nos formulários 1 e 3
    const [listNumbersForms1and3and5, setListNumbersForms1and3and5] = useState([])
    // capturando os números usados nos formulários 2 e 4
    const [listNumbersForms2and4and6, setListNumbersForms2and4and6] = useState([])

    // ativa ou desativa o componente 'PopupRepeatedAlternatives' no formulário 2
    const [activePopupRepeatedAlternativesForms2, setActivePopupRepeatedAlternativesForms2] = useState(false) 
    // ativa ou desativa o componente 'PopupRepeatedAlternatives' nao formulário 4
    const [activePopupRepeatedAlternativesForms4, setActivePopupRepeatedAlternativesForms4] = useState(false)
    // ativa ou desativa o componente 'PopupRepeatedAlternatives' nao formulário 6
    const [activePopupRepeatedAlternativesForms6, setActivePopupRepeatedAlternativesForms6] = useState(false)   

    // ativa ou desativa o componente 'PopupCheckAlternativeAnswer'
    const [activePopupcheckAlternativeAnswerForms1, setActivePopupcheckAlternativeAnswerForms1] = useState(false) 
    const [activePopupcheckAlternativeAnswerForms2, setActivePopupcheckAlternativeAnswerForms2] = useState(false)      
    const [activePopupcheckAlternativeAnswerForms3, setActivePopupcheckAlternativeAnswerForms3] = useState(false)     
    const [activePopupcheckAlternativeAnswerForms4, setActivePopupcheckAlternativeAnswerForms4] = useState(false)     
    const [activePopupcheckAlternativeAnswerForms5, setActivePopupcheckAlternativeAnswerForms5] = useState(false)    
    const [activePopupcheckAlternativeAnswerForms6, setActivePopupcheckAlternativeAnswerForms6] = useState(false)

    // ativa ou desativa o componente 'PopupCompareAllQuestionsAllOptions'
    const [activePopupCompareAllQuestionsAllOptions, setActivePopupCompareAllQuestionsAllOptions] = useState(false)

    // ativa ou desativa o componente 'PopupMessagesTitlesForms'
    const [activePopupMessagesTitlesForms1and2, setActivePopupMessagesTitlesForms1and2] = useState(false)
    const [activePopupMessagesTitlesForms3and4, setActivePopupMessagesTitlesForms3and4] = useState(false)
    const [activePopupMessagesTitlesForms5and6, setActivePopupMessagesTitlesForms5and6] = useState(false)

    // ativa ou desativa o componente 'PopupCheckNumbers'
    const [activePopupCheckNumbers1, setActivePopupCheckNumbers1] = useState(false)
    const [activePopupCheckNumbers2, setActivePopupCheckNumbers2] = useState(false)

    // ativa ou desativa o componente 'PopupCheckRequiredFields'
    const [activePopupCheckRequiredFields1, setActivePopupCheckRequiredFields1] = useState(false)
    const [activePopupCheckRequiredFields2, setActivePopupCheckRequiredFields2] = useState(false)
    const [activePopupCheckRequiredFields3, setActivePopupCheckRequiredFields3] = useState(false)
    const [activePopupCheckRequiredFields4, setActivePopupCheckRequiredFields4] = useState(false)
    const [activePopupCheckRequiredFields5, setActivePopupCheckRequiredFields5] = useState(false)
    const [activePopupCheckRequiredFields6, setActivePopupCheckRequiredFields6] = useState(false)

    // ativa ou desativa o componente 'PopupQuestionSuccessfully'
    const [activePopupQuestionSuccessfull1, setActivePopupQuestionSuccessfull1] = useState(false)
    const [activePopupQuestionSuccessfull2, setActivePopupQuestionSuccessfull2] = useState(false)
    const [activePopupQuestionSuccessfull3, setActivePopupQuestionSuccessfull3] = useState(false)

    // ativa ou desativa o componente 'PopupOptionSuccessfully'
    const [activePopupOptionSuccessfull1, setActivePopupOptionSuccessfull1] = useState(false)
    const [activePopupOptionSuccessfull2, setActivePopupOptionSuccessfull2] = useState(false)
    const [activePopupOptionSuccessfull3, setActivePopupOptionSuccessfull3] = useState(false)
    
    const [colorIncorrect] = useState('#B71C1C') // passando a cor incorreta
    const [matchedOptionMainPopup, setMatchedOptionMainPopup] = useState('') // capturar a opção Main (form1)
    const [matchedOptionMainPopupNumber, setMatchedOptionMainPopupNumber] = useState('') // capturar o número da opção Main (form1)
    const [matchedQuestionMainPopupAnswer, setMatchedQuestionMainPopupAnswer] = useState('') // capturar a resposta da questão Main (form2)
    const [matchedQuestionMainPopupNumber, setMatchedQuestionMainPopupNumber] = useState('') // capturar o número da questão Main (form2)
    const [matchedOptionMultiPopupAnswers, setMatchedOptionMultiPopupAnswers] = useState('') // capturar as duas alternativas corretas da opção Multi (form3)
    const [matchedOptionMultiPopupNumber, setMatchedOptionMultiPopupNumber] = useState('') // capturar o número da opção Multi (form3)
    const [matchedQuestionMultiPopupAnswer, setMatchedQuestionMultiPopupAnswer] = useState('') // capturar a resposta da questão Multi (form4) 
    const [matchedQuestionMultiPopupNumber, setMatchedQuestionMultiPopupNumber] = useState('') // capturar o número da questão Multi (form4)
    const [matchedOptionThreeMultiPopupAnswers, setMatchedOptionThreeMultiPopupAnswers] = useState('') // capturar as três alternativas corretas da opção ThreeMulti (form5)
    const [matchedOptionThreeMultiPopupNumber, setMatchedOptionThreeMultiPopupNumber] = useState('') // capturar o número da opção ThreeMulti (form5)
    const [matchedQuestionThreeMultiPopupAnswer, setMatchedQuestionThreeMultiPopupAnswer] = useState('') // capturar a resposta da questão ThreeMulti (form6) 
    const [matchedQuestionThreeMultiPopupNumber, setMatchedQuestionThreeMultiPopupNumber] = useState('') // capturar o número da questão ThreeMulti (form6)

    useEffect(() => {
        setActivePageFormsQuestionsOptions(true) // verifica se a página Forms está ativa
        
        setActivePageDemo(false)
        setActivePageMain(false)
        setActivePageMulti(false)
        setActivePageThreeMulti(false)

    }, [setActivePageFormsQuestionsOptions, setActivePageDemo, setActivePageMain, setActivePageMulti, setActivePageThreeMulti])

    useEffect(() => {
        // capturando o número de todas as questões presentes nos formulários 1 e 3
        listUnicQuestionsContext && listMultiQuestionsContext && listThreeMultiQuestionsContext && setListNumbersForms1and3and5([...listUnicQuestionsContext.map(questions => questions.questionNumber), ...listMultiQuestionsContext.map(questions => questions.questionNumber), ...listThreeMultiQuestionsContext.map(questions => questions.questionNumber)])
        
        // capturando o número de todas as opções presentes nos formulários 2 e 4
        listUnicOptionsContext && listMultiOptionsContext && listThreeMultiOptionsContext && setListNumbersForms2and4and6([...listUnicOptionsContext.map(options => options.optionNumber), ...listMultiOptionsContext.map(options => options.optionNumber), ...listThreeMultiOptionsContext.map(options => options.optionNumber)])

    },[listUnicQuestionsContext, listMultiQuestionsContext, listThreeMultiQuestionsContext, listUnicOptionsContext, listMultiOptionsContext, listThreeMultiOptionsContext])

    useEffect(() => {
        // atualizando as listas dos formulários 2 e 4 com o valores colocados nos campos das alternativas
        setOptionForm2([newOptionAMain, newOptionBMain, newOptionCMain, newOptionDMain, newOptionEMain])
        setOptionForm4([newOptionAMulti, newOptionBMulti, newOptionCMulti, newOptionDMulti, newOptionEMulti])
        setOptionForm6([newOptionAThreeMulti, newOptionBThreeMulti, newOptionCThreeMulti, newOptionDThreeMulti, newOptionEThreeMulti, newOptionFThreeMulti])

    }, [newOptionAMain, newOptionBMain, newOptionCMain, newOptionDMain, newOptionEMain, 
        newOptionAMulti, newOptionBMulti, newOptionCMulti, newOptionDMulti, newOptionEMulti,
        newOptionAThreeMulti, newOptionBThreeMulti, newOptionCThreeMulti, newOptionDThreeMulti, newOptionEThreeMulti, newOptionFThreeMulti
       ])

    // função utilizando POST para salvar os dados do form1 na API
    const onSaveForm1 = async (e) => {
        e.preventDefault()
        let data = ''
        let isValid = true // variável que precisa de resposta imediata para validação, então não precisa usar 'useState' para mudança de estado
        setPostApi(false) // volta ao estado inicial

        function numberValidationForms() { // função que verifica se o número da questão que irá ser criada já existe na lista das questões, para evitar repetição
            listNumbersForms1and3and5.forEach(number => {
                if ((number === newQuestionNumberMain) && (number !== '' && newQuestionNumberMain !== '' )) {
                    isValid = false
                    
                }                 
            })

        }
    
        numberValidationForms() // chamando a função que verifica se o número da questão que irá ser criada já existe na lista das questões

        if (isValid === false) { // se o número da questão for repetido ativa o 'PopupCheckNumbers'
                setActivePopupCheckNumbers1(true)
                
        } else if (isValid === true && checkAlternativeAnswer() === true && (newQuestionTextMain && newCorrectAnswerMain && newDescriptionMain && newQuestionNumberMain)) {          
                setActivePopupcheckAlternativeAnswerForms1(true) // ativa o popup

        } else {
            // colocando somente os campos que serão obrigatórios
            if (isValid === true && newQuestionTextMain && newCorrectAnswerMain && newDescriptionMain && newQuestionNumberMain) { 
                data = {
                    questionText: newQuestionTextMain,
                    imageQuestion: newImageQuestionMain, // não obrigatório
                    correctAnswer: newCorrectAnswerMain,
                    iconDescription: newIconDescriptionMain, // não obrigatório
                    description: newDescriptionMain,
                    imageDescription: newImageDescriptionMain, // não obrigatório
                    questionNumber: newQuestionNumberMain,
                    id: uniqueId
                }

                // limpar todas as cores das labels para as cores iniciais depois submeter os dados
                function cleanLabels() {
                    const form1 = document.querySelector("#form1")
                    const fields = form1.querySelectorAll(".labelTextarea")
        
                    fields.forEach(field => {
                            const label = field.children[0]
                            label.style.color = ""
        
                    })

                }

                cleanLabels()
                mute === false && saveSound.play() // toca o som 'saveSound'

            } else if (isValid === true && (newQuestionTextMain === "" || newCorrectAnswerMain === "" || newDescriptionMain === "" || newQuestionNumberMain === "")) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
                function redVoidField() {
                    const form1 = document.querySelector("#form1")
                    const fields = form1.querySelectorAll(".labelTextarea")

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0]
                        const textAreaInput = fields[i].children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Image Question:" && label.innerText !== "Icon Description:" && label.innerText !== "Image Description:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }

                    }

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'                
                console.error('Error in data received from Form 1!')
                setActivePopupCheckRequiredFields1(true) // ativa o 'PopupCheckRequiredFields'

            } else {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
                function redVoidField() {
                    const form1 = document.querySelector("#form1")
                    const fields = form1.querySelectorAll(".labelTextarea")

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0]
                        const textAreaInput = fields[i].children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Image Question:" && label.innerText !== "Icon Description:" && label.innerText !== "Image Description:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }

                    }

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                console.error('Error in data received from Form 1!')

            }     
                
            try {
                const response = await fetch('http://localhost:3001/listQuestionsMain', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)                
                })
                            
                if (response.ok) {
                    console.log(data, 'Data successfully submitted from Form 1. Please complete one form at a time.')
                    setActivePopupQuestionSuccessfull1(true)
                    setReadyToSendForm1(true)
                    setReadyToSendForm2(true)
                    setReadyToSendForm3(true)
                    setReadyToSendForm4(true)
                    setReadyToSendForm5(true)
                    setReadyToSendForm6(true)
                    cleanAllForms() // limpar o formulário             
                    setPostApi(true) // tornar verdadeiro a cada POST

                }
                
            } catch(error) {
                console.error('Error while submitting data', error)

            }

        }

    }

    // função utilizando POST para salvar os dados do form2 na API
    const onSaveForm2 = async (e) => {
        e.preventDefault()
        let data = ''
        let isValid = true // variável que precisa de resposta imediata para validação, então não precisa usar 'useState' para mudança de estado
        setPostApi(false) // volta ao estado inicial

        function numberValidationForms() { // função que verifica se o número da opção que irá ser criada já existe na lista das opções, para evitar repetição
            listNumbersForms2and4and6.forEach(number => {
                if ((number === newOptionNumberMain) && (number !== '' && newOptionNumberMain !== '' )) {
                    isValid = false
                    
                }
            })

        }
    
        numberValidationForms() // chamando a função que verifica se o número da opção que irá ser criada já existe na lista das opções

        if (isValid === false) { // se o número da opção for repetido ativa o 'PopupCheckNumbers'
            setActivePopupCheckNumbers2(true)

        } else if (isValid === true && checkAlternativeAnswer() === true && (newOptionAMain && newOptionBMain && newOptionCMain && newOptionDMain && newOptionNumberMain)) {
            setActivePopupcheckAlternativeAnswerForms2(true) // ativa o popup

        } else {
            // colocando somente os campos que serão obrigatórios
            if (isValid === true && (newOptionAMain && newOptionBMain && newOptionCMain && newOptionDMain && newOptionNumberMain)) { 
                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem
                    setActivePopupRepeatedAlternativesForms2(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms2(false) // desativa o popup em 15s

                    }, 15000)
                
                } else {
                    data = {
                        optionA: newOptionAMain,
                        optionB: newOptionBMain,
                        optionC: newOptionCMain,
                        optionD: newOptionDMain,
                        optionE: newOptionEMain, // não obrigatório
                        optionNumber: newOptionNumberMain,
                        id: uniqueId
                    }

                    // limpar todas as cores das labels para as cores iniciais depois submeter os dados
                    function cleanLabels() {
                        const form2 = document.querySelector("#form2")
                        const fields = form2.querySelectorAll(".labelTextarea")
            
                        fields.forEach(field => {
                                const label = field.children[0]
                                label.style.color = ""                                            
                        })

                    }

                    cleanLabels()
                    setActivePopupRepeatedAlternativesForms2(false) // desativar o popup, caso esteja visível na tela
                    mute === false && saveSound.play() // toca o som 'saveSound'

                }

            } else if (isValid === true && (newOptionAMain === "" || newOptionBMain === "" || newOptionCMain === "" || newOptionDMain === "" || newOptionNumberMain === "")) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
                function redVoidField() {
                    const form2 = document.querySelector("#form2")
                    const fields = form2.querySelectorAll(".labelTextarea")

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0]
                        const textAreaInput = fields[i].children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option E:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }

                    }

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'                
                console.error('Error in data received from Form 2!')
                setActivePopupCheckRequiredFields2(true) // ativa o 'PopupCheckRequiredFields'

                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem
                    setActivePopupRepeatedAlternativesForms2(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms2(false) // desativa o popup em 15s

                    }, 15000)
                
                }
                
            } else {
            //condição 5: o que não atender as condições acima
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
                function redVoidField() {
                    const form2 = document.querySelector("#form2")
                    const fields = form2.querySelectorAll(".labelTextarea")

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0]
                        const textAreaInput = fields[i].children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option E:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }

                    }

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                console.error('Error in data received from Form 2!')

            }

            try {
                const response = await fetch('http://localhost:3001/listOptionsMain', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                })       
            
                if (response.ok) {
                    console.log(data, 'Data successfully submitted from Form 2. Please complete one form at a time.')
                    setActivePopupOptionSuccessfull1(true)
                    setReadyToSendForm1(true)
                    setReadyToSendForm2(true)
                    setReadyToSendForm3(true)
                    setReadyToSendForm4(true)
                    setReadyToSendForm5(true)
                    setReadyToSendForm6(true)
                    cleanAllForms() // limpar o formulário                    
                    setPostApi(true) // tornar verdadeiro a cada POST

                }

            } catch(error) {
                console.error('Error while submitting data', error)
                
            }

        }
                
    }

    // função utilizando POST para salvar os dados do form3 na API
    const onSaveForm3 = async (e) => {
        e.preventDefault()
        let data = ''
        let isValid = true // variável que precisa de resposta imediata para validação, então não precisa usar 'useState' para mudança de estado
        setPostApi(false) // volta ao estado inicial

        function numberValidationForms() { // função que verifica se o número da questão que irá ser criada já existe na lista das questões, para evitar repetição
            listNumbersForms1and3and5.forEach(number => {
                if ((number === newQuestionNumberMulti) && (number !== '' && newQuestionNumberMulti !== '' )) {
                    isValid = false
                    
                } 
            })

        }
    
        numberValidationForms() // chamando a função que verifica se o número da questão que irá ser criada já existe na lista das questões

        if (isValid === false) { // se o número da questão for repetido ativa o 'PopupCheckNumbers'
            setActivePopupCheckNumbers1(true)

        } else if (isValid === true && checkAlternativeAnswer() === true && (newQuestionTextMulti && newCorrectAnswerMulti && newDescriptionMulti && newQuestionNumberMulti)) {
            setActivePopupcheckAlternativeAnswerForms3(true) // ativa o popup

        } else {
            // colocando somente os campos que serão obrigatórios
            if (isValid === true && newQuestionTextMulti && newCorrectAnswerMulti && newDescriptionMulti && newQuestionNumberMulti) {  
                data = {
                    questionText: newQuestionTextMulti,
                    imageQuestion: newImageQuestionMulti, // não obrigatório
                    correctAnswer: newCorrectAnswerMulti,
                    iconDescription: newIconDescriptionMulti, // não obrigatório
                    description: newDescriptionMulti,
                    imageDescription: newImageDescriptionMulti, // não obrigatório
                    questionNumber: newQuestionNumberMulti,
                    id: uniqueId
                }

                // limpar todas as cores das labels para as cores iniciais depois submeter os dados
                function cleanLabels() {
                    const form3 = document.querySelector("#form3")
                    const fields = form3.querySelectorAll(".labelTextarea")
        
                    fields.forEach(field => {
                            const label = field.children[0]
                            label.style.color = ""        
                    })

                }

                cleanLabels()
                mute === false && saveSound.play() // toca o som 'saveSound'

            } else if (isValid === true && (newQuestionTextMulti === "" || newCorrectAnswerMulti === "" || newDescriptionMulti === "" || newQuestionNumberMulti === "")) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
                function redVoidField() {
                    const form3= document.querySelector("#form3")
                    const fields = form3.querySelectorAll(".labelTextarea")

                    fields.forEach(field => {
                        const label = field.children[0]
                        const textAreaInput = field.children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Image Question:" && label.innerText !== "Icon Description:" && label.innerText !== "Image Description:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                console.error('Error in data received from Form 3!')
                setActivePopupCheckRequiredFields3(true) // ativa o 'PopupCheckRequiredFields'

            } else {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
                function redVoidField() {
                    const form3= document.querySelector("#form3")
                    const fields = form3.querySelectorAll(".labelTextarea")

                    fields.forEach(field => {
                        const label = field.children[0]
                        const textAreaInput = field.children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Image Question:" && label.innerText !== "Icon Description:" && label.innerText !== "Image Description:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                console.error('Error in data received from Form 3!')

            }     

            try {
                const response = await fetch('http://localhost:3001/listQuestionsMulti', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                })       
            
                if (response.ok) {
                    console.log(data, 'Data successfully submitted from Form 3. Please complete one form at a time.')
                    setActivePopupQuestionSuccessfull2(true)
                    setReadyToSendForm1(true)
                    setReadyToSendForm2(true)
                    setReadyToSendForm3(true)
                    setReadyToSendForm4(true)
                    setReadyToSendForm5(true)
                    setReadyToSendForm6(true)
                    cleanAllForms() // limpar o formulário                    
                    setPostApi(true) // tornar verdadeiro a cada POST
                    
                }

            } catch(error) {
                console.error('Error while submitting data', error)
                
            }
            
        }

    }

    // função utilizando POST para salvar os dados do form4 na API
    const onSaveForm4 = async (e) => {
        e.preventDefault()
        let data = ''
        let isValid = true // variável que precisa de resposta imediata para validação, então não precisa usar 'useState' para mudança de estado
        setPostApi(false) // volta ao estado inicial

        function numberValidationForms() { // função que verifica se o número da opção que irá ser criada já existe na lista das opções, para evitar repetição
            listNumbersForms2and4and6.forEach(number => {
                if ((number === newOptionNumberMulti) && (number !== '' && newOptionNumberMulti !== '' )) {
                    isValid = false
                    
                } 
            })

        }
    
        numberValidationForms() // chamando a função que verifica se o número da opção que irá ser criada já existe na lista das opções
       
        if (isValid === false) { // se o número da opção for repetido ativa o 'PopupCheckNumbers'
            setActivePopupCheckNumbers2(true)

        } else if (isValid === true && checkAlternativeAnswer() === true && (newOptionAMulti && newOptionBMulti && newOptionCMulti && newOptionDMulti && newOptionNumberMulti)) {
            setActivePopupcheckAlternativeAnswerForms4(true) // ativa o popup

        } else {
            // colocando somente os campos que serão obrigatórios
            if (isValid === true && (newOptionAMulti && newOptionBMulti && newOptionCMulti && newOptionDMulti && newOptionNumberMulti)) {
                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem
                    setActivePopupRepeatedAlternativesForms4(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms4(false) // desativa o popup em 15s

                    }, 15000)
                
                } else {
                    data = {
                        optionA: newOptionAMulti,
                        optionB: newOptionBMulti,
                        optionC: newOptionCMulti,
                        optionD: newOptionDMulti,
                        optionE: newOptionEMulti, // não obrigatório
                        optionNumber: newOptionNumberMulti,
                        id: uniqueId
                    }

                    // limpar todas as cores das labels para as cores iniciais depois submeter os dados
                    function cleanLabels() {
                        const form4 = document.querySelector("#form4")
                        const fields = form4.querySelectorAll(".labelTextarea")
            
                        fields.forEach(field => {
                                const label = field.children[0]
                                label.style.color = ""
                        })

                    }

                    cleanLabels()
                    setActivePopupRepeatedAlternativesForms4(false) // desativar o popup, caso esteja visível na tela
                    mute === false && saveSound.play() // toca o som 'saveSound'

                }

            } else if (isValid === true && (newOptionAMulti === "" || newOptionBMulti === "" || newOptionCMulti === "" || newOptionDMulti === "" || newOptionNumberMulti === "")) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
                function redVoidField() {
                    const form4= document.querySelector("#form4")
                    const fields = form4.querySelectorAll(".labelTextarea")

                    fields.forEach(field => {
                        const label = field.children[0]
                        const textAreaInput = field.children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option E:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                console.error('Error in data received from Form 4!')
                setActivePopupCheckRequiredFields4(true) // ativa o 'PopupCheckRequiredFields'

                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem
                    setActivePopupRepeatedAlternativesForms4(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms4(false) // desativa o popup em 15s

                    }, 15000)

                }

            } else {
            //condição 5: o que não atender as condições acima
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'forEach'
                function redVoidField() {
                    const form4= document.querySelector("#form4")
                    const fields = form4.querySelectorAll(".labelTextarea")

                    fields.forEach(field => {
                        const label = field.children[0]
                        const textAreaInput = field.children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option E:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                console.error('Error in data received from Form 4!')

            }

            try {
                const response = await fetch('http://localhost:3001/listOptionsMulti', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                })       
            
                if (response.ok) {
                    console.log(data, 'Data successfully submitted from Form 4. Please complete one form at a time.')
                    setActivePopupOptionSuccessfull2(true)
                    setReadyToSendForm1(true)
                    setReadyToSendForm2(true)
                    setReadyToSendForm3(true)
                    setReadyToSendForm4(true)
                    setReadyToSendForm5(true)
                    setReadyToSendForm6(true)
                    cleanAllForms() // limpar o formulário                
                    setPostApi(true) // tornar verdadeiro a cada POST

                }

            } catch(error) {
                console.error('Error while submitting data', error)
                
            }

        }
        
    }

    // função utilizando POST para salvar os dados do form5 na API
    const onSaveForm5 = async (e) => {
        e.preventDefault()
        let data = ''
        let isValid = true // variável que precisa de resposta imediata para validação, então não precisa usar 'useState' para mudança de estado
        setPostApi(false) // volta ao estado inicial

        function numberValidationForms() { // função que verifica se o número da questão que irá ser criada já existe na lista das questões, para evitar repetição
            listNumbersForms1and3and5.forEach(number => {
                if ((number === newQuestionNumberThreeMulti) && (number !== '' && newQuestionNumberThreeMulti !== '' )) {
                    isValid = false
                    
                } 
            })

        }
    
        numberValidationForms() // chamando a função que verifica se o número da questão que irá ser criada já existe na lista das questões

        if (isValid === false) { // se o número da questão for repetido ativa o 'PopupCheckNumbers'
            setActivePopupCheckNumbers1(true)

        } else if (isValid === true && checkAlternativeAnswer() === true && (newQuestionTextThreeMulti && newCorrectAnswerThreeMulti && newDescriptionThreeMulti && newQuestionNumberThreeMulti)) {
            setActivePopupcheckAlternativeAnswerForms5(true) // ativa o popup

        } else {
            // colocando somente os campos que serão obrigatórios
            if (isValid === true && newQuestionTextThreeMulti && newCorrectAnswerThreeMulti && newDescriptionThreeMulti && newQuestionNumberThreeMulti) {  
                data = {
                    questionText: newQuestionTextThreeMulti,
                    imageQuestion: newImageQuestionThreeMulti, // não obrigatório
                    correctAnswer: newCorrectAnswerThreeMulti,
                    iconDescription: newIconDescriptionThreeMulti, // não obrigatório
                    description: newDescriptionThreeMulti,
                    imageDescription: newImageDescriptionThreeMulti, // não obrigatório
                    questionNumber: newQuestionNumberThreeMulti,
                    id: uniqueId
                }

                // limpar todas as cores das labels para as cores iniciais depois submeter os dados
                function cleanLabels() {
                    const form5 = document.querySelector("#form5")
                    const fields = form5.querySelectorAll(".labelTextarea")
        
                    fields.forEach(field => {
                            const label = field.children[0]
                            label.style.color = ""        
                    })

                }

                cleanLabels()
                mute === false && saveSound.play() // toca o som 'saveSound'

            } else if (isValid === true && (newQuestionTextThreeMulti === "" || newCorrectAnswerThreeMulti === "" || newDescriptionThreeMulti === "" || newQuestionNumberThreeMulti === "")) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
                function redVoidField() {
                    const form5= document.querySelector("#form5")
                    const fields = form5.querySelectorAll(".labelTextarea")

                    fields.forEach(field => {
                        const label = field.children[0]
                        const textAreaInput = field.children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Image Question:" && label.innerText !== "Icon Description:" && label.innerText !== "Image Description:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                console.error('Error in data received from Form 5!')
                setActivePopupCheckRequiredFields5(true) // ativa o 'PopupCheckRequiredFields'

            } else {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
                function redVoidField() {
                    const form5= document.querySelector("#form5")
                    const fields = form5.querySelectorAll(".labelTextarea")

                    fields.forEach(field => {
                        const label = field.children[0]
                        const textAreaInput = field.children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Image Question:" && label.innerText !== "Icon Description:" && label.innerText !== "Image Description:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                console.error('Error in data received from Form 5!')

            }     

            try {
                const response = await fetch('http://localhost:3001/listQuestionsThreeMulti', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                })       
            
                if (response.ok) {
                    console.log(data, 'Data successfully submitted from Form 5. Please complete one form at a time.')
                    setActivePopupQuestionSuccessfull3(true)
                    setReadyToSendForm1(true)
                    setReadyToSendForm2(true)
                    setReadyToSendForm3(true)
                    setReadyToSendForm4(true)
                    setReadyToSendForm5(true)
                    setReadyToSendForm6(true)
                    cleanAllForms() // limpar o formulário                    
                    setPostApi(true) // tornar verdadeiro a cada POST
                    
                }

            } catch(error) {
                console.error('Error while submitting data', error)
                
            }
            
        }

    }

    // função utilizando POST para salvar os dados do form6 na API
    const onSaveForm6 = async (e) => {
        e.preventDefault()
        let data = ''
        let isValid = true // variável que precisa de resposta imediata para validação, então não precisa usar 'useState' para mudança de estado
        setPostApi(false) // volta ao estado inicial

        function numberValidationForms() { // função que verifica se o número da opção que irá ser criada já existe na lista das opções, para evitar repetição
            listNumbersForms2and4and6.forEach(number => {
                if ((number === newOptionNumberThreeMulti) && (number !== '' && newOptionNumberThreeMulti !== '' )) {
                    isValid = false
                    
                } 
            })

        }
    
        numberValidationForms() // chamando a função que verifica se o número da opção que irá ser criada já existe na lista das opções
       
        if (isValid === false) { // se o número da opção for repetido ativa o 'PopupCheckNumbers'
            setActivePopupCheckNumbers2(true)

        } else if (isValid === true && checkAlternativeAnswer() === true && (newOptionAThreeMulti && newOptionBThreeMulti && newOptionCThreeMulti && newOptionDThreeMulti && newOptionEThreeMulti && newOptionFThreeMulti && newOptionNumberThreeMulti)) {
            setActivePopupcheckAlternativeAnswerForms6(true) // ativa o popup

        } else {
            // colocando somente os campos que serão obrigatórios
            if (isValid === true && (newOptionAThreeMulti && newOptionBThreeMulti && newOptionCThreeMulti && newOptionDThreeMulti && newOptionEThreeMulti && newOptionFThreeMulti && newOptionNumberThreeMulti)) {
                if (repeatedAlternativesDefault(optionForm2, optionForm4, optionForm6).length > 0) {
                // condição: se as alternativas se repetem
                    setActivePopupRepeatedAlternativesForms6(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms6(false) // desativa o popup em 15s

                    }, 15000)
                
                } else {
                    data = {
                        optionA: newOptionAThreeMulti,
                        optionB: newOptionBThreeMulti,
                        optionC: newOptionCThreeMulti,
                        optionD: newOptionDThreeMulti,
                        optionE: newOptionEThreeMulti,
                        optionF: newOptionFThreeMulti,
                        optionNumber: newOptionNumberThreeMulti,
                        id: uniqueId
                    }

                    // limpar todas as cores das labels para as cores iniciais depois submeter os dados
                    function cleanLabels() {
                        const form6 = document.querySelector("#form6")
                        const fields = form6.querySelectorAll(".labelTextarea")
            
                        fields.forEach(field => {
                                const label = field.children[0]
                                label.style.color = ""
                        })

                    }

                    cleanLabels()
                    setActivePopupRepeatedAlternativesForms6(false) // desativar o popup, caso esteja visível na tela
                    mute === false && saveSound.play() // toca o som 'saveSound'

                }

            } else if (isValid === true && (newOptionAThreeMulti === "" || newOptionBThreeMulti === "" || newOptionCThreeMulti === "" || newOptionDThreeMulti === "" || newOptionEThreeMulti === "" || newOptionFThreeMulti === "" || newOptionNumberThreeMulti === "")) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
                function redVoidField() {
                    const form6= document.querySelector("#form6")
                    const fields = form6.querySelectorAll(".labelTextarea")

                    fields.forEach(field => {
                        const label = field.children[0]
                        const textAreaInput = field.children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios
                        if (textAreaInput.value === "") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                console.error('Error in data received from Form 6!')
                setActivePopupCheckRequiredFields6(true) // ativa o 'PopupCheckRequiredFields'

                if (repeatedAlternativesDefault(optionForm2, optionForm4,optionForm6).length > 0) {
                // condição: se as alternativas se repetem
                    setActivePopupRepeatedAlternativesForms6(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms6(false) // desativa o popup em 15s

                    }, 15000)

                }

            } else {
            //condição 5: o que não atender as condições acima
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
                function redVoidField() {
                    const form6= document.querySelector("#form6")
                    const fields = form6.querySelectorAll(".labelTextarea")

                    fields.forEach(field => {
                        const label = field.children[0]
                        const textAreaInput = field.children[1]

                        label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios
                        if (textAreaInput.value === "") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })

                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                console.error('Error in data received from Form 6!')

            }

            try {
                const response = await fetch('http://localhost:3001/listOptionsThreeMulti', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                })       
            
                if (response.ok) {
                    console.log(data, 'Data successfully submitted from Form 6. Please complete one form at a time.')
                    setActivePopupOptionSuccessfull3(true)
                    setReadyToSendForm1(true)
                    setReadyToSendForm2(true)
                    setReadyToSendForm3(true)
                    setReadyToSendForm4(true)
                    setReadyToSendForm5(true)
                    setReadyToSendForm6(true)
                    cleanAllForms() // limpar o formulário                
                    setPostApi(true) // tornar verdadeiro a cada POST

                }

            } catch(error) {
                console.error('Error while submitting data', error)
                
            }

        }
        
    }

    function cleanAllForms() {
        // form 1
        setNewQuestionTextMain('')
        setNewImageQuestionMain('')
        setNewCorrectAnswerMain('')
        setNewIconDescriptionMain('')
        setNewDescriptionMain('')
        setNewImageDescriptionMain('')
        setNewQuestionNumberMain('')

        // form 2
        setNewOptionAMain('')
        setNewOptionBMain('')
        setNewOptionCMain('')
        setNewOptionDMain('')
        setNewOptionEMain('')
        setNewOptionNumberMain('')

        // form 3
        setNewQuestionTextMulti('')
        setNewImageQuestionMulti('')
        setNewCorrectAnswerMulti('')
        setNewIconDescriptionMulti('')
        setNewDescriptionMulti('')
        setNewImageDescriptionMulti('')
        setNewQuestionNumberMulti('')

        // form 4
        setNewOptionAMulti('')
        setNewOptionBMulti('')
        setNewOptionCMulti('')
        setNewOptionDMulti('')
        setNewOptionEMulti('')
        setNewOptionNumberMulti('')

        // form 5
        setNewQuestionTextThreeMulti('')
        setNewImageQuestionThreeMulti('')
        setNewCorrectAnswerThreeMulti('')
        setNewIconDescriptionThreeMulti('')
        setNewDescriptionThreeMulti('')
        setNewImageDescriptionThreeMulti('')
        setNewQuestionNumberThreeMulti('')

        // form 6
        setNewOptionAThreeMulti('')
        setNewOptionBThreeMulti('')
        setNewOptionCThreeMulti('')
        setNewOptionDThreeMulti('')
        setNewOptionEThreeMulti('')
        setNewOptionFThreeMulti('')
        setNewOptionNumberThreeMulti('')

    }

    // obs: não usar o checkAlternativeAnswerDefault da PageBase usando o 'useOutletContext' neste forms, pois são necessárias outras variáveis condições
    function checkAlternativeAnswer() { // função que verifica se há correspondência das alternativas da opção com a resposta da questão
        // variáveis usadas ao preencher o formulário 1
        let matchedOptionMain = null
        let matchedOptionMainNumber = null     
        let matchedAnswerAnternativeMain = null
        
        // variáveis usadas ao preencher o formulário 2
        let matchedQuestionMain = null
        let matchedQuestionMainAnswer = null
        let matchedAlternativeAnswerMain = null

        // variáveis usadas para preencher o formulário 3
        let matchedOptionMulti = null
        let matchedOptionMultiNumber = null
        let matchedAnswerAnternativeMulti = null

        // variáveis usadas ao preencher o formulário 4
        let matchedQuestionMulti = null
        let matchedQuestionMultiAnswerText = null
        let matchedAlternativeAnswerMulti = null

        // variáveis usadas para preencher o formulário 5
        let matchedOptionThreeMulti = null
        let matchedOptionThreeMultiNumber = null
        let matchedAnswerAnternativeThreeMulti = null

        // variáveis usadas ao preencher o formulário 6
        let matchedQuestionThreeMulti = null
        let matchedQuestionThreeMultiAnswerText = null
        let matchedAlternativeAnswerThreeMulti = null

        // variável utilizada ao preencher todos os formulários
        let checkWithoutMatched = false
      
        // filtra a opção única correspondente, ao preencher o formulário 1
        matchedOptionMain = listUnicOptionsContext
            .filter(option => option.optionNumber === newQuestionNumberMain)
            .map(option => [option.optionA, option.optionB, option.optionC, option.optionD, option.optionE])[0]

        if (matchedOptionMain) {
            // capturar o número da opção correspondente, ao preencher o formulário 1
            matchedOptionMainNumber = listUnicOptionsContext
                .filter(option => option.optionNumber === newQuestionNumberMain)
                .map(option => option.optionNumber)
            
            // filtra a alternativa que corresponde a resposta que está sendo criada na questão única correspondente, não incluindo alternativas vazias, ao preencher o formulário 1
            matchedAnswerAnternativeMain = matchedOptionMain
                .filter(value => value === newCorrectAnswerMain)[0] // captura a opção correta

        }

        // filtra a questão única correspondente, ao preencher o formulário 2
        matchedQuestionMain = listUnicQuestionsContext
        .filter(question => question.questionNumber === newOptionNumberMain)[0]
        
        if (matchedQuestionMain) {
            matchedQuestionMainAnswer = matchedQuestionMain.correctAnswer // capturando a resposta da questão única
    
            // filtra a alternativa que corresponde a resposta da questão única correspondente, não incluindo alternativas vazias, ao preencher o formulário 2
            matchedAlternativeAnswerMain = optionForm2 && optionForm2
                .filter(alternative => (alternative !== '') && (alternative === matchedQuestionMainAnswer))

        }

        // filtra a opção múltipla correspondente, ao preencher o formulário 3
        matchedOptionMulti = listMultiOptionsContext
        .filter(option => option.optionNumber === newQuestionNumberMulti)
        .map(option => [option.optionA, option.optionB])[0] // captura as opções corretas

        if (matchedOptionMulti) {
            // capturar o número da opção correspondente, ao preencher o formulário 3
            matchedOptionMultiNumber = listMultiOptionsContext
                .filter(option => option.optionNumber === newQuestionNumberMulti)
                .map(option => option.optionNumber)
            
            // retorna 'true' se os valores de 'Option A' e 'Option B' estiverem incluídos na resposta da questão múltipla, que está criando, ao preencher o formulário 3
            matchedAnswerAnternativeMulti = newCorrectAnswerMulti.includes(matchedOptionMulti && matchedOptionMulti[0]) && newCorrectAnswerMulti.includes(matchedOptionMulti && matchedOptionMulti[1])

        }

        // filtra a questão múltipla correspondente, ao preencher o formulário 4
        matchedQuestionMulti = listMultiQuestionsContext.filter(question => question.questionNumber === newOptionNumberMulti)[0]

        if (matchedQuestionMulti) {
            matchedQuestionMultiAnswerText = matchedQuestionMulti.correctAnswer // capturando a resposta da questão múltipla
    
            // retorna 'true' se os valores de 'Option A' e 'Option B' estiverem incluídos na resposta da questão múltipla, não incluindo alternativas vazias, ao preencher o formulário 4
            matchedAlternativeAnswerMulti = optionForm4 && ((optionForm4[0] !== '') && (matchedQuestionMultiAnswerText.includes(optionForm4[0])) && (optionForm4[1] !== '') && (matchedQuestionMultiAnswerText?.includes(optionForm4[1])))

        }

        // filtra a opção múltipla correspondente, ao preencher o formulário 5
        matchedOptionThreeMulti = listThreeMultiOptionsContext
        .filter(option => option.optionNumber === newQuestionNumberThreeMulti)
        .map(option => [option.optionA, option.optionB, option.optionC])[0] // captura as opções corretas

        if (matchedOptionThreeMulti) {
            // capturar o número da opção correspondente, ao preencher o formulário 5
            matchedOptionThreeMultiNumber = listThreeMultiOptionsContext
                .filter(option => option.optionNumber === newQuestionNumberThreeMulti)
                .map(option => option.optionNumber)
            
            // retorna 'true' se os valores de 'Option A', 'Option B' e 'Option C' estiverem incluídos na resposta da questão múltipla, que está criando, ao preencher o formulário 5
            matchedAnswerAnternativeThreeMulti = newCorrectAnswerThreeMulti.includes(matchedOptionThreeMulti && matchedOptionThreeMulti[0]) && newCorrectAnswerThreeMulti.includes(matchedOptionThreeMulti && matchedOptionThreeMulti[1]) && newCorrectAnswerThreeMulti.includes(matchedOptionThreeMulti && matchedOptionThreeMulti[2])

        }

        // filtra a questão múltipla correspondente, ao preencher o formulário 6
        matchedQuestionThreeMulti = listThreeMultiQuestionsContext.filter(question => question.questionNumber === newOptionNumberThreeMulti)[0]

        if (matchedQuestionThreeMulti) {
            matchedQuestionThreeMultiAnswerText = matchedQuestionThreeMulti.correctAnswer // capturando a resposta da questão múltipla
    
            // retorna 'true' se os valores de 'Option A', 'Option B' e 'Option C' estiverem incluídos na resposta da questão múltipla, não incluindo alternativas vazias, ao preencher o formulário 6
            matchedAlternativeAnswerThreeMulti = optionForm6 && ((optionForm6[0] !== '') && (matchedQuestionThreeMultiAnswerText?.includes(optionForm6[0])) && 
                (optionForm6[1] !== '') && (matchedQuestionThreeMultiAnswerText?.includes(optionForm6[1])) && 
                (optionForm6[2] !== '') && (matchedQuestionThreeMultiAnswerText?.includes(optionForm6[2])))

        }

        if ((matchedOptionMain?.length > 0) && (matchedAnswerAnternativeMain === undefined)) {
        // condição: se existe a opção correspondente e se não há alguma alternativa igual a resposta da questão, ao preencher o formulário 1
            checkWithoutMatched = true

        } else if (matchedQuestionMain && matchedAlternativeAnswerMain.length === 0) {
        // condição: se existe questão correspondente e se não há alguma alternativa igual a resposta da questão, ao preencher o formulário 2
            checkWithoutMatched = true

        } else if (matchedOptionMulti?.length > 0 && matchedAnswerAnternativeMulti === false) {
        // condição: se existe a opção correspondente e se as duas alternativas corretas não estão incluídas na resposta da questão, ao preencher o formulário 3
            checkWithoutMatched = true

        } else if (matchedQuestionMulti && matchedAlternativeAnswerMulti === false) {
        // condição: se existe questão correspondente e se as duas alternativas corretas não estão incluídas na resposta da questão, ao preencher o formulário 4
            checkWithoutMatched = true

        } else if (matchedOptionThreeMulti?.length > 0 && matchedAnswerAnternativeThreeMulti === false) {
        // condição: se existe a opção correspondente e se as três alternativas corretas não estão incluídas na resposta da questão, ao preencher o formulário 5
            checkWithoutMatched = true

        } else if (matchedQuestionThreeMulti && matchedAlternativeAnswerThreeMulti === false) {
        // condição: se existe questão correspondente e se as três alternativas corretas não estão incluídas na resposta da questão, ao preencher o formulário 6
            checkWithoutMatched = true

        }

        setMatchedOptionMainPopup(matchedOptionMain) // capturar a opção única (form1)
        setMatchedOptionMainPopupNumber(matchedOptionMainNumber) // capturar o número da opção única (form1)

        setMatchedQuestionMainPopupAnswer(matchedQuestionMainAnswer) // capturar a resposta da questão única (form2)
        setMatchedQuestionMainPopupNumber(matchedQuestionMain?.questionNumber) // capturar o número da questão única (form2)

        setMatchedOptionMultiPopupAnswers([matchedOptionMulti && matchedOptionMulti[0], matchedOptionMulti && matchedOptionMulti[1]]) // capturar as duas alternativas corretas da opção múltipla (form3)
        setMatchedOptionMultiPopupNumber(matchedOptionMultiNumber) // capturar o número da opção múltipla (form3)

        setMatchedQuestionMultiPopupAnswer(matchedQuestionMultiAnswerText) // capturar a resposta da questão múltipla (form4)
        setMatchedQuestionMultiPopupNumber(matchedQuestionMulti?.questionNumber) // capturar o número da questão múltipla (form4)

        setMatchedOptionThreeMultiPopupAnswers([matchedOptionThreeMulti && matchedOptionThreeMulti[0], matchedOptionThreeMulti && matchedOptionThreeMulti[1], matchedOptionThreeMulti && matchedOptionThreeMulti[2]]) // capturar as três alternativas corretas da opção múltipla (form5)
        setMatchedOptionThreeMultiPopupNumber(matchedOptionThreeMultiNumber) // capturar o número da opção múltipla (form5)

        setMatchedQuestionThreeMultiPopupAnswer(matchedQuestionThreeMultiAnswerText) // capturar a resposta da questão múltipla (form6)
        setMatchedQuestionThreeMultiPopupNumber(matchedQuestionThreeMulti?.questionNumber) // capturar o número da questão múltipla (form6)


        return checkWithoutMatched
  
    }
    
    useEffect(() => {
        function formsCheck() { // função que verifica se existem mais questões que opções ou mais opções que questões nos 4 formulários
            if (listUnicQuestionsContext.length === listUnicOptionsContext.length && listMultiQuestionsContext.length === listMultiOptionsContext.length && listThreeMultiQuestionsContext.length === listThreeMultiOptionsContext.length) {
                setActivePopupCompareAllQuestionsAllOptions(false) // não ativa o 'PopupCompareAllQuestionsAllOptions'
                setAlertMessage(null) // anula a menssage

            } else if (listUnicQuestionsContext.length > listUnicOptionsContext.length) {
                setAlertMessage('⚠ There are more questions in form 1" than options in "form 2". Dont forget to add the missing options to "form 2".')

            } else if (listUnicOptionsContext.length > listUnicQuestionsContext.length) {
                setAlertMessage('⚠ There are more options in "form 2" than questions in "form 1". Dont forget to add the missing questions to "form 1".')

            } else if (listMultiQuestionsContext.length > listMultiOptionsContext.length) {
                setAlertMessage('⚠ There are more questions in "form 3" than options in "form 4". Dont forget to add the missing options to "form 4".')

            } else if (listMultiOptionsContext.length > listMultiQuestionsContext.length) {
                setAlertMessage('⚠ There are more options in "form 4" than questions in "form 3". Dont forget to add the missing questions to "form 3".')

            } else if (listThreeMultiQuestionsContext.length > listThreeMultiOptionsContext.length) {
                setAlertMessage('⚠ There are more questions in "form 5" than options in "form 6". Dont forget to add the missing options to "form 6".')

            } else if (listThreeMultiOptionsContext.length > listThreeMultiQuestionsContext.length) {
                setAlertMessage('⚠ There are more options in "form 6" than questions in "form 5". Dont forget to add the missing questions to "form 5".')

            }

        } 

        formsCheck()
        
        setTimeout(() => {
            if (postApi) {
                setActivePopupCompareAllQuestionsAllOptions(true) // habilita o 'PopupCompareAllQuestionsAllOptions' se postApi for 'true'

            }

        }, 300)

    }, [listUnicQuestionsContext, listUnicOptionsContext, listMultiQuestionsContext, listMultiOptionsContext, listThreeMultiQuestionsContext, listThreeMultiOptionsContext, postApi])

    function activePopupMessagesTitles(setActive) {
        setActive(true)

        setTimeout(() => setActive(false), 3000)

    }

    return(
        <div className={styles.formsNewQuestionsOptions}>
            <div className={styles.forms}>
                {/* Form 1 (Questions) */}
                <form 
                    onSubmit={onSaveForm1} 
                    className={styles.form}
                    id='form1'
                >
                    <h1
                        onClick={() => activePopupMessagesTitles(setActivePopupMessagesTitlesForms1and2)}
                        className={styles.titleForm}
                    >
                        Form 1 (Questions)
                    </h1>


                    <FieldsQuestionsOptions
                        nameText1="Question:*"
                        nameText2="Image Question:"
                        nameText3="Answer:*"
                        nameText4="Icon Description:"
                        nameText5="Description:*"
                        nameText6="Image Description:"
                        nameText7="Number:*"

                        newQuestionTextMain={newQuestionTextMain}
                        setNewQuestionTextMain={setNewQuestionTextMain}
                        newImageQuestionMain={newImageQuestionMain}
                        setNewImageQuestionMain={setNewImageQuestionMain}
                        newCorrectAnswerMain={newCorrectAnswerMain}
                        setNewCorrectAnswerMain={setNewCorrectAnswerMain}
                        newIconDescriptionMain={newIconDescriptionMain}
                        setNewIconDescriptionMain={setNewIconDescriptionMain}
                        newDescriptionMain={newDescriptionMain}
                        setNewDescriptionMain={setNewDescriptionMain}
                        newImageDescriptionMain={newImageDescriptionMain}
                        setNewImageDescriptionMain={setNewImageDescriptionMain}
                        newQuestionNumberMain={newQuestionNumberMain}
                        setNewQuestionNumberMain={setNewQuestionNumberMain}
                        readyToSendForm1={readyToSendForm1}
                        setReadyToSendForm1={setReadyToSendForm1}
                    />

                    <ButtonDefault
                        buttonName='Save' 
                        specificStyleButton={styles.buttonSave}
                        specificType='submit'
                    />

                </form>

                {/* Form 2 (Options) */}
                <form 
                    onSubmit={onSaveForm2} 
                    className={styles.form}
                    id='form2'
                >
                    <h1
                        onClick={() => activePopupMessagesTitles(setActivePopupMessagesTitlesForms1and2)}
                        className={styles.titleForm}
                    >
                        Form 2 (Options)
                    </h1>

                    <FieldsQuestionsOptions 
                        nameText1="Option A:*" 
                        nameText2="Option B:*" 
                        nameText3="Option C:*" 
                        nameText4="Option D:*"                
                        nameText5="Option E:" 
                        nameText6="Number:*"
                        optionClass={styles.optionClass}

                        newOptionAMain={newOptionAMain} 
                        setNewOptionAMain={setNewOptionAMain}    
                        newOptionBMain={newOptionBMain} 
                        setNewOptionBMain={setNewOptionBMain}    
                        newOptionCMain={newOptionCMain} 
                        setNewOptionCMain={setNewOptionCMain}    
                        newOptionDMain={newOptionDMain} 
                        setNewOptionDMain={setNewOptionDMain}    
                        newOptionEMain={newOptionEMain} 
                        setNewOptionEMain={setNewOptionEMain}    
                        newOptionNumberMain={newOptionNumberMain} 
                        setNewOptionNumberMain={setNewOptionNumberMain}
                        readyToSendForm2={readyToSendForm2}
                        setReadyToSendForm2={setReadyToSendForm2}
                    />

                    <ButtonDefault
                        buttonName='Save' 
                        specificStyleButton={styles.buttonSave}
                        specificType='submit'
                    />

                </form>

            </div>

            <div className={styles.forms}>
                {/* Form 3 (MultiQuestions) */}
                <form 
                    onSubmit={onSaveForm3} 
                    className={styles.form}
                    id='form3'
                >
                    <h1
                        onClick={() => activePopupMessagesTitles(setActivePopupMessagesTitlesForms3and4)}
                        className={styles.titleForm}
                    >
                        Form 3 (MultiQuestions)
                    </h1>

                    <FieldsQuestionsOptions
                        nameText1="Question:*"
                        nameText2="Image Question:"
                        nameText3="Answer:*"
                        nameText4="Icon Description:"
                        nameText5="Description:*"
                        nameText6="Image Description:"
                        nameText7="Number:*"

                        newQuestionTextMulti={newQuestionTextMulti}
                        setNewQuestionTextMulti={setNewQuestionTextMulti}
                        newImageQuestionMulti={newImageQuestionMulti}
                        setNewImageQuestionMulti={setNewImageQuestionMulti}
                        newCorrectAnswerMulti={newCorrectAnswerMulti}
                        setNewCorrectAnswerMulti={setNewCorrectAnswerMulti}
                        newIconDescriptionMulti={newIconDescriptionMulti}
                        setNewIconDescriptionMulti={setNewIconDescriptionMulti}
                        newDescriptionMulti={newDescriptionMulti}
                        setNewDescriptionMulti={setNewDescriptionMulti}
                        newImageDescriptionMulti={newImageDescriptionMulti}
                        setNewImageDescriptionMulti={setNewImageDescriptionMulti}
                        newQuestionNumberMulti={newQuestionNumberMulti}
                        setNewQuestionNumberMulti={setNewQuestionNumberMulti}
                        readyToSendForm3={readyToSendForm3}
                        setReadyToSendForm3={setReadyToSendForm3}
                    />

                    <ButtonDefault
                        buttonName='Save' 
                        specificStyleButton={styles.buttonSave}
                        specificType='submit' 
                    />

                </form>

                {/* Form 4 (MultiOptions) */}
                <form 
                    onSubmit={onSaveForm4} 
                    className={styles.form}
                    id='form4'
                >
                    <h1
                        onClick={() => activePopupMessagesTitles(setActivePopupMessagesTitlesForms3and4)}
                        className={styles.titleForm}
                    >
                        Form 4 (MultiOptions)
                    </h1>

                    <FieldsQuestionsOptions 
                        nameText1="Option A:*" 
                        nameText2="Option B:*" 
                        nameText3="Option C:*" 
                        nameText4="Option D:*"                
                        nameText5="Option E:" 
                        nameText6="Number:*"
                        optionClass={styles.optionClass}

                        newOptionAMulti={newOptionAMulti}
                        setNewOptionAMulti={setNewOptionAMulti}
                        newOptionBMulti={newOptionBMulti}
                        setNewOptionBMulti={setNewOptionBMulti}
                        newOptionCMulti={newOptionCMulti}
                        setNewOptionCMulti={setNewOptionCMulti}
                        newOptionDMulti={newOptionDMulti}
                        setNewOptionDMulti={setNewOptionDMulti}
                        newOptionEMulti={newOptionEMulti}
                        setNewOptionEMulti={setNewOptionEMulti}
                        newOptionNumberMulti={newOptionNumberMulti}
                        setNewOptionNumberMulti={setNewOptionNumberMulti}
                        readyToSendForm4={readyToSendForm4}
                        setReadyToSendForm4={setReadyToSendForm4}

                    />

                    <ButtonDefault
                        buttonName='Save' 
                        specificStyleButton={styles.buttonSave}
                        specificType='submit' 
                    />

                </form>

            </div>

            <div className={styles.forms}>
                {/* Form 5 (ThreeMultiQuestions) */}
                <form 
                    onSubmit={onSaveForm5}
                    className={styles.form}
                    id='form5'
                >
                    <h1
                        onClick={() => activePopupMessagesTitles(setActivePopupMessagesTitlesForms5and6)}
                        className={styles.titleForm}
                    >
                        Form 5 (ThreeMultiQuestions)
                    </h1>

                    <FieldsQuestionsOptions
                        nameText1="Question:*"
                        nameText2="Image Question:"
                        nameText3="Answer:*"
                        nameText4="Icon Description:"
                        nameText5="Description:*"
                        nameText6="Image Description:"
                        nameText7="Number:*"

                        newQuestionTextThreeMulti={newQuestionTextThreeMulti}
                        setNewQuestionTextThreeMulti={setNewQuestionTextThreeMulti}
                        newImageQuestionThreeMulti={newImageQuestionThreeMulti}
                        setNewImageQuestionThreeMulti={setNewImageQuestionThreeMulti}
                        newCorrectAnswerThreeMulti={newCorrectAnswerThreeMulti}
                        setNewCorrectAnswerThreeMulti={setNewCorrectAnswerThreeMulti}
                        newIconDescriptionThreeMulti={newIconDescriptionThreeMulti}
                        setNewIconDescriptionThreeMulti={setNewIconDescriptionThreeMulti}
                        newDescriptionThreeMulti={newDescriptionThreeMulti}
                        setNewDescriptionThreeMulti={setNewDescriptionThreeMulti}
                        newImageDescriptionThreeMulti={newImageDescriptionThreeMulti}
                        setNewImageDescriptionThreeMulti={setNewImageDescriptionThreeMulti}
                        newQuestionNumberThreeMulti={newQuestionNumberThreeMulti}
                        setNewQuestionNumberThreeMulti={setNewQuestionNumberThreeMulti}
                        readyToSendForm5={readyToSendForm5}
                        setReadyToSendForm5={setReadyToSendForm5}
                    />

                    <ButtonDefault
                        buttonName='Save' 
                        specificStyleButton={styles.buttonSave}
                        specificType='submit' 
                    />

                </form>

                {/* Form 6 (ThreeMultiOptions) */}
                <form 
                    onSubmit={onSaveForm6}
                    className={styles.form}
                    id='form6'
                >
                    <h1
                        onClick={() => activePopupMessagesTitles(setActivePopupMessagesTitlesForms5and6)}
                        className={styles.titleForm}
                    >
                        Form 6 (ThreeMultiOptions)
                    </h1>

                    <FieldsQuestionsOptions 
                        nameText1="Option A:*" 
                        nameText2="Option B:*" 
                        nameText3="Option C:*" 
                        nameText4="Option D:*"                
                        nameText5="Option E:*"
                        nameText6="Option F:*" 
                        nameText7="Number:*"
                        optionClass={styles.optionClass}

                        newOptionAThreeMulti={newOptionAThreeMulti}
                        setNewOptionAThreeMulti={setNewOptionAThreeMulti}
                        newOptionBThreeMulti={newOptionBThreeMulti}
                        setNewOptionBThreeMulti={setNewOptionBThreeMulti}
                        newOptionCThreeMulti={newOptionCThreeMulti}
                        setNewOptionCThreeMulti={setNewOptionCThreeMulti}
                        newOptionDThreeMulti={newOptionDThreeMulti}
                        setNewOptionDThreeMulti={setNewOptionDThreeMulti}
                        newOptionEThreeMulti={newOptionEThreeMulti}
                        setNewOptionEThreeMulti={setNewOptionEThreeMulti}
                        newOptionFThreeMulti={newOptionFThreeMulti}
                        setNewOptionFThreeMulti={setNewOptionFThreeMulti}
                        newOptionNumberThreeMulti={newOptionNumberThreeMulti}
                        setNewOptionNumberThreeMulti={setNewOptionNumberThreeMulti}
                        readyToSendForm6={readyToSendForm6}
                        setReadyToSendForm6={setReadyToSendForm6}
                    />

                    <ButtonDefault
                        buttonName='Save'
                        specificStyleButton={styles.buttonSave}
                        specificType='submit' 
                    />

                </form>

            </div>

            {/* PopupMessagesTitlesForms */}
            {activePopupMessagesTitlesForms1and2 && 
                <PopupMessagesTitlesForms 
                    text="Form 1 and Form 2 complement each other." 
                    specificStyles={styles.popupMessageTitle}
                />
            }

            {activePopupMessagesTitlesForms3and4 && 
                <PopupMessagesTitlesForms 
                    text="Form 3 and Form 4 complement each other." 
                    specificStyles={styles.popupMessageTitle}
                />
            }

            {activePopupMessagesTitlesForms5and6 && 
                <PopupMessagesTitlesForms 
                    text="Form 5 and Form 6 complement each other." 
                    specificStyles={styles.popupMessageTitle}
                />
            }

            {/* PopupCheckRequiredFields */}
            {activePopupCheckRequiredFields1 &&
                <PopupCheckRequiredFields
                    specificStyles={styles.popupCheckRequiredFields}
                    text={'Please fill in all required fields in Form 1!'}
                    activePopup={setActivePopupCheckRequiredFields1}
                />                
            }

            {activePopupCheckRequiredFields2 &&
                <PopupCheckRequiredFields
                    specificStyles={styles.popupCheckRequiredFields}
                    text={'Please fill in all required fields in Form 2!'}
                    activePopup={setActivePopupCheckRequiredFields2}
                />                
            }

            {activePopupCheckRequiredFields3 &&
                <PopupCheckRequiredFields
                    specificStyles={styles.popupCheckRequiredFields}
                    text={'Please fill in all required fields in Form 3!'}
                    activePopup={setActivePopupCheckRequiredFields3}
                />                
            }

            {activePopupCheckRequiredFields4 &&
                <PopupCheckRequiredFields
                    specificStyles={styles.popupCheckRequiredFields}
                    text={'Please fill in all required fields in Form 4!'}
                    activePopup={setActivePopupCheckRequiredFields4}
                />                
            }

            {activePopupCheckRequiredFields5 &&
                <PopupCheckRequiredFields
                    specificStyles={styles.popupCheckRequiredFields}
                    text={'Please fill in all required fields in Form 5!'}
                    activePopup={setActivePopupCheckRequiredFields5}
                />                
            }

            {activePopupCheckRequiredFields6 &&
                <PopupCheckRequiredFields
                    specificStyles={styles.popupCheckRequiredFields}
                    text={'Please fill in all required fields in Form 6!'}
                    activePopup={setActivePopupCheckRequiredFields6}
                />                
            }

            {/* PopupRepeatedAlternatives */}
            {activePopupRepeatedAlternativesForms2 && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedForms} 
                    textPopup={"There are duplicate alternatives. Please, before creating the option, update the alternatives in Form 2 so that all of them are different, and then proceed with creating the option."} 
                    activePopup={setActivePopupRepeatedAlternativesForms2}                    
                />
            }

            {activePopupRepeatedAlternativesForms4 && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedForms} 
                    textPopup={"There are duplicate alternatives. Please, before creating the option, update the alternatives in Form 4 so that all of them are different, and then proceed with creating the option."} 
                    activePopup={setActivePopupRepeatedAlternativesForms4}                    
                />
            }

            {activePopupRepeatedAlternativesForms6 && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedForms} 
                    textPopup={"There are duplicate alternatives. Please, before creating the option, update the alternatives in Form 6 so that all of them are different, and then proceed with creating the option."} 
                    activePopup={setActivePopupRepeatedAlternativesForms6}                    
                />
            }

            {/* PopupCompareAllQuestionsAllOptions */}
            {activePopupCompareAllQuestionsAllOptions && alertMessage !== null && 
                <PopupCompareAllQuestionsAllOptions
                    specificStyles={styles.popupCompare} 
                    textPopup={alertMessage}
                    activePopup={setActivePopupCompareAllQuestionsAllOptions}                
                />
            }

            {/* PopupCheckAlternativeAnswer */}
            {activePopupcheckAlternativeAnswerForms1 && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms1}
                    textPopup={`Your answer does not contain any alternative from option (n.${matchedOptionMainPopupNumber})! Please, before creating the question, make sure the answer is exactly the same as the correct alternative of option (n.${matchedOptionMainPopupNumber}), and then proceed with creating the question. For more information, click the phrase below.`} 
                    textModalDescription={`Include in the answer to question (n.${newQuestionNumberMain}) the correct alternative from option (n.${matchedOptionMainPopupNumber}), highlighted below: (Option: ${matchedOptionMainPopup[0]}), (Option: ${matchedOptionMainPopup[1]}), (Option: ${matchedOptionMainPopup[2]}), (Option: ${matchedOptionMainPopup[3]})${matchedOptionMainPopup[4] !== '' ? ` or (Option: ${matchedOptionMainPopup[4]}).` : `.`}`}
                />
            }

            {activePopupcheckAlternativeAnswerForms2 && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms2}
                    textPopup={`No alternative matching the answer of question (n.${matchedQuestionMainPopupNumber}) was found. Please, before creating the option, make sure that one of the alternatives is exactly the same as the answer of the already created question (n.${matchedQuestionMainPopupNumber}), and then proceed with creating the option. For more information, click the phrase below.`} 
                    textModalDescription={`Include in one of the alternatives of option (n.${newOptionNumberMain}) the answer to question (n.${matchedQuestionMainPopupNumber}), highlighted below: (Answer: ${matchedQuestionMainPopupAnswer}).`}
                />
            }

            {activePopupcheckAlternativeAnswerForms3 && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms3}
                    textPopup={`Your answer does not contain the two correct alternatives (Option A and Option B) from option (n.${matchedOptionMultiPopupNumber})! Please, before creating the question, include both correct alternatives (Option A and Option B) from option (n.${matchedOptionMultiPopupNumber}) in the answer, and then proceed with creating the question. For more information, click the phrase below.`} 
                    textModalDescription={`Include in the answer to question (n.${newQuestionNumberMulti}) the two correct alternatives from option (n.${matchedOptionMultiPopupNumber}), highlighted below: (Option: ${matchedOptionMultiPopupAnswers[0]}) and (Option: ${matchedOptionMultiPopupAnswers[1]}).`}
                />
            }

            {activePopupcheckAlternativeAnswerForms4 && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms4}
                    textPopup={`The two alternatives included in the answer of question (n.${matchedQuestionMultiPopupNumber}) were not found. Please, before creating the option, always ensure that the alternatives (Option A and Option B) are exactly the same as those included in the answer of the already created question (n.${matchedQuestionMultiPopupNumber}), and then proceed with creating the option. For more information, click the phrase below.`} 
                    textModalDescription={`Include in the first two alternatives (Option A and Option B) of option (n.${newOptionNumberMulti}) the answers included in question (n.${matchedQuestionMultiPopupNumber}), highlighted below: (Answer: ${matchedQuestionMultiPopupAnswer}).`}
                />
            }

            {activePopupcheckAlternativeAnswerForms5 && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms5}
                    textPopup={`Your answer does not contain the three correct alternatives (Option A, Option B and Option C) from option (n.${matchedOptionThreeMultiPopupNumber})! Please, before creating the question, include three correct alternatives (Option A, Option B and Option C) from option (n.${matchedOptionThreeMultiPopupNumber}) in the answer, and then proceed with creating the question. For more information, click the phrase below.`} 
                    textModalDescription={`Include in the answer to question (n.${newQuestionNumberThreeMulti}) the three correct alternatives from option (n.${matchedOptionThreeMultiPopupNumber}), highlighted below: (Option: ${matchedOptionThreeMultiPopupAnswers[0]}), (Option: ${matchedOptionThreeMultiPopupAnswers[1]}) and (Option: ${matchedOptionThreeMultiPopupAnswers[2]}).`}
                />
            }

            {activePopupcheckAlternativeAnswerForms6 && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms6}
                    textPopup={`The three alternatives included in the answer of question (n.${matchedQuestionThreeMultiPopupNumber}) were not found. Please, before creating the option, always ensure that the alternatives (Option A, Option B and Option C) are exactly the same as those included in the answer of the already created question (n.${matchedQuestionThreeMultiPopupNumber}), and then proceed with creating the option. For more information, click the phrase below.`} 
                    textModalDescription={`Include in the first three alternatives (Option A, Option B and Option C) of option (n.${newOptionNumberThreeMulti}) the answers included in question (n.${matchedQuestionThreeMultiPopupNumber}), highlighted below: (Answer: ${matchedQuestionThreeMultiPopupAnswer}).`}
                />
            }

            {/* PopupCheckNumbers */}
            {activePopupCheckNumbers1 &&
                <PopupCheckNumbers
                    specificStyles={styles.popupCheckNumbers}
                    text={'This number has already been used in previous questions. Please use a number that has not been used yet.'}
                    activePopup={setActivePopupCheckNumbers1}
                />
            }

            {activePopupCheckNumbers2 &&
                <PopupCheckNumbers
                    specificStyles={styles.popupCheckNumbers}
                    text={'This number has already been used in previous options. Please use a number that has not been used yet.'}
                    activePopup={setActivePopupCheckNumbers2}
                />
            }

            {/* PopupQuestionSuccessfully */}
            {activePopupQuestionSuccessfull1 &&
                <PopupQuestionSuccessfully 
                    specificStyles={styles.popupSuccessfully}
                    text='Question successfully added from Form 1. Please complete one form at a time.' 
                    activePopup={setActivePopupQuestionSuccessfull1}
                />

            }

            {activePopupQuestionSuccessfull2 && 
                <PopupQuestionSuccessfully
                    specificStyles={styles.popupSuccessfully}
                    text='Question successfully added from Form 3. Please complete one form at a time.' 
                    activePopup={setActivePopupQuestionSuccessfull2}
                />
            }

            {activePopupQuestionSuccessfull3 && 
                <PopupQuestionSuccessfully
                    specificStyles={styles.popupSuccessfully}
                    text='Question successfully added from Form 5. Please complete one form at a time.' 
                    activePopup={setActivePopupQuestionSuccessfull3}
                />
            }

            {/* PopupOptionSuccessfully */}
            {activePopupOptionSuccessfull1 &&
                <PopupOptionSuccessfully
                    specificStyles={styles.popupSuccessfully}
                    text='Option successfully added from Form 2. Please complete one form at a time.' 
                    activePopup={setActivePopupOptionSuccessfull1}
                />

            }

            {activePopupOptionSuccessfull2 && 
                <PopupOptionSuccessfully
                    specificStyles={styles.popupSuccessfully} 
                    text='Option successfully added from Form 4. Please complete one form at a time.' 
                    activePopup={setActivePopupOptionSuccessfull2}
                />
            }

            {activePopupOptionSuccessfull3 && 
                <PopupOptionSuccessfully
                    specificStyles={styles.popupSuccessfully} 
                    text='Option successfully added from Form 6. Please complete one form at a time.' 
                    activePopup={setActivePopupOptionSuccessfull3}
                />
            }

        </div>
    )
}

export default FormsNewQuestionsOptions;
