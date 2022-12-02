import styles from '../../styles/main/newsletter.module.scss';

const Newsletter = () => {
    return (
        <section className={styles.sectionNewsletter}>
            <div className={styles.newsletterBox}>
                <h1>Subscribe to get information, latest news and other interesting offers about Jadoo</h1>
                <form action="submit">
                    <input type="text" placeholder="Your email"/>
                    <button>Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter;