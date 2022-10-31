import styles from '../../styles/header/header.module.scss'

const Header = () => {
    return (
        <section className={styles.sectionNavbar}>
            <div className={styles.logo}>
                Jadoo
            </div>
            <ul className={styles.listNavBar}>
                <li><a href="#destinations">Destinations</a></li>
                <li><a href="#hotels">Hotels</a></li>
                <li><a href="#flights">Flights</a></li>
                <li><a href="#bookings">Bookings</a></li>
                <li><a href="#login">Login</a></li>
                <li><a href="#signup">Sign up</a></li>
            </ul>
        </section>
    )
}

export default Header;