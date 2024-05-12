import styles from "./form.module.css";
export default function SelectBoxForm({ data }) {
  return (
    <select className={styles.form_select_box}>
      {data?.map((item, id) => (
        <option key={id}>{item}</option>
      ))}
    </select>
  );
}
