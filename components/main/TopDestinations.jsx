import styles from '../../styles/main/topDestinations.module.scss'
import DestinationTile from './DestinationTile';

const TopDestinations = () => {
    return (
        <section className={styles.sectionTopDestinations}>
            <div className={styles.categoryDescription}>
                <h3>Top Selling</h3>
                <h1>Top Destinations</h1>
            </div>
            <div className={styles.destinationsTilesContainer}>
                <DestinationTile
                    image="/rome1.jpg"
                    location="Rome, Italy"
                    price="$5,2k"
                    duration="10 Days"
                />
                <DestinationTile
                    image="/london.jpg"
                    location="London, UK"
                    price="$4,2k"
                    duration="12 Days"
                />
                <DestinationTile
                    image="/europe1.jpg"
                    location="Full Europe"
                    price="$15k"
                    duration="28 Days"
                />
            </div>
        </section>
    )
}

export default TopDestinations;