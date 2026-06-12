import styles from "./Card.module.css"

export const Card = ({ title, description, image, objectFit = "contain", bgColor = "#fff", onSaibaMais }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} style={{ objectFit, backgroundColor: bgColor }} />

        <div className={styles.cardContent}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button type="button" onClick={onSaibaMais}>
                Saiba Mais
            </button>
        </div>
    </div>
  );
};

