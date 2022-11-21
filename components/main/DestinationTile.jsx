import Image from "next/image";
import styles from '../../styles/main/destinationTile.module.scss'
import { FaLocationArrow } from "react-icons/fa";

const DestinationTile = (props) => {
    return (
        <div className={styles.tileContent}>
            <Image 
                src={props.image}
                alt="tile image"
                height="1300px"
                width="800px"
                objectFit="cover"
            />
            <div className={styles.descriptionContent}>
                <div className={styles.locationAndPrice}>
                    <p>{props.location}</p>
                    <p>{props.price}</p>
                </div>
                <p> <FaLocationArrow/> {props.duration} Trip</p>
            </div>
        </div>
    )
}

export default DestinationTile;