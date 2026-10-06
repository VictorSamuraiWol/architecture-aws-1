import styles from './FormsNewQuestionsOptions.module.css'
import FieldsQuestionsOptions from './FieldsQuestionsOptions'
import ButtonDefault from '../ButtonDefault'
import saveAudio from '../../audios/save.mp3'
import errorAudio from '../../audios/errorForms.mp3'
import PopupRepeatedAlternatives from '../Popups/PopupRepeatedAlternatives'
import PopupCheckAlternativeAnswer from '../Popups/PopupCheckAlternativeAnswer'
import PopupCheckNumbers from '../Popups/PopupCheckNumbers'
import PopupCheckRequiredFields from '../Popups/PopupCheckRequiredFields'
import PopupSuccessfully from '../Popups/PopupSuccessfully'
import PopupAlertMessage from '../Popups/PopupAlertMessage'
import { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { DataContext } from '../DataContext'
import { v4 as uuidv4 } from 'uuid'

function FormsNewQuestionsOptions() {

    const uniqueId = uuidv4() // gerar uma id aleatória para a questão e a opção correspondente

    const saveSound = new Audio(saveAudio) // som ao salvar corretamente

    const errorSound = new Audio(errorAudio) // som ao tentar salvar incorretamente

    const { listUnicQuestionsContext, listUnicOptionsContext, listMultiQuestionsContext, listMultiOptionsContext, listThreeMultiQuestionsContext, listThreeMultiOptionsContext, setPostApi } = useContext(DataContext)

    // chamando a função 'repeatedAlternativesDefault' através do 'useOutletContext' criada na PageBase
    const { repeatedAlternativesDefault, mute } = useOutletContext()

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

    // capturando os números usados nos formulários 2 e 4
    const [listNumbersForms2and4and6, setListNumbersForms2and4and6] = useState([])

    // ativa ou desativa o componente 'PopupCheckRequiredFields'
    const [activePopupCheckRequiredFields, setActivePopupCheckRequiredFields] = useState(false)

    // ativa ou desativa o componente 'PopupCheckNumbers'
    const [activePopupCheckNumbers, setActivePopupCheckNumbers] = useState(false)

    // ativa ou desativa o componente 'PopupRepeatedAlternatives'
    const [activePopupRepeatedAlternativesForms, setActivePopupRepeatedAlternativesForms] = useState(false)

    // ativa ou desativa o componente 'PopupCheckAlternativeAnswer'
    const [activePopupcheckAlternativeAnswerForms1and2, setActivePopupcheckAlternativeAnswerForms1and2] = useState(false)
    const [activePopupcheckAlternativeAnswerForms3and4, setActivePopupcheckAlternativeAnswerForms3and4] = useState(false)
    const [activePopupcheckAlternativeAnswerForms5and6, setActivePopupcheckAlternativeAnswerForms5and6] = useState(false)

    // ativa ou desativa o componente 'PopupSuccessfully'
    const [activePopupSuccessfull, setActivePopupSuccessfull] = useState(false)

    const [noDataAlertForm, setNoDataAlertForm] = useState(false) // ativa o componente PopupAlertMessage
    
    const [colorIncorrect] = useState('#B71C1C') // passando a cor incorreta

    useEffect(() => {        
        // capturando o número de todas as opções presentes nos formulários 2 e 4
        listUnicOptionsContext && listMultiOptionsContext && listThreeMultiOptionsContext && 
            setListNumbersForms2and4and6([...listUnicOptionsContext.map(options => options.optionNumber), ...listMultiOptionsContext.map(options => options.optionNumber), ...listThreeMultiOptionsContext.map(options => options.optionNumber)])

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

    useEffect(() => {
        setNewQuestionNumberMain(newOptionNumberMain)
        setNewQuestionNumberMulti(newOptionNumberMulti)
        setNewQuestionNumberThreeMulti(newOptionNumberThreeMulti)


    }, [newOptionNumberMain, newOptionNumberMulti, newOptionNumberThreeMulti])

    // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900)
    function redVoidFieldForm(formX, formY) {
        const formQuestion = document.querySelector(`#${formX}`)
        const fieldsQuestion = formQuestion.querySelectorAll(".labelTextarea")

        const formOption = document.querySelector(`#${formY}`)
        const fieldsOption = formOption.querySelectorAll(".labelTextarea")               

        // formQuestion
        for(let i=0; i<fieldsQuestion.length; i++) {
            // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
            const label = fieldsQuestion[i].children[0]
            const textAreaInput = fieldsQuestion[i].children[1]

            label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

            // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
            if (textAreaInput.value === "" && label.innerText !== "Image Question:" && label.innerText !== "Icon Description:" 
                && label.innerText !== "Image Description:") {
                label.style.color = colorIncorrect // passando a cor incorreta

            }

        }

        // formOption
        for(let i=0; i<fieldsOption.length; i++) {
            // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
            const label = fieldsOption[i].children[0]
            const textAreaInput = fieldsOption[i].children[1]

            label.style.color = "" // para restaurar a cor inicial das labels antes de verificar os campos

            // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
            if (textAreaInput.value === "" && label.innerText !== "Option E:") {
                label.style.color = colorIncorrect // passando a cor incorreta

            }

        }

    }

    // função que verifica se o número da opção que irá ser criada já existe na lista das opções, para evitar repetição
    function numberValidationForms(list, optionNumber) {
        let isValid = true // variável que precisa de resposta imediata para validação, então não precisa usar 'useState' para mudança de estado

        list.forEach(number => {
            if (number !== '' && (number === optionNumber)) {
                isValid = false
                
            }
        })

        return isValid

    }

    const onSaveMainQuestionsOptions = async (e) => {
        e.preventDefault()

        if (listUnicQuestionsContext.length === 0  || listMultiQuestionsContext.length === 0 || listThreeMultiQuestionsContext.length === 0) {
            setNoDataAlertForm(true) // ativa o PopupAlertMessage

        } else {
            let dataMainQuestion = ''
            let dataMainOption = ''
            setPostApi(false) // volta ao estado inicial

            if (!newQuestionTextMain || !newCorrectAnswerMain || !newDescriptionMain || !newOptionAMain || !newOptionBMain || !newOptionCMain || !newOptionDMain || newOptionNumberMain === "") {
                // mantém newOptionNumberMain === "", pois é tipo número, se usar !newOptionNumberMain e a variável for 0 vira "inválido" mesmo sendo um valor numérico legítimo neste caso
                redVoidFieldForm('form1', 'form2')
    
                mute === false && errorSound.play() // toca o som 'errorSound'                
                console.error('Error in data received from Forms 1 and 2!')
                setActivePopupCheckRequiredFields(true) // ativa o 'PopupCheckRequiredFields'
    
            } else {
                if (numberValidationForms(listNumbersForms2and4and6, newOptionNumberMain) === false) { // se o número da questão for repetido ativa o 'PopupCheckNumbers'
                    setActivePopupCheckNumbers(true)
                    redVoidFieldForm('form1', 'form2')
                        
                } else if (repeatedAlternativesDefault(optionForm2).length > 0) {
                    // condição: checa se as alternativas se repetem
                    setActivePopupRepeatedAlternativesForms(true) // para mostrar o popup na tela
                    redVoidFieldForm('form1', 'form2')
                
                } else if (checkAlternativeAnswer() === true && newQuestionTextMain && newCorrectAnswerMain && newDescriptionMain && newOptionAMain && newOptionBMain && newOptionCMain && newOptionDMain && newOptionNumberMain) {
                    setActivePopupcheckAlternativeAnswerForms1and2(true) // ativa o popup
                    redVoidFieldForm('form1', 'form2')
    
                } else if (checkAlternativeAnswer() === false && newQuestionTextMain && newCorrectAnswerMain && newDescriptionMain && newOptionAMain && newOptionBMain && newOptionCMain && newOptionDMain && newOptionNumberMain) {
                    dataMainQuestion = {
                        questionText: newQuestionTextMain,
                        imageQuestion: newImageQuestionMain, // não obrigatório
                        correctAnswer: newCorrectAnswerMain,
                        iconDescription: newIconDescriptionMain, // não obrigatório
                        description: newDescriptionMain,
                        imageDescription: newImageDescriptionMain, // não obrigatório
                        questionNumber: newQuestionNumberMain, // o número da questão vai ser o mesmo número colocado no número da opção (newOptionNumberMain)
                        id: uniqueId
                    }
    
                    dataMainOption = {
                        optionA: newOptionAMain,
                        optionB: newOptionBMain,
                        optionC: newOptionCMain,
                        optionD: newOptionDMain,
                        optionE: newOptionEMain, // não obrigatório
                        optionNumber: newOptionNumberMain,
                        id: uniqueId
                    }
    
                    redVoidFieldForm('form1', 'form2')
                    mute === false && saveSound.play() // toca o som 'saveSound'
    
                }
                
                try {
                    const responseMainQuestion = await fetch('http://localhost:3001/listQuestionsMain', {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(dataMainQuestion)                
                    })
    
                    const responseMainOption = await fetch('http://localhost:3001/listOptionsMain', {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(dataMainOption)
                    }) 
                                
                    if (responseMainQuestion.ok && responseMainOption.ok) {
                        console.log(dataMainQuestion, dataMainOption, 'Data successfully submitted.')
                        setActivePopupSuccessfull(true)
                        setReadyToSendForm1(true)
                        setReadyToSendForm2(true)
                        setReadyToSendForm3(true)
                        setReadyToSendForm4(true)
                        setReadyToSendForm5(true)
                        setReadyToSendForm6(true)          
                        setPostApi(true) // tornar verdadeiro a cada POST
        
                    }
                    
                } catch(error) {
                    console.error('Error while submitting data', error)
        
                }
    
            }

        }

    }

    const onSaveMultiQuestionsOptions = async (e) => {
        e.preventDefault()

        if (listUnicQuestionsContext.length === 0  || listMultiQuestionsContext.length === 0 || listThreeMultiQuestionsContext.length === 0) {
            setNoDataAlertForm(true) // ativa o PopupAlertMessage

        } else {
            let dataMultiQuestion = ''
            let dataMultiOption = ''
            setPostApi(false) // volta ao estado inicial
    
            if (!newQuestionTextMulti || !newCorrectAnswerMulti || !newDescriptionMulti || !newOptionAMulti || !newOptionBMulti || !newOptionCMulti || !newOptionDMulti || newOptionNumberMulti === "") {
                // mantém newOptionNumberMulti === "", pois é tipo número, se usar !newOptionNumberMulti e a variável for 0 vira "inválido" mesmo sendo um valor numérico legítimo neste caso
                redVoidFieldForm('form3', 'form4')
    
                mute === false && errorSound.play() // toca o som 'errorSound'                
                console.error('Error in data received from Forms 3 and 4!')
                setActivePopupCheckRequiredFields(true) // ativa o 'PopupCheckRequiredFields'
    
            } else {
                if (numberValidationForms(listNumbersForms2and4and6, newOptionNumberMulti) === false) { // se o número da questão for repetido ativa o 'PopupCheckNumbers'
                    setActivePopupCheckNumbers(true)
                    redVoidFieldForm('form3', 'form4')
                        
                } else if (repeatedAlternativesDefault(null, optionForm4).length > 0) {
                    // condição: checa se as alternativas se repetem
                    setActivePopupRepeatedAlternativesForms(true) // para mostrar o popup na tela
                    redVoidFieldForm('form3', 'form4')
                
                } else if (checkAlternativeAnswer() === true && newQuestionTextMulti && newCorrectAnswerMulti && newDescriptionMulti && newOptionAMulti && newOptionBMulti && newOptionCMulti && newOptionDMulti && newOptionNumberMulti) {
                    setActivePopupcheckAlternativeAnswerForms3and4(true) // ativa o popup
                    redVoidFieldForm('form3', 'form4')
    
                } else if (checkAlternativeAnswer() === false && newQuestionTextMulti && newCorrectAnswerMulti && newDescriptionMulti && newOptionAMulti && newOptionBMulti && newOptionCMulti && newOptionDMulti && newOptionNumberMulti) {
                    dataMultiQuestion = {
                        questionText: newQuestionTextMulti,
                        imageQuestion: newImageQuestionMulti, // não obrigatório
                        correctAnswer: newCorrectAnswerMulti,
                        iconDescription: newIconDescriptionMulti, // não obrigatório
                        description: newDescriptionMulti,
                        imageDescription: newImageDescriptionMulti, // não obrigatório
                        questionNumber: newQuestionNumberMulti, // o número da questão vai ser o mesmo número colocado no número da opção (newOptionNumberMulti)
                        id: uniqueId
                    }
    
                    dataMultiOption = {
                        optionA: newOptionAMulti,
                        optionB: newOptionBMulti,
                        optionC: newOptionCMulti,
                        optionD: newOptionDMulti,
                        optionE: newOptionEMulti, // não obrigatório
                        optionNumber: newOptionNumberMulti,
                        id: uniqueId
                    }
    
                    redVoidFieldForm('form3', 'form4')
                    mute === false && saveSound.play() // toca o som 'saveSound'
    
                }
                
                try {
                    const responseMultiQuestion = await fetch('http://localhost:3001/listQuestionsMulti', {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(dataMultiQuestion)                
                    })
    
                    const responseMultiOption = await fetch('http://localhost:3001/listOptionsMulti', {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(dataMultiOption)
                    }) 
                                
                    if (responseMultiQuestion.ok && responseMultiOption.ok) {
                        console.log(dataMultiQuestion, dataMultiOption, 'Data successfully submitted.')
                        setActivePopupSuccessfull(true)
                        setReadyToSendForm1(true)
                        setReadyToSendForm2(true)
                        setReadyToSendForm3(true)
                        setReadyToSendForm4(true)
                        setReadyToSendForm5(true)
                        setReadyToSendForm6(true)          
                        setPostApi(true) // tornar verdadeiro a cada POST
        
                    }
                    
                } catch(error) {
                    console.error('Error while submitting data', error)
        
                }
    
            }

        }

    }

    const onSaveThreeMultiQuestionsOptions = async (e) => {
        e.preventDefault()

        if (listUnicQuestionsContext.length === 0  || listMultiQuestionsContext.length === 0 || listThreeMultiQuestionsContext.length === 0) {
            setNoDataAlertForm(true) // ativa o PopupAlertMessage

        } else {
            let dataThreeMultiQuestion = ''
            let dataThreeMultiOption = ''
            setPostApi(false) // volta ao estado inicial
    
            if (!newQuestionTextThreeMulti || !newCorrectAnswerThreeMulti || !newDescriptionThreeMulti || !newOptionAThreeMulti || !newOptionBThreeMulti || !newOptionCThreeMulti || !newOptionDThreeMulti || !newOptionEThreeMulti || !newOptionFThreeMulti || newOptionNumberThreeMulti === "") {
                // mantém newOptionNumberThreeMulti === "", pois é tipo número, se usar !newOptionNumberThreeMulti e a variável for 0 vira "inválido" mesmo sendo um valor numérico legítimo neste caso
                redVoidFieldForm('form5', 'form6')
    
                mute === false && errorSound.play() // toca o som 'errorSound'                
                console.error('Error in data received from Forms 5 and 6!')
                setActivePopupCheckRequiredFields(true) // ativa o 'PopupCheckRequiredFields'
    
            } else {
                if (numberValidationForms(listNumbersForms2and4and6, newOptionNumberThreeMulti) === false) { // se o número da questão for repetido ativa o 'PopupCheckNumbers'
                    setActivePopupCheckNumbers(true)
                    redVoidFieldForm('form5', 'form6')
                        
                } else if (repeatedAlternativesDefault(null, null, optionForm6).length > 0) {
                    // condição: checa se as alternativas se repetem
                    setActivePopupRepeatedAlternativesForms(true) // para mostrar o popup na tela
                    redVoidFieldForm('form5', 'form6')
                
                } else if (checkAlternativeAnswer() === true && newQuestionTextThreeMulti && newCorrectAnswerThreeMulti && newDescriptionThreeMulti && newOptionAThreeMulti && newOptionBThreeMulti && newOptionCThreeMulti && newOptionDThreeMulti && newOptionEThreeMulti && newOptionFThreeMulti && newOptionNumberThreeMulti) {
                    setActivePopupcheckAlternativeAnswerForms5and6(true) // ativa o popup
                    redVoidFieldForm('form5', 'form6')
    
                } else if (checkAlternativeAnswer() === false && newQuestionTextThreeMulti && newCorrectAnswerThreeMulti && newDescriptionThreeMulti && newOptionAThreeMulti && newOptionBThreeMulti && newOptionCThreeMulti && newOptionDThreeMulti && newOptionEThreeMulti && newOptionFThreeMulti && newOptionNumberThreeMulti) {
                    dataThreeMultiQuestion = {
                        questionText: newQuestionTextThreeMulti,
                        imageQuestion: newImageQuestionThreeMulti, // não obrigatório
                        correctAnswer: newCorrectAnswerThreeMulti,
                        iconDescription: newIconDescriptionThreeMulti, // não obrigatório
                        description: newDescriptionThreeMulti,
                        imageDescription: newImageDescriptionThreeMulti, // não obrigatório
                        questionNumber: newQuestionNumberThreeMulti, // o número da questão vai ser o mesmo número colocado no número da opção (newOptionNumberMulti)
                        id: uniqueId
                    }
    
                    dataThreeMultiOption = {
                        optionA: newOptionAThreeMulti,
                        optionB: newOptionBThreeMulti,
                        optionC: newOptionCThreeMulti,
                        optionD: newOptionDThreeMulti,
                        optionE: newOptionEThreeMulti,
                        optionF: newOptionFThreeMulti,
                        optionNumber: newOptionNumberThreeMulti,
                        id: uniqueId
                    }
    
                    redVoidFieldForm('form5', 'form6')
                    mute === false && saveSound.play() // toca o som 'saveSound'
    
                }
                
                try {
                    const responseThreeMultiQuestion = await fetch('http://localhost:3001/listQuestionsThreeMulti', {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(dataThreeMultiQuestion)                
                    })
    
                    const responseThreeMultiOption = await fetch('http://localhost:3001/listOptionsThreeMulti', {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(dataThreeMultiOption)
                    }) 
                                
                    if (responseThreeMultiQuestion.ok && responseThreeMultiOption.ok) {
                        console.log(dataThreeMultiQuestion, dataThreeMultiOption, 'Data successfully submitted.')
                        setActivePopupSuccessfull(true)
                        setReadyToSendForm1(true)
                        setReadyToSendForm2(true)
                        setReadyToSendForm3(true)
                        setReadyToSendForm4(true)
                        setReadyToSendForm5(true)
                        setReadyToSendForm6(true)          
                        setPostApi(true) // tornar verdadeiro a cada POST
        
                    }
                    
                } catch(error) {
                    console.error('Error while submitting data', error)
        
                }
    
            }

        }

    }

    // obs: não usar o checkAlternativeAnswerDefault da PageBase usando o 'useOutletContext' neste forms, pois são necessárias outras variáveis condições
    function checkAlternativeAnswer() { // função que verifica se há correspondência das alternativas da opção com a resposta da questão        
        let matchedAnswerOptionMain = null // variáveis usadas ao preencher o formulário 1        
        let matchedAnswerOptionMulti = null // variáveis usadas ao preencher o formulário 2        
        let matchedAnswerOptionThreeMulti = null // variáveis usadas ao preencher o formulário 3     
        let checkWithoutMatched = false // variável utilizada ao preencher todos os formulários

        // MainOption
        matchedAnswerOptionMain = optionForm2?.filter(option => option === newCorrectAnswerMain)

        // MultiOption
        matchedAnswerOptionMulti = newCorrectAnswerMulti?.includes(newOptionAMulti) && newCorrectAnswerMulti?.includes(newOptionBMulti)

        // ThreeMultiOption
        matchedAnswerOptionThreeMulti = newCorrectAnswerThreeMulti?.includes(newOptionAThreeMulti) && newCorrectAnswerThreeMulti?.includes(newOptionBThreeMulti) && newCorrectAnswerThreeMulti?.includes(newOptionCThreeMulti)

        if (matchedAnswerOptionMain?.length === 0) {
            checkWithoutMatched = true

        } else if (!matchedAnswerOptionMulti) {
            checkWithoutMatched = true

        } else if (!matchedAnswerOptionThreeMulti) {
            checkWithoutMatched = true

        } 

        return checkWithoutMatched
  
    }

    return(
        <div className={styles.formsNewQuestionsOptions}>
            <div className={styles.forms}>
                {/* Form 1 (Questions) */}
                <form 
                    className={styles.formQuestion}
                    id='form1'
                >
                    <div className={styles.containerTitleForm}>
                        <h1 className={styles.titleForm}>
                            MainQuestions:
                        </h1>

                    </div>

                    <FieldsQuestionsOptions
                        nameText1="Question:*"
                        nameText2="Image Question:"
                        nameText3="Answer:*"
                        nameText4="Icon Description:"
                        nameText5="Description:*"
                        nameText6="Image Description:"
                        specificStylesLabel={styles.specificStylesLabel}

                        setNewQuestionTextMain={setNewQuestionTextMain}
                        setNewImageQuestionMain={setNewImageQuestionMain}
                        setNewCorrectAnswerMain={setNewCorrectAnswerMain}
                        setNewIconDescriptionMain={setNewIconDescriptionMain}
                        setNewDescriptionMain={setNewDescriptionMain}
                        setNewImageDescriptionMain={setNewImageDescriptionMain}
                        setNewQuestionNumberMain={setNewQuestionNumberMain}
                        readyToSendForm1={readyToSendForm1}
                        setReadyToSendForm1={setReadyToSendForm1}
                    />

                </form>

                {/* Form 2 (Options) */}
                <form
                    onSubmit={onSaveMainQuestionsOptions}
                    className={styles.formOption}
                    id='form2'
                >
                    <div className={styles.containerTitleForm}>
                        <h1 className={styles.titleForm}>
                            MainOptions:
                        </h1>

                    </div>

                    <FieldsQuestionsOptions 
                        nameText1="Option A:*" 
                        nameText2="Option B:*" 
                        nameText3="Option C:*" 
                        nameText4="Option D:*"                
                        nameText5="Option E:" 
                        nameText6="Number:*"
                        specificStylesLabel={styles.specificStylesLabel}
 
                        setNewOptionAMain={setNewOptionAMain}    
                        setNewOptionBMain={setNewOptionBMain}     
                        setNewOptionCMain={setNewOptionCMain}    
                        setNewOptionDMain={setNewOptionDMain}    
                        setNewOptionEMain={setNewOptionEMain}    
                        setNewOptionNumberMain={setNewOptionNumberMain}
                        readyToSendForm2={readyToSendForm2}
                        setReadyToSendForm2={setReadyToSendForm2}
                    />

                    <div className={styles.containerButtonSave}>
                        <ButtonDefault
                            buttonName='Save' 
                            specificStyleButton={styles.buttonSave}
                            specificType='submit'
                        />

                    </div>

                </form>

            </div>

            <div className={styles.forms}>
                {/* Form 3 (MultiQuestions) */}
                <form
                    className={styles.formQuestion}
                    id='form3'
                >
                    <div className={styles.containerTitleForm}>
                        <h1 className={styles.titleForm}>
                            MultiQuestions:
                        </h1>

                    </div>

                    <FieldsQuestionsOptions
                        nameText1="Question:*"
                        nameText2="Image Question:"
                        nameText3="Answer:*"
                        nameText4="Icon Description:"
                        nameText5="Description:*"
                        nameText6="Image Description:"
                        specificStylesLabel={styles.specificStylesLabel}

                        setNewQuestionTextMulti={setNewQuestionTextMulti}
                        setNewImageQuestionMulti={setNewImageQuestionMulti}
                        setNewCorrectAnswerMulti={setNewCorrectAnswerMulti}
                        setNewIconDescriptionMulti={setNewIconDescriptionMulti}
                        setNewDescriptionMulti={setNewDescriptionMulti}
                        setNewImageDescriptionMulti={setNewImageDescriptionMulti}
                        setNewQuestionNumberMulti={setNewQuestionNumberMulti}
                        readyToSendForm3={readyToSendForm3}
                        setReadyToSendForm3={setReadyToSendForm3}
                    />

                </form>

                {/* Form 4 (MultiOptions) */}
                <form 
                    onSubmit={onSaveMultiQuestionsOptions} 
                    className={styles.formOption}
                    id='form4'
                >
                    <div className={styles.containerTitleForm}>
                        <h1 className={styles.titleForm}>
                            MultiOptions:
                        </h1>

                    </div>

                    <FieldsQuestionsOptions 
                        nameText1="Option A:*" 
                        nameText2="Option B:*" 
                        nameText3="Option C:*" 
                        nameText4="Option D:*"                
                        nameText5="Option E:" 
                        nameText6="Number:*"
                        specificStylesLabel={styles.specificStylesLabel}

                        setNewOptionAMulti={setNewOptionAMulti}
                        setNewOptionBMulti={setNewOptionBMulti}
                        setNewOptionCMulti={setNewOptionCMulti}
                        setNewOptionDMulti={setNewOptionDMulti}
                        setNewOptionEMulti={setNewOptionEMulti}
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
                    className={styles.formQuestion}
                    id='form5'
                >
                    <div className={styles.containerTitleForm}>
                        <h1 className={styles.titleForm}>
                            ThreeMultiQuestions:
                        </h1>

                    </div>

                    <FieldsQuestionsOptions
                        nameText1="Question:*"
                        nameText2="Image Question:"
                        nameText3="Answer:*"
                        nameText4="Icon Description:"
                        nameText5="Description:*"
                        nameText6="Image Description:"
                        specificStylesLabel={styles.specificStylesLabel}

                        setNewQuestionTextThreeMulti={setNewQuestionTextThreeMulti}
                        setNewImageQuestionThreeMulti={setNewImageQuestionThreeMulti}
                        setNewCorrectAnswerThreeMulti={setNewCorrectAnswerThreeMulti}
                        setNewIconDescriptionThreeMulti={setNewIconDescriptionThreeMulti}
                        setNewDescriptionThreeMulti={setNewDescriptionThreeMulti}
                        setNewImageDescriptionThreeMulti={setNewImageDescriptionThreeMulti}
                        setNewQuestionNumberThreeMulti={setNewQuestionNumberThreeMulti}
                        readyToSendForm5={readyToSendForm5}
                        setReadyToSendForm5={setReadyToSendForm5}
                    />

                </form>

                {/* Form 6 (ThreeMultiOptions) */}
                <form 
                    onSubmit={onSaveThreeMultiQuestionsOptions}
                    className={styles.formOption}
                    id='form6'
                >
                    <div className={styles.containerTitleForm}>
                        <h1 className={styles.titleForm}>
                            ThreeMultiOptions:
                        </h1>

                    </div>

                    <FieldsQuestionsOptions 
                        nameText1="Option A:*" 
                        nameText2="Option B:*" 
                        nameText3="Option C:*" 
                        nameText4="Option D:*"                
                        nameText5="Option E:*"
                        nameText6="Option F:*" 
                        nameText7="Number:*"
                        specificStylesLabel={styles.specificStylesLabel}

                        setNewOptionAThreeMulti={setNewOptionAThreeMulti}
                        setNewOptionBThreeMulti={setNewOptionBThreeMulti}
                        setNewOptionCThreeMulti={setNewOptionCThreeMulti}
                        setNewOptionDThreeMulti={setNewOptionDThreeMulti}
                        setNewOptionEThreeMulti={setNewOptionEThreeMulti}
                        setNewOptionFThreeMulti={setNewOptionFThreeMulti}
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

            {/* PopupCheckRequiredFields */}
            {activePopupCheckRequiredFields &&
                <PopupCheckRequiredFields
                    specificStyles={styles.popupCheckRequiredFields}
                    text={'Please fill in all required fields!'}
                    activePopup={setActivePopupCheckRequiredFields}
                />                
            }

            {/* PopupCheckNumbers */}
            {activePopupCheckNumbers &&
                <PopupCheckNumbers
                    specificStyles={styles.popupCheckNumbers}
                    text={'This number has already been used in previous question and option. Please use a number that has not been used yet.'}
                    activePopup={setActivePopupCheckNumbers}
                />
            }

            {/* PopupCheckAlternativeAnswer */}
            {activePopupcheckAlternativeAnswerForms1and2 && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms1and2}
                    textPopup={`Your answer does not contain any alternative from option! Please, before creating the question, make sure the answer is exactly the same as the correct alternative of option, and then proceed with creating the question. For more information, click the phrase below.`}
                    textModalDescription={`(Solution 1) Include in the answer to question the correct alternative from option, highlighted below: (Option: ${newOptionAMain}), (Option: ${newOptionBMain}), (Option: ${newOptionCMain})${newOptionEMain ? `, (Option: ${newOptionDMain}) or (Option: ${newOptionEMain}).` : ` or (Option: ${newOptionDMain}).`}
                        (Solution 2) Include in one of the alternatives of option the answer to question, highlighted below: (Answer: ${newCorrectAnswerMain}).`}
                />
            }

            {activePopupcheckAlternativeAnswerForms3and4 && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms3and4}
                    textPopup={`Your answer does not contain the two correct alternatives (Option A and Option B) from option! Please, before creating the question, include both correct alternatives (Option A and Option B) from option in the answer, and then proceed with creating the question. For more information, click the phrase below.`} 
                    textModalDescription={`(Solution 1) Include in the answer to question the two correct alternatives from option, highlighted below: (Option: ${newOptionAMulti}) and (Option: ${newOptionBMulti}).
                        (Solution 2) Include in the first two alternatives (Option A and Option B) of option the answers included in question, highlighted below: (Answer: ${newCorrectAnswerMulti}).`}
                />
            }

            {activePopupcheckAlternativeAnswerForms5and6 && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms5and6}
                    textPopup={`Your answer does not contain the three correct alternatives (Option A, Option B and Option C) from option! Please, before creating the question, include three correct alternatives (Option A, Option B and Option C) from option in the answer, and then proceed with creating the question. For more information, click the phrase below.`} 
                    textModalDescription={`(Solution 1) Include in the answer to question the three correct alternatives from option, highlighted below: (Option: ${newOptionAThreeMulti}), (Option: ${newOptionBThreeMulti}) and (Option: ${newOptionCThreeMulti}).
                        (Solution 2) Include in the first three alternatives (Option A, Option B and Option C) of option the answers included in question, highlighted below: (Answer: ${newCorrectAnswerThreeMulti}).`}
                />
            }

            {/* PopupRepeatedAlternatives */}
            {activePopupRepeatedAlternativesForms && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedForms} 
                    textPopup={"There are duplicate alternatives. Please, before creating the option, update the alternatives so that all of them are different, and then proceed with creating the option."} 
                    activePopup={setActivePopupRepeatedAlternativesForms}                    
                />
            }

            {/* PopupSuccessfully */}
            {activePopupSuccessfull &&
                <PopupSuccessfully 
                specificStyles={styles.popupSuccessfully}
                    text='Sent successfully.' 
                    activePopup={setActivePopupSuccessfull}
                />
            }

            {/* PopupAlertMessage */}
            {noDataAlertForm &&
                <PopupAlertMessage 
                    text="No data found. Need to mock the API."
                    activePopup={setNoDataAlertForm}
                    specificStyles={styles.popupAlertMessage}
                />
            }

        </div>
    )
}

export default FormsNewQuestionsOptions;
