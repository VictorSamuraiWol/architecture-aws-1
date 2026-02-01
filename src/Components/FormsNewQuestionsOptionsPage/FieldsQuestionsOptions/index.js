import styles from './FieldsQuestionsOptions.module.css'
import FieldQuestionOption from './FieldQuestionOption'

function FieldsQuestionsOptions({ 
    nome1, nome2, nome3, nome4, nome5, nome6, optionClass, labelTarget, setLabelTarget, readyToCleanAll, setReadyToCleanAll, readyToSendForm1, readyToSendForm2, readyToSendForm3, readyToSendForm4,
    /* campos form1 */ newQuestionTextMain, setNewQuestionTextMain, newCorrectAnswerMain, setNewCorrectAnswerMain, newImageKeyMain, setNewImageKeyMain, newDescriptionMain, setNewDescriptionMain, newQuestionNumberMain, setNewQuestionNumberMain, 
    /* campos form2 */ newOptionAMain, setNewOptionAMain, newOptionBMain, setNewOptionBMain, newOptionCMain, setNewOptionCMain, newOptionDMain, setNewOptionDMain, newOptionEMain, setNewOptionEMain, newOptionNumberMain, setNewOptionNumberMain, 
    /* campos form3 */ newQuestionTextMulti, setNewQuestionTextMulti, newCorrectAnswerMulti, setNewCorrectAnswerMulti, newImageKeyMulti, setNewImageKeyMulti, newDescriptionMulti, setNewDescriptionMulti, newQuestionNumberMulti, setNewQuestionNumberMulti,
    /* campos form4 */ newOptionAMulti, setNewOptionAMulti, newOptionBMulti, setNewOptionBMulti, newOptionCMulti, setNewOptionCMulti, newOptionDMulti, setNewOptionDMulti, newOptionEMulti, setNewOptionEMulti, newOptionNumberMulti, setNewOptionNumberMulti
    
}) {

    return(
        <>
            {/* campo 1, obrigatório (nome1) */}
            {<FieldQuestionOption
                nome={nome1}
                optionClass={optionClass}
                className={styles.fieldQuestionOption}

                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 1 (4 forms)
                // campo 1 do form 1
                valueForm1={newQuestionTextMain}
                setValueForm1={setNewQuestionTextMain}

                //campo 1 do form 2
                valueForm2={newOptionAMain}
                setValueForm2={setNewOptionAMain}

                //campo 1 do form 3
                valueForm3={newQuestionTextMulti}
                setValueForm3={setNewQuestionTextMulti}

                //campo 1 do form 4
                valueForm4={newOptionAMulti}
                setValueForm4={setNewOptionAMulti}

                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll}

                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}

            />}

            {/* campo 2, obrigatório (nome2) */}
            {<FieldQuestionOption
                nome={nome2} 
                optionClass={optionClass}
                
                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 2 (4 forms)
                // campo 2 do form 1
                valueForm1={newCorrectAnswerMain}
                setValueForm1={setNewCorrectAnswerMain}

                // campo 2 do form 2
                valueForm2={newOptionBMain}
                setValueForm2={setNewOptionBMain}

                // campo 2 do form 3
                valueForm3={newCorrectAnswerMulti}
                setValueForm3={setNewCorrectAnswerMulti}

                // campo 2 do form 4
                valueForm4={newOptionBMulti}
                setValueForm4={setNewOptionBMulti}

                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll}

                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}

            />}

            {/* campo 3, obrigatório (nome3) */}
            {nome3 && <FieldQuestionOption
                nome={nome3} 
                optionClass={optionClass}

                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 3 (4 forms)
                // campo 3 do form 1
                valueForm1={newImageKeyMain}
                setValueForm1={setNewImageKeyMain}

                // campo 3 do form 2
                valueForm2={newOptionCMain}
                setValueForm2={setNewOptionCMain} 
                
                // campo 3 do form 3
                valueForm3={newImageKeyMulti}
                setValueForm3={setNewImageKeyMulti}

                // campo 3 do form 4
                valueForm4={newOptionCMulti}
                setValueForm4={setNewOptionCMulti}

                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll} 
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                
            />}

            {/* campo 4, obrigatório (nome4) */}
            {nome4 && <FieldQuestionOption
                nome={nome4} 
                optionClass={optionClass} 

                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 4 (4 forms)
                // campo 4 do form 1
                valueForm1={newDescriptionMain}
                setValueForm1={setNewDescriptionMain}

                // campo 4 do form 2
                valueForm2={newOptionDMain}
                setValueForm2={setNewOptionDMain} 
                
                // campo 4 do form 3
                valueForm3={newDescriptionMulti}
                setValueForm3={setNewDescriptionMulti}

                // campo 4 do form 4
                valueForm4={newOptionDMulti}
                setValueForm4={setNewOptionDMulti}                
                
                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll}  
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
            
            />}

            {/* campo 5, só vai existir se for dado algum nome para a label (nome5) */}
            {nome5 && <FieldQuestionOption
                nome={nome5} 
                optionClass={optionClass}
                
                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 4 possíveis elementos do campo 5 (4 forms)
                // campo 5 do form 1
                valueForm1={newQuestionNumberMain}
                setValueForm1={setNewQuestionNumberMain}
                
                // campo 5 do form 2
                valueForm2={newOptionEMain}
                setValueForm2={setNewOptionEMain} 
                
                // campo 5 do form 3
                valueForm3={newQuestionNumberMulti}
                setValueForm3={setNewQuestionNumberMulti}               

                // campo 5 do form 4
                valueForm4={newOptionEMulti}
                setValueForm4={setNewOptionEMulti}                
                
                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll} 
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                
            />}

            {/* campo 6, obrigatório (nome6) */}
            {nome6 && <FieldQuestionOption
                nome={nome6} 
                optionClass={optionClass} 
                
                labelTarget={labelTarget}
                setLabelTarget={setLabelTarget}

                // 2 possíveis elementos do campo 6 (2 forms)             
                // campo 6 do form 2
                valueForm2={newOptionNumberMain}
                setValueForm2={setNewOptionNumberMain}

                // campo 6 do form 4
                valueForm4={newOptionNumberMulti}
                setValueForm4={setNewOptionNumberMulti}

                // ativar para zerar os campos
                readyToCleanAll={readyToCleanAll}
                setReadyToCleanAll={setReadyToCleanAll} 
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                
            />}
                   
        </>
    )

}

export default FieldsQuestionsOptions
