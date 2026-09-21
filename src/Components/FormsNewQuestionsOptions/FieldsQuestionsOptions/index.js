// import styles from './FieldsQuestionsOptions.module.css'
import FieldQuestionOption from './FieldQuestionOption'

function FieldsQuestionsOptions({ 
    nameText1, nameText2, nameText3, nameText4, nameText5, nameText6, nameText7, optionClass, readyToSendForm1, readyToSendForm2, readyToSendForm3, readyToSendForm4,
    /* campos form1 */ newQuestionTextMain, setNewQuestionTextMain, newImageQuestionMain, setNewImageQuestionMain, newCorrectAnswerMain, setNewCorrectAnswerMain, 
    newIconDescriptionMain, setNewIconDescriptionMain, newDescriptionMain, setNewDescriptionMain, newImageDescriptionMain, setNewImageDescriptionMain, newQuestionNumberMain, setNewQuestionNumberMain, 
    /* campos form2 */ newOptionAMain, setNewOptionAMain, newOptionBMain, setNewOptionBMain, newOptionCMain, setNewOptionCMain, newOptionDMain, 
    setNewOptionDMain, newOptionEMain, setNewOptionEMain, newOptionNumberMain, setNewOptionNumberMain, 
    /* campos form3 */ newQuestionTextMulti, setNewQuestionTextMulti, newImageQuestionMulti, setNewImageQuestionMulti, newCorrectAnswerMulti, setNewCorrectAnswerMulti, newIconDescriptionMulti, setNewIconDescriptionMulti, 
    newDescriptionMulti, setNewDescriptionMulti, newImageDescriptionMulti, setNewImageDescriptionMulti, newQuestionNumberMulti, setNewQuestionNumberMulti,
    /* campos form4 */ newOptionAMulti, setNewOptionAMulti, newOptionBMulti, setNewOptionBMulti, newOptionCMulti, setNewOptionCMulti, newOptionDMulti, 
    setNewOptionDMulti, newOptionEMulti, setNewOptionEMulti, newOptionNumberMulti, setNewOptionNumberMulti
}) {

    return(
        <>
            {/* campo 1, obrigatório (nameText1) */}
            <FieldQuestionOption
                nameText={nameText1}
                optionClass={optionClass}

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

                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
            />

            {/* campo 2, obrigatório (nameText2) */}
            <FieldQuestionOption
                nameText={nameText2}
                optionClass={optionClass}

                // 4 possíveis elementos do campo 2 (4 forms)
                // campo 2 do form 1
                valueForm1={newImageQuestionMain}
                setValueForm1={setNewImageQuestionMain}

                // campo 2 do form 2
                valueForm2={newOptionBMain}
                setValueForm2={setNewOptionBMain}

                // campo 2 do form 3
                valueForm3={newImageQuestionMulti}
                setValueForm3={setNewImageQuestionMulti}

                // campo 2 do form 4
                valueForm4={newOptionBMulti}
                setValueForm4={setNewOptionBMulti}

                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
            />

            {/* campo 3, obrigatório (nameText3) */}
            <FieldQuestionOption
                nameText={nameText3} 
                optionClass={optionClass}

                // 4 possíveis elementos do campo 3 (4 forms)
                // campo 3 do form 1
                valueForm1={newCorrectAnswerMain}
                setValueForm1={setNewCorrectAnswerMain}

                // campo 3 do form 2
                valueForm2={newOptionCMain}
                setValueForm2={setNewOptionCMain} 
                
                // campo 3 do form 3
                valueForm3={newCorrectAnswerMulti}
                setValueForm3={setNewCorrectAnswerMulti}

                // campo 3 do form 4
                valueForm4={newOptionCMulti}
                setValueForm4={setNewOptionCMulti}
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
            />

            {/* campo 4, obrigatório (nameText4) */}
            <FieldQuestionOption
                nameText={nameText4} 
                optionClass={optionClass}

                // 4 possíveis elementos do campo 4 (4 forms)
                // campo 4 do form 1
                valueForm1={newIconDescriptionMain}
                setValueForm1={setNewIconDescriptionMain}

                // campo 4 do form 2
                valueForm2={newOptionDMain}
                setValueForm2={setNewOptionDMain} 
                
                // campo 4 do form 3
                valueForm3={newIconDescriptionMulti}
                setValueForm3={setNewIconDescriptionMulti}

                // campo 4 do form 4
                valueForm4={newOptionDMulti}
                setValueForm4={setNewOptionDMulti}                
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}                     
            />

            {/* campo 5, obrigatório (nameText5) */}
            <FieldQuestionOption
                nameText={nameText5} 
                optionClass={optionClass}

                // 4 possíveis elementos do campo 5 (4 forms)
                // campo 5 do form 1
                valueForm1={newDescriptionMain}
                setValueForm1={setNewDescriptionMain}

                // campo 5 do form 2
                valueForm2={newOptionEMain}
                setValueForm2={setNewOptionEMain} 
                
                // campo 5 do form 3
                valueForm3={newDescriptionMulti}
                setValueForm3={setNewDescriptionMulti}               

                // campo 5 do form 4
                valueForm4={newOptionEMulti}
                setValueForm4={setNewOptionEMulti}                
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}                
            />

            {/* campo 6, só vai existir se for dado algum nameText para a label (nameText6) */}
            <FieldQuestionOption
                nameText={nameText6} 
                optionClass={optionClass}

                // 4 possíveis elementos do campo 6 (4 forms)
                // campo 6 do form 1
                valueForm1={newImageDescriptionMain}
                setValueForm1={setNewImageDescriptionMain}

                // campo 6 do form 2
                valueForm2={newOptionNumberMain}
                setValueForm2={setNewOptionNumberMain} 
                
                // campo 6 do form 3
                valueForm3={newImageDescriptionMulti}
                setValueForm3={setNewImageDescriptionMulti}               

                // campo 6 do form 4
                valueForm4={newOptionNumberMulti}
                setValueForm4={setNewOptionNumberMulti}  

                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
            />

            {/* campo 7, obrigatório (nameText7) */}
            {nameText7 && <FieldQuestionOption
                nameText={nameText7} 
                optionClass={optionClass}

                // 2 possíveis elementos do campo 7 (2 forms)             
                // campo 7 do form 1
                valueForm1={newQuestionNumberMain}
                setValueForm1={setNewQuestionNumberMain}

                // campo 7 do form 3
                valueForm3={newQuestionNumberMulti}
                setValueForm3={setNewQuestionNumberMulti}
                
                readyToSendForm1={readyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                readyToSendForm4={readyToSendForm4}
            />}
                   
        </>
    )

}

export default FieldsQuestionsOptions
