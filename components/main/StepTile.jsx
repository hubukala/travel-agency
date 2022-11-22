import styles from '../../styles/main/stepTile.module.scss'
import { FcLandscape } from "react-icons/fc";

const StepTile = ({ icon, title, description }) => {
    return (
        <div className={styles.tileContent}>
            {icon}
            <div className={styles.tileDescription}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default StepTile;