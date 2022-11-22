import styles from '../../styles/main/easyAndFast.module.scss'
import Image from 'next/image';
import StepTile from './StepTile';
import { FcLandscape, FcMoneyTransfer, FcBusiness } from "react-icons/fc";
import { FaLeaf, FaMap, FaLocationArrow } from "react-icons/fa";

const EasyAndFast = () => {
    return (
        <section className={styles.sectionEasyAndFast}>
            <div className={styles.bookingSteps}>
                <h3>Easy and Fast</h3>
                <h1>Book Your Next Trip In 3 Easy Steps</h1>
                <div className={styles.stepsContainer}>
                    <StepTile
                        icon={<FcLandscape/>}
                        title="Choose Destination"
                        description="Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus. "
                    />
                    <StepTile
                        icon={<FcMoneyTransfer/>}
                        title="Make Payment"
                        description="Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus. "
                    />
                    <StepTile
                        icon={<FcBusiness/>}
                        title="Reach Airport on Selected Date"
                        description="Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus. "
                    />
                </div>
            </div>
            <div className={styles.tileContainer}>
                <div className={styles.tripTile}>
                    <Image
                        src="/trip1.png"
                        alt="trip image"
                        width="300px"
                        height="180px"
                    />
                    <h2>Trip to Greece</h2>
                    <h3>14-29 June</h3>
                    <div className={styles.iconsTile}>
                        <FaLeaf className={styles.icon}/>
                        <FaMap className={styles.icon}/>
                        <FaLocationArrow className={styles.icon}/>
                    </div>
                    <h3>24 people going</h3>
                </div>
            </div>
        </section>
    )
}

export default EasyAndFast;