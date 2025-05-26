import s from "./Contacts.module.scss";
const Contacts = () => {
  return (
    <main className={s.section}>
      <div className={s.container}>
        <h1 className={s.title_1}>Contacts</h1>

        <ul className={s.contentList}>
          <li className={s.contentListItem}>
            <h2 className={s.title_2}>Location</h2>
            <p>Ukraine</p>
          </li>
          <li className={s.contentListItem}>
            <h2 className={s.title_2}>Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+79051234567">+</a>
            </p>
          </li>
          <li className={s.contentListItem}>
            <h2 className={s.title_2}>Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
