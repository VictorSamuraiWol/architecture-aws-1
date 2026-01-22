import styles from './FormsNewQuestionsOptions.module.css'
import backgroundImage from '../../imgs/forms-image.png'
import FieldsQuestionsOptions from './FieldsQuestionsOptions'
import PopupRepeatedAlternatives from '../PopupRepeatedAlternatives'
import PopupCheckAlternativeAnswer from '../PopupCheckAlternativeAnswer'
import ButtonDefault from '../ButtonDefault'
import saveAudio from '../../audios/save.mp3'
import errorAudio from '../../audios/errorForms.mp3'
import { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { DataContext } from '../DataContext'
import { v4 as uuidv4 } from 'uuid'

function FormsNewQuestionsOptionsPage() {

    const uniqueId = uuidv4(); // gerar uma id aleatória para a questão e a opção correspondente

    const saveSound = new Audio(saveAudio) // som ao salvar corretamente

    const errorSound = new Audio(errorAudio) // som ao tentar salvar incorretamente

    const { listUnicQuestionsContext, listUnicOptionsContext, listMultiQuestionsContext, listMultiOptionsContext, updateList, setPostApi } = useContext(DataContext)

    // chamando a função 'repeatedAlternativesDefault' através do 'useOutletContext' criada na PageBase
    const { setActivePageFormsQuestionsOptions, repeatedAlternativesDefault, mute } = useOutletContext()

    // capturando o conteúdo da label
    const [labelTarget, setLabelTarget] = useState("")

    // atributos da questão única (formulário 1):
    const [newQuestionQuestions, setNewQuestionQuestions] = useState("")
    const [newAnswerQuestions, setNewAnswerQuestions] = useState("")
    const [newSourceImageQuestions, setNewSourceImageQuestions] = useState("")
    const [newDescriptionQuestions, setNewDescriptionQuestions] = useState("")
    const [newQuestionsNumberQuestions, setNewQuestionsNumberQuestions] = useState("")

    // atributos da opção única (formulário 2):
    const [newOption1Question, setNewOption1Question] = useState("")
    const [newOption2Question, setNewOption2Question] = useState("")
    const [newOption3Question, setNewOption3Question] = useState("")
    const [newOption4Question, setNewOption4Question] = useState("")
    const [newOption5Question, setNewOption5Question] = useState("")
    const [newOptionsNumberQuestions, setNewOptionsNumberQuestions] = useState("")

    // atributos da questão múltipla (formulário 3)
    const [newQuestionMultiQuestions, setNewQuestionMultiQuestions] = useState("")
    const [newAnswerTextMultiQuestions, setNewAnswerTextMultiQuestions] = useState("")
    const [newSourceImageMultiQuestions, setNewSourceImageMultiQuestions] = useState("")
    const [newDescriptionMultiQuestions, setNewDescriptionMultiQuestions] = useState("")
    const [newQuestionsNumberMultiQuestions, setNewQuestionsNumberMultiQuestions] = useState("")

    // atributos da opção múltipla (formulário 4)
    const [newOption1MultiQuestion, setNewOption1MultiQuestion] = useState("")
    const [newOption2MultiQuestion, setNewOption2MultiQuestion] = useState("")
    const [newOption3MultiQuestion, setNewOption3MultiQuestion] = useState("")
    const [newOption4MultiQuestion, setNewOption4MultiQuestion] = useState("")
    const [newOption5MultiQuestion, setNewOption5MultiQuestion] = useState("")
    const [newOptionsNumberMultiQuestions, setNewOptionsNumberMultiQuestions] = useState("")

    // lista de todas as alternativas da opção única (formulário 2)
    const [optionForm2, setOptionForm2] = useState('')

    // list de todas as alternativas da opção múltipla (formulário 4)
    const [optionForm4, setOptionForm4] = useState('')

    const [readyToSendForm1, setReadyToSendForm1] = useState(false);
    const [readyToSendForm2, setReadyToSendForm2] = useState(false);
    const [readyToSendForm3, setReadyToSendForm3] = useState(false);
    const [readyToSendForm4, setReadyToSendForm4] = useState(false);
    const [readyToCleanAll, setReadyToCleanAll] = useState(false);

    // capturar a mensagem de alerta para exibir na tela dos formulários
    const [alertMessage, setAlertMessage] = useState('')

    // capturando os números usados nos formulários 1 e 3
    const [listNumbersForms1and3, setListNumbersForms1and3] = useState([])

    // capturando os números usados nos formulários 2 e 4
    const [listNumbersForms2and4, setListNumbersForms2and4] = useState([])

    // ativa o componente PopupRepeatedAlternatives no formulário 2
    const [activePopupRepeatedAlternativesForms2, setActivePopupRepeatedAlternativesForms2] = useState(false) 

    // ativa o componente PopupRepeatedAlternatives nao formulário 4
    const [activePopupRepeatedAlternativesForms4, setActivePopupRepeatedAlternativesForms4] = useState(false)

    // ativa o componente PopupCheckAlternativeAnswer no FormsNewQuestionsOptionsPage
    const [activePopupcheckAlternativeAnswerForms1, setActivePopupcheckAlternativeAnswerForms1] = useState(false)

    // ativa o componente PopupCheckAlternativeAnswer no FormsNewQuestionsOptionsPage 
    const [activePopupcheckAlternativeAnswerForms2, setActivePopupcheckAlternativeAnswerForms2] = useState(false)  

    // ativa o componente PopupCheckAlternativeAnswer no FormsNewQuestionsOptionsPage 
    const [activePopupcheckAlternativeAnswerForms3, setActivePopupcheckAlternativeAnswerForms3] = useState(false) 

    // ativa o componente PopupCheckAlternativeAnswer no FormsNewQuestionsOptionsPage
    const [activePopupcheckAlternativeAnswerForms4, setActivePopupcheckAlternativeAnswerForms4] = useState(false) 

    // passando a cor incorreta
    const [colorIncorrect] = useState('#B71C1C')

    const [matchedOptionMainPopup, setMatchedOptionMainPopup] = useState('') // capturar a opção única (form1)
    const [matchedOptionMainPopupNumber, setMatchedOptionMainPopupNumber] = useState('') // capturar o número da opção única (form1)
    const [matchedQuestionMainPopupAnswer, setMatchedQuestionMainPopupAnswer] = useState('') // capturar a resposta da questão única (form2)
    const [matchedQuestionMainPopupNumber, setMatchedQuestionMainPopupNumber] = useState('') // capturar o número da questão única (form2)
    const [matchedOptionMultiMainPopupAnswers, setMatchedOptionMultiMainPopupAnswers] = useState('') // capturar as duas alternativas corretas da opção múltipla (form3)
    const [matchedOptionMultiMainPopupNumber, setMatchedOptionMultiMainPopupNumber] = useState('') // capturar o número da opção múltipla (form3)
    const [matchedQuestionMultiMainPopupAnswer, setMatchedQuestionMultiMainPopupAnswer] = useState('') // capturar a resposta da questão múltipla (form4) 
    const [matchedQuestionMultiMainPopupNumber, setMatchedQuestionMultiMainPopupNumber] = useState('') // capturar o número da questão múltipla (form4)
    
    // obs: não usar o checkAlternativeAnswerDefault da PageBase usando o 'useOutletContext' neste forms, pois são necessárias outras variáveis e 4 condições
    function checkAlternativeAnswer() { // função que verifica se há correspondência das alternativas da opção com a resposta da questão
        // variáveis usadas ao preencher o formulário 1
        let matchedOptionMain = null
        let matchedAnswerAnternativeMain = null
        let matchedOptionMainNumber = null        
        
        // variáveis usadas ao preencher o formulário 2
        let matchedQuestionMain = null
        let matchedQuestionMainAnswer = null
        let matchedAlternativeAnswerMain = null

        // variáveis usadas para preencher o formulário 3
        let matchedOptionMultiMain = null
        let matchedAnswerAnternativeMultiMain = null
        let matchedOptionMultiMainNumber = null

        // variáveis usadas ao preencher o formulário 4
        let matchedQuestionMultiMain = null
        let matchedQuestionMultiMainAnswerText = null
        let matchedAlternativeAnswerMultiMain = null

        // variável utilizada ao preencher todos os formulários
        let checkWithoutMatched = false
      
        // filtra a opção única correspondente, ao preencher o formulário 1
        matchedOptionMain = listUnicOptionsContext.filter(option => option.numberOption === newQuestionsNumberQuestions).map(option => [option.option1, option.option2, option.option3, option.option4, option.option5])[0]

        // capturar o número da opção correspondente, ao preencher o formulário 1
        matchedOptionMainNumber = listUnicOptionsContext.filter(option => option.numberOption === newQuestionsNumberQuestions).map(option => option.numberOption)

        // filtra a alternativa que corresponde a resposta que está sendo criada na questão única correspondente, não incluindo alternativas vazias, ao preencher o formulário 1
        matchedAnswerAnternativeMain = matchedOptionMain?.filter(value => value === newAnswerQuestions)[0]

        // filtra a questão única correspondente, ao preencher o formulário 2
        matchedQuestionMain = listUnicQuestionsContext.filter(question => question.numberQuestion === newOptionsNumberQuestions)[0]
        matchedQuestionMainAnswer = matchedQuestionMain?.answer // capturando a resposta da questão única

        // filtra a alternativa que corresponde a resposta da questão única correspondente, não incluindo alternativas vazias, ao preencher o formulário 2
        matchedAlternativeAnswerMain = optionForm2 && optionForm2.filter(alternative => (alternative !== '') && (alternative === matchedQuestionMainAnswer))

        // filtra a opção múltipla correspondente, ao preencher o formulário 3
        matchedOptionMultiMain = listMultiOptionsContext.filter(option => option.numberOption === newQuestionsNumberMultiQuestions).map(option => [option.option1, option.option2])[0]

        // capturar o número da opção correspondente, ao preencher o formulário 3
        matchedOptionMultiMainNumber = listMultiOptionsContext.filter(option => option.numberOption === newQuestionsNumberMultiQuestions).map(option => option.numberOption)
        
        // retorna 'true' se os valores de 'Option1' e 'Option2' estiverem incluídos na resposta da questão múltipla, que está criando, ao preencher o formulário 3
        matchedAnswerAnternativeMultiMain = newAnswerTextMultiQuestions.includes(matchedOptionMultiMain && matchedOptionMultiMain[0]) && newAnswerTextMultiQuestions.includes(matchedOptionMultiMain && matchedOptionMultiMain[1])

        // filtra a questão múltipla correspondente, ao preencher o formulário 4
        matchedQuestionMultiMain = listMultiQuestionsContext.filter(question => question.numberQuestion === newOptionsNumberMultiQuestions)[0]
        matchedQuestionMultiMainAnswerText = matchedQuestionMultiMain?.answerText // capturando a resposta da questão múltipla

        // retorna 'true' se os valores de 'Option1' e 'Option2' estiverem incluídos na resposta da questão múltipla, não incluindo alternativas vazias, ao preencher o formulário 4
        matchedAlternativeAnswerMultiMain = optionForm4 && ((optionForm4[0] !== '') && (matchedQuestionMultiMainAnswerText?.includes(optionForm4[0])) && (optionForm4[1] !== '') && (matchedQuestionMultiMainAnswerText?.includes(optionForm4[1])))

        if (readyToSendForm1 === true && (matchedOptionMain?.length > 0) && (matchedAnswerAnternativeMain === undefined)) {
        // condição: se existe a opção correspondente e se não há alguma alternativa igual a resposta da questão, ao preencher o formulário 1
            checkWithoutMatched = true

        } else if (readyToSendForm2 === true && (matchedQuestionMain && (matchedAlternativeAnswerMain.length === 0))) {
        // condição: se existe questão correspondente e se não há alguma alternativa igual a resposta da questão, ao preencher o formulário 2
            checkWithoutMatched = true

        } else if (readyToSendForm3 === true && (matchedOptionMultiMain?.length > 0) && matchedAnswerAnternativeMultiMain === false) {
        // condição: se existe a opção correspondente e se as duas alternativas corretas não estão incluídas na resposta da questão, ao preencher o formulário 3
            checkWithoutMatched = true

        } else if (readyToSendForm4 === true && (matchedQuestionMultiMain && (matchedAlternativeAnswerMultiMain === false))) {
        // condição: se existe questão correspondente e se as duas alternativas corretas não estão incluídas na resposta da questão, ao preencher o formulário 4
            checkWithoutMatched = true

        }

        setMatchedOptionMainPopup(matchedOptionMain) // capturar a opção única (form1)
        setMatchedOptionMainPopupNumber(matchedOptionMainNumber) // capturar o número da opção única (form1)
        setMatchedQuestionMainPopupAnswer(matchedQuestionMainAnswer) // capturar a resposta da questão única (form2)
        setMatchedQuestionMainPopupNumber(matchedQuestionMain?.numberQuestion) // capturar o número da questão única (form2)
        setMatchedOptionMultiMainPopupAnswers([matchedOptionMultiMain && matchedOptionMultiMain[0], matchedOptionMultiMain && matchedOptionMultiMain[1]]) // capturar as duas alternativas corretas da opção múltipla (form3)
        setMatchedOptionMultiMainPopupNumber(matchedOptionMultiMainNumber) // capturar o número da opção múltipla (form3)
        setMatchedQuestionMultiMainPopupAnswer(matchedQuestionMultiMainAnswerText) // capturar a resposta da questão múltipla (form4)
        setMatchedQuestionMultiMainPopupNumber(matchedQuestionMultiMain?.numberQuestion) // capturar o número da questão múltipla (form4)       
        
        return checkWithoutMatched
  
    }

    useEffect(() => {
        // capturando o número de todas as questões presentes nos formulários 1 e 3
        listUnicQuestionsContext && listMultiQuestionsContext && setListNumbersForms1and3([...listUnicQuestionsContext.map(questions => {return questions.numberQuestion}), ...listMultiQuestionsContext.map(questions => {return questions.numberQuestion})])
        
        // capturando o número de todas as opções presentes nos formulários 2 e 4
        listUnicOptionsContext && listMultiOptionsContext && setListNumbersForms2and4([...listUnicOptionsContext.map(options => {return options.numberOption}), ...listMultiOptionsContext.map(options => {return options.numberOption})])

    },[listUnicQuestionsContext, listMultiQuestionsContext, listUnicOptionsContext, listMultiOptionsContext])

    useEffect(() => {
        // atualizando as listas dos formulários 2 e 4 com o valores colocados nos campos das alternativas
        setOptionForm2([newOption1Question, newOption2Question, newOption3Question, newOption4Question, newOption5Question])
        setOptionForm4([newOption1MultiQuestion, newOption2MultiQuestion, newOption3MultiQuestion, newOption4MultiQuestion, newOption5MultiQuestion])

    }, [newOption1Question, newOption2Question, newOption3Question, newOption4Question, newOption5Question, newOption1MultiQuestion, newOption2MultiQuestion, newOption3MultiQuestion, newOption4MultiQuestion, newOption5MultiQuestion])

    useEffect(() => {
        setActivePageFormsQuestionsOptions(true) // verifica se a página Forms está ativa

    }, [setActivePageFormsQuestionsOptions])

    function cleanAllForms() {         
        // zerando os valores aqui e os do componente "CampoQuestionOption" para certificar que todos serão zerados após envio de qualquer formulário
        if ((readyToSendForm1 === true) || (readyToSendForm2 === true) || (readyToSendForm3 === true) || (readyToSendForm4 === true)) {
            // form 1
            setNewQuestionQuestions('')
            setNewAnswerQuestions('')
            setNewSourceImageQuestions('')
            setNewDescriptionQuestions('')
            setNewQuestionsNumberQuestions('')

            // form 2
            setNewOption1Question('')
            setNewOption2Question('')
            setNewOption3Question('')
            setNewOption4Question('')
            setNewOption5Question('')
            setNewOptionsNumberQuestions('')

            // form 3
            setNewQuestionMultiQuestions('')
            setNewAnswerTextMultiQuestions('')
            setNewSourceImageMultiQuestions('')
            setNewDescriptionMultiQuestions('')
            setNewQuestionsNumberMultiQuestions('')

            // form 4
            setNewOption1MultiQuestion('')
            setNewOption2MultiQuestion('')
            setNewOption3MultiQuestion('')
            setNewOption4MultiQuestion('')
            setNewOption5MultiQuestion('')
            setNewOptionsNumberMultiQuestions('')

        }

        setReadyToCleanAll(true)

    }

    // função utilizando POST para salvar os dados do form1 na API
    const onSaveForm1 = async (e) => {
        e.preventDefault();
        let data = '';
        let isValid = true; // variável que precisa de resposta imediata para validação, então não precisa usar 'useState' para mudança de estado

        function numberValidationForms() { // função que verifica se o número da questão que irá ser criada já existe na lista das questões, para evitar repetição
            listNumbersForms1and3.forEach(number => {
                if ((number === newQuestionsNumberQuestions)) {
                    isValid = false;
                    
                } 
            })
        }
    
        numberValidationForms() // chamando a função que verifica se o número da questão que irá ser criada já existe na lista das questões

        if (checkAlternativeAnswer() === true && (newQuestionQuestions && newAnswerQuestions && newDescriptionQuestions && newQuestionsNumberQuestions)) {
            setActivePopupcheckAlternativeAnswerForms1(true) // ativa o popup

        } else {
            // colocando somente os campos que serão obrigatórios
            if (readyToSendForm1 === true && isValid === true && newQuestionQuestions && newAnswerQuestions && newDescriptionQuestions && newQuestionsNumberQuestions) { 
                data = {
                    question: newQuestionQuestions,
                    answer: newAnswerQuestions,
                    srcImg: newSourceImageQuestions, // não obrigatório
                    descriptionP: newDescriptionQuestions,
                    numberQuestion: newQuestionsNumberQuestions,
                    id: uniqueId
                }

                // limpar todas as cores das labels para as cores iniciais depois submeter os dados
                function cleanLabels() {
                    const form1 = document.querySelector("#form1");
                    const fields = form1.querySelectorAll(".labelTextarea");
        
                    fields.forEach(field => {
                            const label = field.children[0];
                            label.style.color = ""
        
                    })
                }

                cleanLabels()
                mute === false && saveSound.play() // toca o som 'saveSound'

            } else if (readyToSendForm1 === true && isValid === true && (newQuestionQuestions === "" || newAnswerQuestions === "" || newDescriptionQuestions === "" || newQuestionsNumberQuestions === "")) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'for'
                function redVoidField() {
                    const form1 = document.querySelector("#form1");
                    const fields = form1.querySelectorAll(".labelTextarea");

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0];
                        const textAreaInput = fields[i].children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Source Image:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    }
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 1!')
                alert("Por favor! Preencha todos os campos necessários do form 1!")

            } else if (readyToSendForm1 === true && isValid === false && newQuestionQuestions && newAnswerQuestions && newDescriptionQuestions && newQuestionsNumberQuestions) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'for'
                function redVoidField() {
                    const form1 = document.querySelector("#form1");
                    const fields = form1.querySelectorAll(".labelTextarea");

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0];
                        const textAreaInput = fields[i].children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Source Image:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    }
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 1!')
                alert("Este número já foi utilizado em questões anteriores, por favor, utilize outro número que ainda não foi utilizado.")

            } else if (readyToSendForm1 === true && isValid === false && (newQuestionQuestions === "" || newAnswerQuestions === "" || newDescriptionQuestions === "" || newQuestionsNumberQuestions === "")) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'for'
                function redVoidField() {
                    const form1 = document.querySelector("#form1");
                    const fields = form1.querySelectorAll(".labelTextarea");

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0];
                        const textAreaInput = fields[i].children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Source Image:") {
                            label.style.color = colorIncorrect // passando a cor incorreta


                        }
                    }
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 1!')
                alert("Por favor! Preencha todos os campos necessários do form 1! Este número já foi utilizado em questões anteriores, utilize outro número que ainda não foi utilizado.")
                    
            } else {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'for'
                function redVoidField() {
                    const form1 = document.querySelector("#form1");
                    const fields = form1.querySelectorAll(".labelTextarea");

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0];
                        const textAreaInput = fields[i].children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Source Image:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    }
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 1!')
                alert("Por favor! Preencha todos os campos do formulário 1 corretamente!")

            }     
                
            try {
                const response = await fetch('http://localhost:3001/questions', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data),
                    
                }); 
                            
                if (response.ok) {
                    console.log(data, "Dados enviados com sucesso do form 1! Preencha um formulário por vez.");
                    alert('Questão adicionada com sucesso do form 1! Preencha um formulário por vez.')
                    cleanAllForms(); // limpar o formulário
                
                    setPostApi(true) // tornar verdadeiro a cada POST

                }
                
            } catch(error) {
            console.error("Erro ao enviar os dados", error);

            }

        }

        setReadyToSendForm1(false) // volta ao estado inicial ao submeter o formulário (false)
      
    }

