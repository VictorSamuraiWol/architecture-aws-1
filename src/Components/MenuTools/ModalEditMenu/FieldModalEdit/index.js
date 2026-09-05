import styles from './FieldModalEdit.module.css'

function FieldModalEdit({ name, newValue, onChangeModal, required, errorMessageText, errorTargetLabel, voidField }) {

  return (
    <div className={styles.containerfieldModalEdit}>
      <div className={styles.fieldModalEdit}>
        <label className={voidField?.includes(errorTargetLabel) ? 
          styles.nameErrorLabelText 
          : 
          styles.nameLabelText}
        >
          {name}
        </label>

        <input
          className={voidField?.includes(errorTargetLabel) ?
            styles.inputErrorFieldModalEdit
            :
            styles.inputFieldModalEdit} 
          value={newValue} 
          onChange={onChangeModal}
          required={required}
        />

      </div>

      {/* mensagem de alerta quando um campo obrigatório estiver vazio */}
      {voidField?.includes(errorTargetLabel) &&
        <span className={styles.errorMessageText}>{errorMessageText}</span>
      }
      
    </div>
  )
}

export default FieldModalEdit;
