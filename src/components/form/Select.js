import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value }) {

  const opts = [];

  if(options != undefined){
  console.log(options);

    options.forEach((op) => {
      opts.push(
        <option value={op.id}>{op.nome}</option>,
      );
    });
  
  }

  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
        {opts}
      </select>
    </div>
  )
}

export default Select