const Contacts = () => {
  return (
    <main className="bg-zinc-200 dark:bg-zinc-900 py-[70px]">
      <div className="text-zinc-900 dark:text-white max-w-[1200px] mx-auto px-4">
        <h1 className="mb-[60px] text-[60px] font-bold leading-[1.3] text-[var(--title-1)] text-center">
          Contacts
        </h1>

        <ul className="max-w-[570px] mx-auto flex flex-col items-center gap-[40px] text-center">
          <li className="text-[18px] leading-[1.5]">
            <h2 className="mb-[20px] text-[40px] font-bold leading-[1.3]">
              Location
            </h2>
            <p>Ukraine</p>
          </li>
          <li className="text-[18px] leading-[1.5]">
            <h2 className="mb-[20px] text-[40px] font-bold leading-[1.3]">
              Telegram / WhatsApp
            </h2>
            <p>
              <a href="tel:+79051234567">+</a>
            </p>
          </li>
          <li className="text-[18px] leading-[1.5]">
            <h2 className="mb-[20px] text-[40px] font-bold leading-[1.3]">
              Email
            </h2>
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
