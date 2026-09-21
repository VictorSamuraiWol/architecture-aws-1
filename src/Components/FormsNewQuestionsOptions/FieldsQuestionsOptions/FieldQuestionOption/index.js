import styles from './FieldQuestionOption.module.css'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function FieldQuestionOption({ 
    nameText, optionClass, readyToCleanAll, readyToSendForm1, 
    readyToSendForm2, readyToSendForm3, readyToSendForm4, valueForm1, setValueForm1, valueForm2, setValueForm2, 
    valueForm3, setValueForm3, valueForm4, setValueForm4
}) {
console.log()  
    const uniqueId = uuidv4() // id única para somente para os campos    
    const [newValue, setNewValue] = useState("") // valor capturado do textarea    
    const [formsTitlesTarget, setFormsTitlesTarget] = useState("") // valores dos títulos dos 4 forms

    function newValueFunc(e) {
        // capturar o texto do título do form alvo ao mudar os valores dos campos
        setFormsTitlesTarget(e.target.parentElement.parentElement.parentElement.children[0].textContent)

        setNewValue(e.target.value)

    } 

    //atualizando os valores e certificando que todos estão capturados antes de salvar os dados dos forms
    useEffect(() => {   
        if (formsTitlesTarget  === "Form 1 (Questions)") { // form 1
            nameText === "Question:*" && setValueForm1(newValue) // setNewQuestionTextMain

            nameText === "Image Question:" && setValueForm1(newValue) // setNewImageQuestionMain
            
            nameText === "Answer:*" && setValueForm1(newValue) // setNewCorrectAnswerMain

            nameText === "Icon Description:" && setValueForm1(newValue) // setNewIconDescriptionMain

            nameText === "Description:*" && setValueForm1(newValue) // setNewDescriptionMain

            nameText === "Image Description:" && setValueForm1(newValue) // setNewImageDescriptionMain

            nameText === "Number:*" && setValueForm1(newValue) // setNewQuestionNumberMain      

        }  else if (formsTitlesTarget === "Form 2 (Options)") { // form 2
            nameText === "Option A:*" && setValueForm2(newValue) // setNewOptionAMain

            nameText === "Option B:*" && setValueForm2(newValue) // setNewOptionBMain

            nameText === "Option C:*" && setValueForm2(newValue) // setNewOptionCMain                

            nameText === "Option D:*" && setValueForm2(newValue) // setNewOptionDMain

            nameText === "Option E:" && setValueForm2(newValue) // setNewOptionEMain

            nameText === "Number:*" && setValueForm2(newValue) // setNewOptionNumberMain
        
        } else if (formsTitlesTarget === "Form 3 (MultiQuestions)") { // form 3
            nameText === "Question:*" && setValueForm3(newValue) // setNewQuestionTextMulti

            nameText === "Image Question:" && setValueForm3(newValue) // setNewImageQuestionMulti

            nameText === "Answer:*" && setValueForm3(newValue) // setNewCorrectAnswerMulti

            nameText === "Icon Description:" && setValueForm3(newValue) // setNewIconDescriptionMulti

            nameText === "Description:*" && setValueForm3(newValue) // setNewDescriptionMulti

            nameText === "Image Description:" && setValueForm3(newValue) // setNewImageDescriptionMulti
            
            nameText === "Number:*" && setValueForm3(newValue) // setNewQuestionNumberMulti
    
        } else if (formsTitlesTarget === "Form 4 (MultiOptions)") { // form 4
            nameText === "Option A:*" && setValueForm4(newValue) // setNewOptionAMulti
    
            nameText === "Option B:*" && setValueForm4(newValue) // setNewOptionBMulti
            
            nameText === "Option C:*" && setValueForm4(newValue) // setNewOptionCMulti
            
            nameText === "Option D:*" && setValueForm4(newValue) // setNewOptionDMulti
            
            nameText === "Option E:" && setValueForm4(newValue) // setNewOptionEMulti
            
            nameText === "Number:*" && setValueForm4(newValue) // setNewOptionNumberMulti

        }

        if (readyToSendForm1 || readyToSendForm2 || readyToSendForm3 || readyToSendForm4) { // apaga os valores dos campos
            setNewValue('')
            
        }

    }, [formsTitlesTarget, nameText, readyToCleanAll, newValue, valueForm1, setValueForm1, valueForm2, setValueForm2, valueForm3, setValueForm3, valueForm4, setValueForm4, readyToSendForm1, readyToSendForm2, readyToSendForm3, readyToSendForm4])

    return(
        <div className={styles.field}>
            <div
                className={`labelTextarea ${styles.labelTextarea}`}

            >
                <label
                    // classe optionClass somente estiliza os forms 2 e 4
                    className={optionClass}
                    htmlFor={uniqueId}
                >
                    {nameText}
                </label>
                
                {(nameText === "Number:*") ? // aparecer o campo do tipo input se for números
                    <input 
                        value={newValue}
                        onChange={(e) => newValueFunc(e)}
                        type='number'
                        id={uniqueId}
                    />
                    :
                    // aparecer o campo do tipo textarea se for string
                    <textarea 
                        value={newValue}
                        onChange={(e) => newValueFunc(e)}
                        id={uniqueId}
                    />
                }

            </div>

        </div>

    )
}

export default FieldQuestionOption;
