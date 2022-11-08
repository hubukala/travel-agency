import Image from "next/image";
import styles from '../../styles/main/hero.module.scss'

const Hero = () => {
    return (
        <section className={styles.sectionHero}>
            <div className={styles.heroDescription}>
                <h3>BEST DESTINATIONS AROUND THE WORLD</h3>
                <h2>Travel, enjoy and live a new and full life</h2>
                <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className={styles.buttonsContainer}>
                    <button>Find out More</button>
                    <div className={styles.circleButtonContainer}>
                        <button className={styles.circleButton}>&#9658;</button>
                        <span>Play Demo</span>
                    </div>
                </div>
            </div>
            <div className={styles.heroPicture}>
                <Image src="/traveller1.png" alt="traveller" width={765} height={765}/>
            </div>
        </section>
    )
}

export default Hero;