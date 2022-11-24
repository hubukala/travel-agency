import styles from '../../styles/main/testimonialsTile.module.scss'

const TestimonialsTile = (props) => {
    return (
        <div className={styles.tileContent}>
            <p>{props.comment}</p>
            <div className={styles.authorLocation}>
                <h5>{props.author}</h5>
                <h6>{props.location}</h6>
            </div>
        </div>
    )
}

export default TestimonialsTile;