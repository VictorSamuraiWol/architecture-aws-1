// import styles from './FieldsQuestionsOptions.module.css'
import FieldQuestionOption from './FieldQuestionOption'

function FieldsQuestionsOptions({ 
    nameText1, nameText2, nameText3, nameText4, nameText5, nameText6, nameText7, nameText8, specificStylesLabel, 
    readyToSendForm1, setReadyToSendForm1, readyToSendForm2, setReadyToSendForm2, readyToSendForm3, setReadyToSendForm3, 
    readyToSendForm4, setReadyToSendForm4, readyToSendForm5, setReadyToSendForm5, readyToSendForm6, setReadyToSendForm6,
    /* campos form1 */ setNewQuestionTextMain, setNewImageQuestionMain, setNewCorrectAnswerMain, 
    setNewIconDescriptionMain, setNewDescriptionMain, setNewImageDescriptionMain, setNewQuestionNumberMain, 
    /* campos form2 */ setNewOptionAMain, setNewOptionBMain, setNewOptionCMain,  
    setNewOptionDMain, setNewOptionEMain, setNewOptionNumberMain, 
    /* campos form3 */ setNewQuestionTextMulti, setNewImageQuestionMulti, setNewCorrectAnswerMulti1, setNewCorrectAnswerMulti2, 
    setNewIconDescriptionMulti, setNewDescriptionMulti, setNewImageDescriptionMulti,
    /* campos form4 */ setNewOptionAMulti, setNewOptionBMulti, setNewOptionCMulti,  
    setNewOptionDMulti, setNewOptionEMulti, setNewOptionNumberMulti,
    /* campos form5 */ setNewQuestionTextThreeMulti, setNewImageQuestionThreeMulti,
    setNewCorrectAnswerThreeMulti1, setNewCorrectAnswerThreeMulti2, setNewCorrectAnswerThreeMulti3,
    setNewIconDescriptionThreeMulti, setNewDescriptionThreeMulti, setNewImageDescriptionThreeMulti,
    /* campos form6 */ setNewOptionAThreeMulti, setNewOptionBThreeMulti, setNewOptionCThreeMulti,  
    setNewOptionDThreeMulti, setNewOptionEThreeMulti, setNewOptionFThreeMulti, setNewOptionNumberThreeMulti
}) {

    return(
        <>
            {/* campo 1, obrigatório (nameText1) */}
            <FieldQuestionOption
                nameText={nameText1}
                specificStylesLabel={specificStylesLabel}

                // 6 possíveis elementos do campo 1 (6 forms)                
                setValueForm1={setNewQuestionTextMain} // campo 1 do form 1   
                setValueForm2={setNewOptionAMain} //campo 1 do form 2               
                setValueForm3={setNewQuestionTextMulti} //campo 1 do form 3              
                setValueForm4={setNewOptionAMulti} //campo 1 do form 4            
                setValueForm5={setNewQuestionTextThreeMulti} //campo 1 do form 5           
                setValueForm6={setNewOptionAThreeMulti} //campo 1 do form 6

                readyToSendForm1={readyToSendForm1}
                setReadyToSendForm1={setReadyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                setReadyToSendForm2={setReadyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                setReadyToSendForm3={setReadyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                setReadyToSendForm4={setReadyToSendForm4}
                readyToSendForm5={readyToSendForm5}
                setReadyToSendForm5={setReadyToSendForm5}
                readyToSendForm6={readyToSendForm6}
                setReadyToSendForm6={setReadyToSendForm6}
            />

            {/* campo 2, obrigatório (nameText2) */}
            <FieldQuestionOption
                nameText={nameText2}
                specificStylesLabel={specificStylesLabel}

                // 6 possíveis elementos do campo 2 (6 forms)      
                setValueForm1={setNewImageQuestionMain} // campo 2 do form 1             
                setValueForm2={setNewOptionBMain} // campo 2 do form 2               
                setValueForm3={setNewImageQuestionMulti} // campo 2 do form 3             
                setValueForm4={setNewOptionBMulti} // campo 2 do form 4           
                setValueForm5={setNewImageQuestionThreeMulti} // campo 2 do form 5           
                setValueForm6={setNewOptionBThreeMulti} // campo 2 do form 6

                readyToSendForm1={readyToSendForm1}
                setReadyToSendForm1={setReadyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                setReadyToSendForm2={setReadyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                setReadyToSendForm3={setReadyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                setReadyToSendForm4={setReadyToSendForm4}
                readyToSendForm5={readyToSendForm5}
                setReadyToSendForm5={setReadyToSendForm5}
                readyToSendForm6={readyToSendForm6}
                setReadyToSendForm6={setReadyToSendForm6}
            />

            {/* campo 3, obrigatório (nameText3) */}
            <FieldQuestionOption
                nameText={nameText3} 
                specificStylesLabel={specificStylesLabel}

                // 6 possíveis elementos do campo 3 (6 forms)
                setValueForm1={setNewCorrectAnswerMain} // campo 3 do form 1
                setValueForm2={setNewOptionCMain} // campo 3 do form 2
                setValueForm3={setNewCorrectAnswerMulti1} // campo 3 do form 3
                setValueForm4={setNewOptionCMulti} // campo 3 do form 4
                setValueForm5={setNewCorrectAnswerThreeMulti1} // campo 3 do form 5
                setValueForm6={setNewOptionCThreeMulti} // campo 3 do form 6
                
                readyToSendForm1={readyToSendForm1}
                setReadyToSendForm1={setReadyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                setReadyToSendForm2={setReadyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                setReadyToSendForm3={setReadyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                setReadyToSendForm4={setReadyToSendForm4}
                readyToSendForm5={readyToSendForm5}
                setReadyToSendForm5={setReadyToSendForm5}
                readyToSendForm6={readyToSendForm6}
                setReadyToSendForm6={setReadyToSendForm6}
            />

            {/* campo 4, obrigatório (nameText4) */}
            <FieldQuestionOption
                nameText={nameText4} 
                specificStylesLabel={specificStylesLabel}

                // 6 possíveis elementos do campo 4 (6 forms)               
                setValueForm1={setNewIconDescriptionMain} // campo 4 do form 1   
                setValueForm2={setNewOptionDMain} // campo 4 do form 2
                setValueForm3={setNewCorrectAnswerMulti2} // campo 4 do form 3
                setValueForm4={setNewOptionDMulti} // campo 4 do form 4
                setValueForm5={setNewCorrectAnswerThreeMulti2} // campo 4 do form 5
                setValueForm6={setNewOptionDThreeMulti} // campo 4 do form 6 
                
                readyToSendForm1={readyToSendForm1}
                setReadyToSendForm1={setReadyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                setReadyToSendForm2={setReadyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                setReadyToSendForm3={setReadyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                setReadyToSendForm4={setReadyToSendForm4}
                readyToSendForm5={readyToSendForm5}
                setReadyToSendForm5={setReadyToSendForm5}
                readyToSendForm6={readyToSendForm6}
                setReadyToSendForm6={setReadyToSendForm6}                    
            />

            {/* campo 5, obrigatório (nameText5) */}
            <FieldQuestionOption
                nameText={nameText5} 
                specificStylesLabel={specificStylesLabel}

                // 6 possíveis elementos do campo 5 (6 forms)            
                setValueForm1={setNewDescriptionMain} // campo 5 do form 1    
                setValueForm2={setNewOptionEMain} // campo 5 do form 2
                setValueForm3={setNewIconDescriptionMulti} // campo 5 do form 3
                setValueForm4={setNewOptionEMulti} // campo 5 do form 4
                setValueForm5={setNewCorrectAnswerThreeMulti3} // campo 5 do form 5
                setValueForm6={setNewOptionEThreeMulti} // campo 5 do form 6

                readyToSendForm1={readyToSendForm1}
                setReadyToSendForm1={setReadyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                setReadyToSendForm2={setReadyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                setReadyToSendForm3={setReadyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                setReadyToSendForm4={setReadyToSendForm4}
                readyToSendForm5={readyToSendForm5}
                setReadyToSendForm5={setReadyToSendForm5}
                readyToSendForm6={readyToSendForm6}
                setReadyToSendForm6={setReadyToSendForm6}                
            />

            {/* campo 6, obrigatório (nameText6) */}
            <FieldQuestionOption
                nameText={nameText6} 
                specificStylesLabel={specificStylesLabel}

                // 6 possíveis elementos do campo 6 (6 forms)         
                setValueForm1={setNewImageDescriptionMain} // campo 6 do form 1             
                setValueForm2={setNewOptionNumberMain} // campo 6 do form 2
                setValueForm3={setNewDescriptionMulti} // campo 6 do form 3
                setValueForm4={setNewOptionNumberMulti} // campo 6 do form 4
                setValueForm5={setNewIconDescriptionThreeMulti} // campo 6 do form 5
                setValueForm6={setNewOptionFThreeMulti} // campo 6 do form 6

                readyToSendForm1={readyToSendForm1}
                setReadyToSendForm1={setReadyToSendForm1}
                readyToSendForm2={readyToSendForm2}
                setReadyToSendForm2={setReadyToSendForm2}
                readyToSendForm3={readyToSendForm3}
                setReadyToSendForm3={setReadyToSendForm3}
                readyToSendForm4={readyToSendForm4}
                setReadyToSendForm4={setReadyToSendForm4}
                readyToSendForm5={readyToSendForm5}
                setReadyToSendForm5={setReadyToSendForm5}
                readyToSendForm6={readyToSendForm6}
                setReadyToSendForm6={setReadyToSendForm6}
            />

            {/* campo 7, só vai existir se for dado algum nameText para a label (nameText7) */}
            {nameText7 && <FieldQuestionOption
                nameText={nameText7} 
                specificStylesLabel={specificStylesLabel}

                // 4 possíveis elementos do campo 7 (4 forms)                         
                setValueForm1={setNewQuestionNumberMain} // campo 7 do form 1                       
                setValueForm3={setNewImageDescriptionMulti} // campo 7 do form 3
                setValueForm5={setNewDescriptionThreeMulti} // campo 7 do form 5     
                setValueForm6={setNewOptionNumberThreeMulti} // campo 7 do form 6
                
                readyToSendForm1={readyToSendForm1}
                setReadyToSendForm1={setReadyToSendForm1}
                readyToSendForm3={readyToSendForm3}
                setReadyToSendForm3={setReadyToSendForm3}
                readyToSendForm5={readyToSendForm5}
                setReadyToSendForm5={setReadyToSendForm5}
                readyToSendForm6={readyToSendForm6}
                setReadyToSendForm6={setReadyToSendForm6}
            />}

            {/* campo 8, só vai existir se for dado algum nameText para a label (nameText8) */}
            {nameText8 && <FieldQuestionOption
                nameText={nameText8} 
                specificStylesLabel={specificStylesLabel}

                // 1 possível elemento do campo 8 (1 form)                         
                setValueForm5={setNewImageDescriptionThreeMulti} // campo 8 do form 5
            
                readyToSendForm5={readyToSendForm5}
                setReadyToSendForm5={setReadyToSendForm5}
            />}
                   
        </>
    )

}

export default FieldsQuestionsOptions;