// função utilizando POST para salvar os dados do form2 na API
    const onSaveForm2 = async (e) => {
        e.preventDefault();
        let data = '';
        let isValid = true; // variável que precisa de resposta imediata para validação, então não precisa usar 'useState' para mudança de estado

        function numberValidationForms() { // função que verifica se o número da opção que irá ser criada já existe na lista das opções, para evitar repetição
            listNumbersForms2and4.forEach(number => {
                if ((number === newOptionsNumberQuestions)) {
                    isValid = false;
                    
                } 
            })
        }
    
        numberValidationForms() // chamando a função que verifica se o número da opção que irá ser criada já existe na lista das opções

        if (checkAlternativeAnswer() === true && (newOption1Question && newOption2Question && newOption3Question && newOption4Question && newOptionsNumberQuestions)) {
            setActivePopupcheckAlternativeAnswerForms2(true) // ativa o popup

        } else {
            // colocando somente os campos que serão obrigatórios
            if (readyToSendForm2 === true && isValid === true && (newOption1Question && newOption2Question && newOption3Question && newOption4Question && newOptionsNumberQuestions)) { 
            // condição 1: se clicou no botão submit (readyToSendForm2), se o número da questão não se repete (isValid), se todos os campos obrigatórios foram preenchidos (newOption1Question, newOption2Question, newOption3Question, newOption4Question, newOptionsNumberQuestions)
                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem (repeatedAlternativesDefault(optionForm2, optionForm4)
                    setActivePopupRepeatedAlternativesForms2(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms2(false) // desativa o popup em 15s

                    }, 15000)
                
                } else {
                    data = {
                        option1: newOption1Question,
                        option2: newOption2Question,
                        option3: newOption3Question,
                        option4: newOption4Question,
                        option5: newOption5Question, // não obrigatório
                        numberOption: newOptionsNumberQuestions,
                        id: uniqueId
                    }

                    // limpar todas as cores das labels para as cores iniciais depois submeter os dados
                    function cleanLabels() {
                        const form2 = document.querySelector("#form2");
                        const fields = form2.querySelectorAll(".labelTextarea");
            
                        fields.forEach(field => {
                                const label = field.children[0];
                                label.style.color = ""
            
                        })
                    }

                    cleanLabels()
                    setActivePopupRepeatedAlternativesForms2(false) // desativar o popup, caso esteja visível na tela
                    mute === false && saveSound.play() // toca o som 'saveSound'

                }

            } else if (readyToSendForm2 === true && isValid === true && (newOption1Question === "" || newOption2Question === "" || newOption3Question === "" || newOption4Question === "" || newOptionsNumberQuestions === "")) {
            // condição 2: se clicou no botão submit (readyToSendForm2), se o número da questão não se repete (isValid), se tem campos obrigatórios vazios (newOption1Question, newOption2Question, newOption3Question, newOption4Question, newOptionsNumberQuestions)
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'for'
                function redVoidField() {
                    const form2 = document.querySelector("#form2");
                    const fields = form2.querySelectorAll(".labelTextarea");

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0];
                        const textAreaInput = fields[i].children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option 5:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    }
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                
                console.error('Erro nos dados recebidos do form 2!')
                alert("Por favor! Preencha todos os campos necessários do form 2!")

                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem (repeatedAlternativesDefault(optionForm2, optionForm4)
                    setActivePopupRepeatedAlternativesForms2(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms2(false) // desativa o popup em 15s

                    }, 15000)
                
                }
                
            } else if (readyToSendForm2 === true && isValid === false && (newOption1Question && newOption2Question && newOption3Question && newOption4Question && newOptionsNumberQuestions)) {
            // condição 3: se clicou no botão submit (readyToSendForm2), se o número da questão se repete (isValid), se todos os campos obrigatórios foram preenchidos (newOption1Question, newOption2Question, newOption3Question, newOption4Question, newOptionsNumberQuestions)
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'for'
                function redVoidField() {
                    const form2 = document.querySelector("#form2");
                    const fields = form2.querySelectorAll(".labelTextarea");

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0];
                        const textAreaInput = fields[i].children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option 5:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    }
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 2!')
                alert("Este número já foi utilizado em opções anteriores, por favor, utilize outro número que ainda não foi utilizado.")

                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem (repeatedAlternativesDefault(optionForm2, optionForm4)
                    setActivePopupRepeatedAlternativesForms2(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms2(false) // desativa o popup em 15s

                    }, 15000)
                
                }

            } else if (readyToSendForm2 === true && isValid === false && (newOption1Question === "" || newOption2Question === "" || newOption3Question === "" || newOption4Question === "" || newOptionsNumberQuestions === "")) {
            // condição 4: se clicou no botão submit (readyToSendForm2), se o número da questão se repete (isValid), se tem campos obrigatórios vazios (newOption1Question, newOption2Question, newOption3Question, newOption4Question, newOptionsNumberQuestions)
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'for'
                function redVoidField() {
                    const form2 = document.querySelector("#form2");
                    const fields = form2.querySelectorAll(".labelTextarea");

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0];
                        const textAreaInput = fields[i].children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option 5:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    }
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 2!')
                alert("Por favor! Preencha todos os campos necessários do form 2! Este número já foi utilizado em opções anteriores, utilize outro número que ainda não foi utilizado.")

                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem (repeatedAlternativesDefault(optionForm2, optionForm4)
                    setActivePopupRepeatedAlternativesForms2(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms2(false) // desativa o popup em 15s

                    }, 15000)
                
                }
                    
            } else {
            //condição 5: o que não atender as condições acima
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'for'
                function redVoidField() {
                    const form2 = document.querySelector("#form2");
                    const fields = form2.querySelectorAll(".labelTextarea");

                    for(let i=0; i<fields.length; i++) {
                        // "fields[i].children[0]" captura as labels e "fields[i].children[1]" captura os campos input e textarea  
                        const label = fields[i].children[0];
                        const textAreaInput = fields[i].children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option 5:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    }
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 2!')
                alert("Por favor! Preencha todos os campos do formulário 2 corretamente!")

            }

            try {
                const response = await fetch('http://localhost:3001/options', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data),

                });        
            
                if (response.ok) {
                    console.log(data, "Dados enviados com sucesso do form 2! Preencha um formulário por vez.");
                    alert('Questão adicionada com sucesso do form 2! Preencha um formulário por vez.')
                    cleanAllForms(); // limpar o formulário
                    
                    setPostApi(true) // tornar verdadeiro a cada POST
                    
                }

            } catch(error) {
                console.error("Erro ao enviar os dados", error);
                
            }

        } 
        
        setReadyToSendForm2(false) // volta ao estado inicial ao submeter o formulário (false)
                
    }

    // função utilizando POST para salvar os dados do form3 na API
    const onSaveForm3 = async (e) => {
        e.preventDefault();
        let data = '';
        let isValid = true; // variável que precisa de resposta imediata para validação, então não precisa usar 'useState' para mudança de estado

        function numberValidationForms() { // função que verifica se o número da questão que irá ser criada já existe na lista das questões, para evitar repetição
            listNumbersForms1and3.forEach(number => {
                if ((number === newQuestionsNumberMultiQuestions)) {
                    isValid = false;
                    
                } 
            })
        }
    
        numberValidationForms() // chamando a função que verifica se o número da questão que irá ser criada já existe na lista das questões

        checkAlternativeAnswer()

        if (checkAlternativeAnswer() === true && (newQuestionMultiQuestions && newAnswerTextMultiQuestions && newDescriptionMultiQuestions && newQuestionsNumberMultiQuestions)) {
            setActivePopupcheckAlternativeAnswerForms3(true) // ativa o popup

        } else {
            // colocando somente os campos que serão obrigatórios
            if (readyToSendForm3 === true && isValid === true && newQuestionMultiQuestions && newAnswerTextMultiQuestions && newDescriptionMultiQuestions && newQuestionsNumberMultiQuestions) {  
                data = {
                    question: newQuestionMultiQuestions,
                    answerText: newAnswerTextMultiQuestions,
                    srcImg: newSourceImageMultiQuestions, // não obrigatório
                    descriptionP: newDescriptionMultiQuestions,
                    numberQuestion: newQuestionsNumberMultiQuestions,
                    id: uniqueId
                }

                // limpar todas as cores das labels para as cores iniciais depois submeter os dados
                function cleanLabels() {
                    const form3 = document.querySelector("#form3");
                    const fields = form3.querySelectorAll(".labelTextarea");
        
                    fields.forEach(field => {
                            const label = field.children[0];
                            label.style.color = ""
        
                    })
                }

                cleanLabels()
                mute === false && saveSound.play() // toca o som 'saveSound'

            } else if (readyToSendForm3 === true && isValid === true && (newQuestionMultiQuestions === "" || newAnswerTextMultiQuestions === "" || newDescriptionMultiQuestions === "" || newQuestionsNumberMultiQuestions === "")) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'forEach'
                function redVoidField() {
                    const form3= document.querySelector("#form3");
                    const fields = form3.querySelectorAll(".labelTextarea");

                    fields.forEach(field => {
                        const label = field.children[0];
                        const textAreaInput = field.children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Source Image:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })                                
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 3!')
                alert("Por favor! Preencha todos os campos necessários do form 3!")

            } else if (readyToSendForm3 === true && isValid === false && newQuestionMultiQuestions && newAnswerTextMultiQuestions && newDescriptionMultiQuestions && newQuestionsNumberMultiQuestions) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'forEach'
                function redVoidField() {
                    const form3= document.querySelector("#form3");
                    const fields = form3.querySelectorAll(".labelTextarea");

                    fields.forEach(field => {
                        const label = field.children[0];
                        const textAreaInput = field.children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Source Image:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })                                
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 3!')
                alert("Este número já foi utilizado em questões anteriores, por favor, utilize outro número que ainda não foi utilizado.")

            } else if (readyToSendForm3 === true && isValid === false && (newQuestionMultiQuestions === "" || newAnswerTextMultiQuestions === "" || newDescriptionMultiQuestions === "" || newQuestionsNumberMultiQuestions === "")) {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'forEach'
                function redVoidField() {
                    const form3= document.querySelector("#form3");
                    const fields = form3.querySelectorAll(".labelTextarea");

                    fields.forEach(field => {
                        const label = field.children[0];
                        const textAreaInput = field.children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Source Image:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })                                
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                
                console.error('Erro nos dados recebidos do form 3!')
                alert("Por favor! Preencha todos os campos necessários do form 3! Este número já foi utilizado em questões anteriores, utilize outro número que ainda não foi utilizado.")
                    
            } else {
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'forEach'
                function redVoidField() {
                    const form3= document.querySelector("#form3");
                    const fields = form3.querySelectorAll(".labelTextarea");

                    fields.forEach(field => {
                        const label = field.children[0];
                        const textAreaInput = field.children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Source Image:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })                                
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 3!')
                alert("Por favor! Preencha todos os campos do formulário 3 corretamente!")

            }     

            try {
                const response = await fetch('http://localhost:3001/multiQuestions', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data),

                });        
            
                if (response.ok) {
                    console.log(data, "Dados enviados com sucesso do form 3! Preencha um formulário por vez.");
                    alert('Questão adicionada com sucesso do form 3! Preencha um formulário por vez.')
                    cleanAllForms(); // limpar o formulário
                    
                    setPostApi(true) // tornar verdadeiro a cada POST
                    
                }

            } catch(error) {
                console.error("Erro ao enviar os dados", error);
                
            }
            
        }
        
        setReadyToSendForm3(false) // volta ao estado inicial ao submeter o formulário (false)

    }

    // função utilizando POST para salvar os dados do form4 na API
    const onSaveForm4 = async (e) => {
        e.preventDefault();
        let data = '';
        let isValid = true; // variável que precisa de resposta imediata para validação, então não precisa usar 'useState' para mudança de estado

        function numberValidationForms() { // função que verifica se o número da opção que irá ser criada já existe na lista das opções, para evitar repetição
            listNumbersForms2and4.forEach(number => {
                if ((number === newOptionsNumberMultiQuestions)) {
                    isValid = false;
                    
                } 
            })
        }
    
        numberValidationForms() // chamando a função que verifica se o número da opção que irá ser criada já existe na lista das opções
       
        if (checkAlternativeAnswer() === true && (newOption1MultiQuestion && newOption2MultiQuestion && newOption3MultiQuestion && newOption4MultiQuestion && newOptionsNumberMultiQuestions)) {
            setActivePopupcheckAlternativeAnswerForms4(true) // ativa o popup

        } else {
            // colocando somente os campos que serão obrigatórios
            if (readyToSendForm4 === true && isValid === true && (newOption1MultiQuestion && newOption2MultiQuestion && newOption3MultiQuestion && newOption4MultiQuestion && newOptionsNumberMultiQuestions)) {
            // condição 1: se clicou no botão submit (readyToSendForm2), se o número da questão não se repete (isValid), se todos os campos obrigatórios foram preenchidos (newOption1MultiQuestion, newOption2MultiQuestion, newOption3MultiQuestion, newOption4MultiQuestion, newOptionsNumberMultiQuestions)
                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem (repeatedAlternativesDefault(optionForm2, optionForm4)
                    setActivePopupRepeatedAlternativesForms4(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms4(false) // desativa o popup em 15s

                    }, 15000)
                
                } else {
                    data = {
                        option1: newOption1MultiQuestion,
                        option2: newOption2MultiQuestion,
                        option3: newOption3MultiQuestion,
                        option4: newOption4MultiQuestion,
                        option5: newOption5MultiQuestion, // não obrigatório
                        numberOption: newOptionsNumberMultiQuestions,
                        id: uniqueId
                    }

                    // limpar todas as cores das labels para as cores iniciais depois submeter os dados
                    function cleanLabels() {
                        const form4 = document.querySelector("#form4");
                        const fields = form4.querySelectorAll(".labelTextarea");
            
                        fields.forEach(field => {
                                const label = field.children[0];
                                label.style.color = ""
            
                        })
                    }

                    cleanLabels()
                    setActivePopupRepeatedAlternativesForms4(false) // desativar o popup, caso esteja visível na tela
                    mute === false && saveSound.play() // toca o som 'saveSound'

                }
            } else if (readyToSendForm4 === true && isValid === true && (newOption1MultiQuestion === "" || newOption2MultiQuestion === "" || newOption3MultiQuestion === "" || newOption4MultiQuestion === "" || newOptionsNumberMultiQuestions === "")) {
            // condição 2: se clicou no botão submit (readyToSendForm2), se o número da questão não se repete (isValid), se tem campos obrigatórios vazios (newOption1MultiQuestion, newOption2MultiQuestion, newOption3MultiQuestion, newOption4MultiQuestion, newOptionsNumberMultiQuestions)
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'forEach'
                function redVoidField() {
                    const form4= document.querySelector("#form4");
                    const fields = form4.querySelectorAll(".labelTextarea");

                    fields.forEach(field => {
                        const label = field.children[0];
                        const textAreaInput = field.children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option 5:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })                                
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 4!')
                alert("Por favor! Preencha todos os campos necessários do form 4!")

                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem (repeatedAlternativesDefault(optionForm2, optionForm4)
                    setActivePopupRepeatedAlternativesForms4(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms4(false) // desativa o popup em 15s

                    }, 15000)

                }

            } else if (readyToSendForm4 === true && isValid === false && (newOption1MultiQuestion && newOption2MultiQuestion && newOption3MultiQuestion && newOption4MultiQuestion && newOptionsNumberMultiQuestions)) {
                // condição 3: se clicou no botão submit (readyToSendForm2), se o número da questão se repete (isValid), se todos os campos obrigatórios foram preenchidos (newOption1MultiQuestion, newOption2MultiQuestion, newOption3MultiQuestion, newOption4MultiQuestion, newOptionsNumberMultiQuestions)
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'forEach'
                function redVoidField() {
                    const form4= document.querySelector("#form4");
                    const fields = form4.querySelectorAll(".labelTextarea");

                    fields.forEach(field => {
                        const label = field.children[0];
                        const textAreaInput = field.children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option 5:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })                                
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 4!')
                alert("Este número já foi utilizado em opções anteriores, por favor, utilize outro número que ainda não foi utilizado.")

                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem (repeatedAlternativesDefault(optionForm2, optionForm4)
                    setActivePopupRepeatedAlternativesForms4(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms4(false) // desativa o popup em 15s

                    }, 15000)
                
                }

            } else if (readyToSendForm4 === true && isValid === false && (newOption1MultiQuestion === "" || newOption2MultiQuestion === "" || newOption3MultiQuestion === "" || newOption4MultiQuestion === "" || newOptionsNumberMultiQuestions === "")) {
            // condição 4: se clicou no botão submit (readyToSendForm2), se o número da questão se repete (isValid), se tem campos obrigatórios vazios (newOption1MultiQuestion, newOption2MultiQuestion, newOption3MultiQuestion, newOption4MultiQuestion, newOptionsNumberMultiQuestions)
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'forEach'
                function redVoidField() {
                    const form4= document.querySelector("#form4");
                    const fields = form4.querySelectorAll(".labelTextarea");

                    fields.forEach(field => {
                        const label = field.children[0];
                        const textAreaInput = field.children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option 5:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })                                
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'
                
                console.error('Erro nos dados recebidos do form 4!')
                alert("Por favor! Preencha todos os campos necessários do form 4! Este número já foi utilizado em opções anteriores, utilize outro número que ainda não foi utilizado.")

                if (repeatedAlternativesDefault(optionForm2, optionForm4).length > 0) {
                // condição: se as alternativas se repetem (repeatedAlternativesDefault(optionForm2, optionForm4)
                    setActivePopupRepeatedAlternativesForms4(true) // para mostrar o popup na tela

                    setTimeout(() => {
                        setActivePopupRepeatedAlternativesForms4(false) // desativa o popup em 15s

                    }, 15000)
                
                }
                    
            } else {
            //condição 5: o que não atender as condições acima
                // função para tornar todos os campos obrigatórios vazios em destaque de vermelho (cor Material Design Red 900), usando 'forEach'
                function redVoidField() {
                    const form4= document.querySelector("#form4");
                    const fields = form4.querySelectorAll(".labelTextarea");

                    fields.forEach(field => {
                        const label = field.children[0];
                        const textAreaInput = field.children[1];

                        label.style.color = ""; // para restaurar a cor inicial das labels antes de verificar os campos

                        // marcar em vermelho todos os campos obrigatórios vazios, exceto o não obrigatório
                        if (textAreaInput.value === "" && label.innerText !== "Option 5:") {
                            label.style.color = colorIncorrect // passando a cor incorreta

                        }
                    })                                
                }

                redVoidField()
                mute === false && errorSound.play() // toca o som 'errorSound'

                console.error('Erro nos dados recebidos do form 4!')
                alert("Por favor! Preencha todos os campos do formulário 4 corretamente!")

            }

            try {
                const response = await fetch('http://localhost:3001/multiOptions', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data),

                });        
            
                if (response.ok) {
                    console.log(data, "Dados enviados com sucesso do form 4! Preencha um formulário por vez.");
                    alert('Questão adicionada com sucesso do form 4! Preencha um formulário por vez.')
                    cleanAllForms(); // limpar o formulário
                
                    setPostApi(true) // tornar verdadeiro a cada POST

                }

            } catch(error) {
                console.error("Erro ao enviar os dados", error);
                
            }

        }

        setReadyToSendForm4(false) // volta ao estado inicial ao submeter o formulário (false)
        
    }

    useEffect(() => {
        function formsCheck() { // verifica se existem mais questões que opções ou mais opções que questões nos 4 formulários e avisa na tela

            if (listUnicQuestionsContext.length > listUnicOptionsContext.length && listMultiQuestionsContext.length === listMultiOptionsContext.length) {
                setAlertMessage('⚠ There are more questions in form 1" than options in "form 2." Dont forget to add the missing options to "form 2".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listUnicOptionsContext.length > listUnicQuestionsContext.length && listMultiQuestionsContext.length === listMultiOptionsContext.length) {
                setAlertMessage('⚠ There are more options in "form 2" than questions in "form 1." Dont forget to add the missing questions to "form 1".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listMultiQuestionsContext.length > listMultiOptionsContext.length && listUnicQuestionsContext.length === listUnicOptionsContext.length) {
                setAlertMessage('⚠ There are more questions in "form 3" than options in "form 4." Dont forget to add the missing options to "form 4".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listMultiOptionsContext.length > listMultiQuestionsContext.length && listUnicQuestionsContext.length === listUnicOptionsContext.length) {
                setAlertMessage('⚠ There are more options in "form 4" than questions in "form 3." Dont forget to add the missing questions to "form 3".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listUnicQuestionsContext.length > listUnicOptionsContext.length && listMultiQuestionsContext.length > listMultiOptionsContext.length) {
                setAlertMessage('⚠ There are more questions in "forms 1 and 3" than options in "forms 2 and 4." Dont forget to add the missing options to "forms 2 and 4".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listUnicQuestionsContext.length > listUnicOptionsContext.length && listMultiQuestionsContext.length < listMultiOptionsContext.length) {
                setAlertMessage('⚠ There are more questions in "form 1" than options in "form 2," and more options in "form 4" than questions in "form 3." Dont forget to add the missing options to "form 2" and the missing questions to "form 3".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listUnicQuestionsContext.length < listUnicOptionsContext.length && listMultiQuestionsContext.length > listMultiOptionsContext.length) {
                setAlertMessage('⚠ There are more options in "form 2" than questions in "form 1," and more questions in "form 3" than options in "form 4." Dont forget to add the missing questions to "form 1" and the missing options to "form 4".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            } else if (listUnicQuestionsContext.length < listUnicOptionsContext.length && listMultiQuestionsContext.length < listMultiOptionsContext.length) {
                setAlertMessage('⚠ There are more options in "forms 2 and 4" than questions in "forms 1 and 3." Dont forget to add the missing questions to "forms 1 and 3".')
                setTimeout(() => {
                    setAlertMessage('') // tempo para sair da tela
                }, 15000)
            }

            setPostApi(false)

        } 

        updateList && setTimeout(() => {
            formsCheck() // disparar a função após atualizar o backend, após 1 segundo

        }, 1000)

    }, [listUnicQuestionsContext, listUnicOptionsContext, listMultiQuestionsContext, listMultiOptionsContext, updateList, setPostApi])

    return(
        <div className={styles.formsNewQuestionsOptions}>            
            <img 
                className={styles.backgroundImage} 
                src={backgroundImage} 
                alt='backgroundImage' 
            />

            <div className={styles.messageAlert}>{alertMessage}</div>

            <div className={styles.forms}>
                <form 
                    onSubmit={onSaveForm1} 
                    className={styles.form}
                    id='form1'
                >
                    <h1>Form 1 (Questions)</h1>
                    <FieldsQuestionsOptions
                        nome1="Question:*"
                        nome2="Answer:*"
                        nome3="Source Image:"
                        nome4="Description:*" 
                        nome5="Number:*"

                        labelTarget={labelTarget} 
                        setLabelTarget={setLabelTarget}
                        newQuestionQuestions={newQuestionQuestions}
                        setNewQuestionQuestions={setNewQuestionQuestions}
                        newAnswerQuestions={newAnswerQuestions}
                        setNewAnswerQuestions={setNewAnswerQuestions}
                        newSourceImageQuestions={newSourceImageQuestions}
                        setNewSourceImageQuestions={setNewSourceImageQuestions}
                        newDescriptionQuestions={newDescriptionQuestions}
                        setNewDescriptionQuestions={setNewDescriptionQuestions}
                        newQuestionsNumberQuestions={newQuestionsNumberQuestions}
                        setNewQuestionsNumberQuestions={setNewQuestionsNumberQuestions}     
                        readyToCleanAll={readyToCleanAll}
                        setReadyToCleanAll={setReadyToCleanAll}
                        readyToSendForm1={readyToSendForm1}

                    />
                    <ButtonDefault 
                        // tornar readyToSendForm1 'true' antes de entrar na função onSaveForm1 ao submeter o formulário 1
                        onClick={() => {setReadyToSendForm1(true)}}
                        buttonName='Save' 
                        specificStyleButton={styles.buttonSave}
                        specificType='submit' 

                    />

                </form>

                <form 
                    onSubmit={onSaveForm2} 
                    className={styles.form}
                    id='form2'
                >
                    <h1>Form 2 (Options)</h1>
                    <FieldsQuestionsOptions 
                        nome1="Option 1:*" 
                        nome2="Option 2:*" 
                        nome3="Option 3:*" 
                        nome4="Option 4:*"                
                        nome5="Option 5:" 
                        nome6="Number:*"
                        optionClass={styles.optionClass}

                        labelTarget={labelTarget}
                        setLabelTarget={setLabelTarget}
                        newOption1Question={newOption1Question} 
                        setNewOption1Question={setNewOption1Question}    
                        newOption2Question={newOption2Question} 
                        setNewOption2Question={setNewOption2Question}    
                        newOption3Question={newOption3Question} 
                        setNewOption3Question={setNewOption3Question}    
                        newOption4Question={newOption4Question} 
                        setNewOption4Question={setNewOption4Question}    
                        newOption5Question={newOption5Question} 
                        setNewOption5Question={setNewOption5Question}    
                        newOptionsNumberQuestions={newOptionsNumberQuestions} 
                        setNewOptionsNumberQuestions={setNewOptionsNumberQuestions}
                        readyToCleanAll={readyToCleanAll}
                        setReadyToCleanAll={setReadyToCleanAll}
                        readyToSendForm2={readyToSendForm2}

                    />
                    <ButtonDefault 
                        // tornar readyToSendForm2 'true' antes de entrar na função onSaveForm2 ao submeter o formulário 2
                        onClick={() => {setReadyToSendForm2(true)}}
                        buttonName='Save' 
                        specificStyleButton={styles.buttonSave}
                        specificType='submit' 
         
                    />

                </form>
            </div>

            <div className={styles.forms}>
                <form 
                    onSubmit={onSaveForm3} 
                    className={styles.form}
                    id='form3'
                >                    
                    <h1>Form 3 (MultiQuestions)</h1>
                    <FieldsQuestionsOptions
                        nome1="Question:*" 
                        nome2="Answer's Text:*"
                        nome3="Source Image:"
                        nome4="Description:*" 
                        nome5="Number:*"
                        
                        labelTarget={labelTarget}
                        setLabelTarget={setLabelTarget}
                        newQuestionMultiQuestions={newQuestionMultiQuestions}
                        setNewQuestionMultiQuestions={setNewQuestionMultiQuestions}
                        newAnswerTextMultiQuestions={newAnswerTextMultiQuestions}
                        setNewAnswerTextMultiQuestions={setNewAnswerTextMultiQuestions}
                        newSourceImageMultiQuestions={newSourceImageMultiQuestions}
                        setNewSourceImageMultiQuestions={setNewSourceImageMultiQuestions}
                        newDescriptionMultiQuestions={newDescriptionMultiQuestions}
                        setNewDescriptionMultiQuestions={setNewDescriptionMultiQuestions}
                        newQuestionsNumberMultiQuestions={newQuestionsNumberMultiQuestions}
                        setNewQuestionsNumberMultiQuestions={setNewQuestionsNumberMultiQuestions}
                        readyToCleanAll={readyToCleanAll}
                        setReadyToCleanAll={setReadyToCleanAll}
                        readyToSendForm3={readyToSendForm3}

                    />
                    <ButtonDefault 
                        // tornar readyToSendForm3 'true' antes de entrar na função onSaveForm3 ao submeter o formulário 3
                        onClick={() => {setReadyToSendForm3(true)}}
                        buttonName='Save' 
                        specificStyleButton={styles.buttonSave}
                        specificType='submit' 
                    />

                </form>

                <form 
                    onSubmit={onSaveForm4} 
                    className={styles.form}
                    id='form4'
                >
                    <h1>Form 4 (MultiOptions)</h1>
                    <FieldsQuestionsOptions 
                        nome1="Option 1:*" 
                        nome2="Option 2:*" 
                        nome3="Option 3:*" 
                        nome4="Option 4:*"                
                        nome5="Option 5:" 
                        nome6="Number:*"
                        optionClass={styles.optionClass}

                        labelTarget={labelTarget}
                        setLabelTarget={setLabelTarget}
                        newOption1MultiQuestion={newOption1MultiQuestion}
                        setNewOption1MultiQuestion={setNewOption1MultiQuestion}
                        newOption2MultiQuestion={newOption2MultiQuestion}
                        setNewOption2MultiQuestion={setNewOption2MultiQuestion}
                        newOption3MultiQuestion={newOption3MultiQuestion}
                        setNewOption3MultiQuestion={setNewOption3MultiQuestion}
                        newOption4MultiQuestion={newOption4MultiQuestion}
                        setNewOption4MultiQuestion={setNewOption4MultiQuestion}
                        newOption5MultiQuestion={newOption5MultiQuestion}
                        setNewOption5MultiQuestion={setNewOption5MultiQuestion}
                        newOptionsNumberMultiQuestions={newOptionsNumberMultiQuestions}
                        setNewOptionsNumberMultiQuestions={setNewOptionsNumberMultiQuestions}
                        readyToCleanAll={readyToCleanAll}
                        setReadyToCleanAll={setReadyToCleanAll}
                        readyToSendForm4={readyToSendForm4}

                    />
                    <ButtonDefault 
                        // tornar readyToSendForm4 'true' antes de entrar na função onSaveForm4 ao submeter o formulário 4
                        onClick={() => {setReadyToSendForm4(true)}}
                        buttonName='Save' 
                        specificStyleButton={styles.buttonSave}
                        specificType='submit' 
                    />

                </form>

            </div>  

            {/* PopupRepeatedAlternatives */}
            {activePopupRepeatedAlternativesForms2 === true && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedForms} 
                    textPopup={"There are duplicate alternatives. Please, before creating the option, update the alternatives in Form 2 so that all of them are different, and then proceed with creating the option. Thank you."} 
                    activePopup={setActivePopupRepeatedAlternativesForms2}
                    
                />
            }

            {activePopupRepeatedAlternativesForms4 === true && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedForms} 
                    textPopup={"There are duplicate alternatives. Please, before creating the option, update the alternatives in Form 4 so that all of them are different, and then proceed with creating the option. Thank you."} 
                    activePopup={setActivePopupRepeatedAlternativesForms4}
                    
                />
            }

            {/* PopupCheckAlternativeAnswer */}
            {activePopupcheckAlternativeAnswerForms1 === true && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms1}
                    textPopup={`Your answer does not contain any alternative from option ${matchedOptionMainPopupNumber}! Please, before creating the question, make sure the answer is exactly the same as the correct alternative of option ${matchedOptionMainPopupNumber}, and then proceed with creating the question. For more information, click the phrase below. Thank you.`} 
                    textModalDescription={`Include in the answer to question ${newQuestionsNumberQuestions} the correct alternative from option ${matchedOptionMainPopupNumber}, highlighted below: ${matchedOptionMainPopup[0]}, ${matchedOptionMainPopup[1]}, ${matchedOptionMainPopup[2]}, ${matchedOptionMainPopup[3]}${matchedOptionMainPopup[4] !== '' ? ` or ${matchedOptionMainPopup[4]}.` : `.`}`}

                />
            }

            {activePopupcheckAlternativeAnswerForms2 === true && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms2}
                    textPopup={`No alternative matching the answer of question ${matchedQuestionMainPopupNumber} was found. Please, before creating the option, make sure that one of the alternatives is exactly the same as the answer of the already created question ${matchedQuestionMainPopupNumber}, and then proceed with creating the option. For more information, click the phrase below. Thank you.`} 
                    textModalDescription={`Include in one of the alternatives of option ${newOptionsNumberQuestions} the answer to question ${matchedQuestionMainPopupNumber}, highlighted below: ${matchedQuestionMainPopupAnswer}.`}

                />
            }

            {activePopupcheckAlternativeAnswerForms3 === true && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms3}
                    textPopup={`Your "answer's text" does not contain the two correct alternatives (Option1 and Option2) from option ${matchedOptionMultiMainPopupNumber}! Please, before creating the question, include both correct alternatives (Option1 and Option2) from option ${matchedOptionMultiMainPopupNumber} in the "answer's text", and then proceed with creating the question. For more information, click the phrase below. Thank you.`} 
                    textModalDescription={`Include in the "answer's text" to question ${newQuestionsNumberMultiQuestions} the two correct alternatives from option ${matchedOptionMultiMainPopupNumber}, highlighted below: ${matchedOptionMultiMainPopupAnswers[0]} e ${matchedOptionMultiMainPopupAnswers[1]}.`}

                />
            }

            {activePopupcheckAlternativeAnswerForms4 === true && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckForm} 
                    activePopup={setActivePopupcheckAlternativeAnswerForms4}
                    textPopup={`The two alternatives included in the "answer's text" of question ${matchedQuestionMultiMainPopupNumber} were not found. Please, before creating the option, always ensure that the alternatives "Option1" and "Option2" are exactly the same as those included in the "answer's text" of the already created question ${matchedQuestionMultiMainPopupNumber}, and then proceed with creating the option. For more information, click the phrase below. Thank you.`} 
                    textModalDescription={`Include in the first two alternatives (Option1 and Option2) of option ${newOptionsNumberMultiQuestions} the "answers's text" included in question ${matchedQuestionMultiMainPopupNumber}, highlighted below: ${matchedQuestionMultiMainPopupAnswer}.`}

                />
            }
      
        </div>
    )
}

export default FormsNewQuestionsOptionsPage
