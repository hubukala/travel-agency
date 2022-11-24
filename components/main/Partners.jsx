import styles from '../../styles/main/partners.module.scss'
import Image from 'next/image';

const Partners = () => {
    return (
        <section className={styles.sectionPartners}>
            <Image src="/axon.png" alt="partner logo" width="200px" height="100px" objectFit="contain"/>
            <Image src="/jetstar.png" alt="partner logo" width="200px" height="100px" objectFit="contain"/>
            <Image src="/expedia.png" alt="partner logo" width="200px" height="100px" objectFit="contain"/>
            <Image src="/qantas1.png" alt="partner logo" width="200px" height="100px" objectFit="contain"/>
            <Image src="/alitalia1.png" alt="partner logo" width="200px" height="100px" objectFit="contain"/>
        </section>
    )
}

export default Partners;