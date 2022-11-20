import CategoryTile from './CategoryTile';
import styles from '../../styles/main/category.module.scss'

const Category = () => {
    return (
        <section className={styles.sectionCategory}>
            <div className={styles.categoryDescription}>
                <h3>CATEGORY</h3>
                <h1>We Offer Best Services</h1>
            </div>
            <div className={styles.tilesContainer}>
                <CategoryTile
                    image = "/weather.png"
                    title = "Calculated Weather"
                    description = "Built Wicket longer admire do barton vanity itself do in it."
                />
                <CategoryTile
                    image = "/plane1.png"
                    title = "Best Flights"
                    description = "Engrossed listening. Park gate sell they west hard for the."
                />
                <CategoryTile
                    image = "/event.png"
                    title = "Local Events"
                    description = "Barton vanity itself do in it. Preferd to men it engrossed listening. "
                />
                <CategoryTile
                    image = "/custom.png"
                    title = "Customization"
                    description = "We deliver outsourced aviation services for military customers"
                />
            </div>
        </section>
    )
}

export default Category;