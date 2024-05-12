import {
  DatePicker,
  InputBox,
  RadioBox,
  SelectBox,
} from "../../components/form";
import { Button } from "../../components/button";
// style
import styles from "./master-price.module.css";

export default function MasterPriceForm() {
  //   select data
  const from_data = ["Day -"];
  const to_data = ["Day +"];
  const times = ["Any time"];
  const cities = ["ADT"];
  const counts = ["1", "2", "3"];

  return (
    <form className={styles.master_price_form}>
      <div className={styles.form_inputs}>
        <InputBox value={"LHR"} type={"text"} />
        <InputBox value={"CDG"} type={"text"} />
        <DatePicker />
        <SelectBox data={from_data} />
        <SelectBox data={to_data} />
        <SelectBox data={times} />
        <p className={styles.label}>+</p>
        <SelectBox data={cities} />
        <SelectBox data={counts} />
        <p className={styles.label}>+</p>
      </div>
      <div className={styles.form_footer}>
        <div className="">
          <label className={styles.label}>
            <input type="checkbox" /> Extra Options
          </label>
        </div>
        <div className={styles.radio_inputs}>
          <label htmlFor="" className={styles.label}>
            Environment
          </label>
          <RadioBox label={"Dummy"} name={"radio"} checked={true} />
          <RadioBox label={"PDT"} name={"radio"} />
        </div>
        <div className="">
          <Button label={"Search"} className={styles.master_submit_btn} />
        </div>
      </div>
    </form>
  );
}
