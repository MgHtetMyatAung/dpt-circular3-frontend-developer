// style
import styles from "./form.module.css";

export default function InputBox({ type, value }) {
  return (
    <input type={type} defaultValue={value} className={styles.form_input_box} />
  );
}
