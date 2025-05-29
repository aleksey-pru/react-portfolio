import { BsSendFill } from "react-icons/bs";
import { addInfoFromForm } from "../../operations/formOps";
const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { email, message } = form.elements;
    const newValues = {
      email: email.value,
      message: message.value,
    };
    addInfoFromForm(newValues);
    form.reset();
  };
  return (
    <main className="bg-zinc-200 dark:bg-zinc-900 py-[70px] flex ">
      <div className="text-zinc-900 dark:text-white max-w-[1200px] mx-auto px-4">
        <h2 className="mb-[60px] text-[50px] font-bold leading-[1.3] text-[var(--title-1)] text-center">
          Contact Me
        </h2>

        <section className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
          <form
            className="mt-10 flex flex-col dark:text-black"
            onSubmit={handleSubmit}
            action=""
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              id=""
            ></textarea>
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none cursor-pointer transition-all focus:scale-110 hover:scale-110 hover:bg-zinc-800 hover:text-white active:scale-105 dark:bg-zinc-800 dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
            >
              Submit
              <BsSendFill className="text-m opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </section>

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
