import Image from 'next/image';
import styles from '../../styles/main/categoryTile.module.scss'

const CategoryTile = (props) => {
    return (
        <div className={styles.tileContent}>
            <Image 
                className={styles.tileImage}
                src={props.image}
                alt="tile image"
                width="80px"
                height="80px"
                objectFit="contain"
            />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default CategoryTile;