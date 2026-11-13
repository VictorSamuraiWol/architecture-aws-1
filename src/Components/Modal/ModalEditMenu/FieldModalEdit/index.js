import styles from './FieldModalEdit.module.css'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

function FieldModalEdit({ name, newValue, onChangeModal, required, errorMessageText, errorTargetLabel, voidField }) {

  const [openSelect, setOpenSelect] = useState(false) // variável usada no select

  const { listImagesQuestions, listIconsDescriptions, listImagesDescriptions } = useOutletContext()

  return (
    // se for campo select
    <div className={styles.containerfieldModalEdit}> 
      {(name === "Image Question:" || name === "Icon Description:" || name === "Image Description:") ? // aparece select se for campos de escolha
      <div className={styles.fieldSelectModalEdit}>
        <label className={voidField?.includes(errorTargetLabel) ? 
          styles.nameErrorLabelText 
          : 
          styles.nameLabelTextSelect}
        >
          {name}
        </label>

        <div className={`${styles.selectWrap} ${openSelect ? styles.openSelect : ""}`}>
          <select
            value={newValue} 
            onChange={(e) => {onChangeModal(e); setOpenSelect(false)}}
            onBlur={() => setOpenSelect(false)}
            onMouseDown={() => setOpenSelect(open => !open)}
            className={styles.selectEdit}
          >                            
            <option
              value='' 
              disabled
              className={styles.optionEdit}
            >
              Select an option
            </option>

            {name === "Image Question:" && 
              listImagesQuestions.map(image => <option key={image} value={image} className={styles.optionEdit}>{image}</option>)
            }
            {name === "Icon Description:" && 
              listIconsDescriptions.map(icon => <option key={icon} value={icon} className={styles.optionEdit}>{icon}</option>)
            }
            {name === "Image Description:" && 
              listImagesDescriptions.map(image => <option key={image} value={image} className={styles.optionEdit}>{image}</option>)
            }
          </select>

        </div>

      </div>
      :
      // se for campo input
      <div className={styles.fieldModalEdit}>
        {name && <label className={voidField?.includes(errorTargetLabel) ? 
          styles.nameErrorLabelText 
          : 
          styles.nameLabelText}
        >
          {name}
        </label>}
        
        <input
          className={voidField?.includes(errorTargetLabel) ?
            styles.inputErrorFieldModalEdit
            :
            styles.inputFieldModalEdit} 
          value={newValue} 
          onChange={onChangeModal}
          required={required}
        />

      </div>}
        
      {/* mensagem de alerta quando um campo obrigatório estiver vazio */}
      {voidField?.includes(errorTargetLabel) &&
        <span className={styles.errorMessageText}>{errorMessageText}</span>
      }
      
    </div>
  )
}

export default FieldModalEdit;
