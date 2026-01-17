import styles from './FieldModalEdit.module.css'

function FieldModalEdit({ name, newValue, onChangeModal, required }) {

  return (
    <div className={styles.fieldModalEdit}>
      <label>{name}</label>
      <input 
          value={newValue} 
          onChange={onChangeModal}
          required={required}

      />
      
    </div>
  )
}

export default FieldModalEdit;
