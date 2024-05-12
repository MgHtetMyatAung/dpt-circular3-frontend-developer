// style
import styles from "./master-price.module.css";
import MasterPriceForm from "./MasterPriceForm";

export default function MasterPricePage() {
  return (
    <section>
      <div className={styles.master_head_box}>
        <h2 className={styles.master_head_title}>Master Price</h2>
      </div>
      <div className={styles.master_price_page}>
        <div className={styles.master_routes}>
          <div className={styles.master_route}>Round Trip</div>
          <div className={`${styles.master_route} ${styles.route_active}`}>
            One Way
          </div>
          <div className={styles.master_route}>Multi City</div>
        </div>
        <MasterPriceForm />
      </div>
    </section>
  );
}
