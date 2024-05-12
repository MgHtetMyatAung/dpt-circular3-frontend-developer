// style
import styles from "./form.module.css";
export default function RadioInputBox({ label, name, value, checked }) {
  return (
    <div className={styles.form_radio_box}>
      <input
        type="radio"
        name={name}
        id={label}
        value={value}
        defaultChecked={checked}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
