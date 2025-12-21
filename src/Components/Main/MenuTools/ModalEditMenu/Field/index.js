import styles from './Field.module.css'

function Field({ name, newValue, onChangeModal, required }) {

  return (
    <div className={styles.field}>
      <label>{name}</label>
      <input 
          value={newValue} 
          onChange={onChangeModal}
          required={required}

      />
      
    </div>
  )
}

export default Field;
