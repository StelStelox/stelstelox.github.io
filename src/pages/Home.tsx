import { useTranslation } from "react-i18next";

function Home(){

    const { t } = useTranslation();

    const inputStyle = "h-[15px] p-4 outline-none ring-2 ring-blue-500 rounded-[10px]";

    return (
        <div className="flex flex-col items-center justify-center">
            <form className="flex flex-col bg-indigo-300 w-[300px] h-[350px] p-4 rounded-[18px] gap-4 dark:bg-gray-800" action="">
                <h1 className="text-center text-[25px]">{t("home.bid.title")}</h1>
                <h2 className="text-center">{t("home.bid.info")}</h2>
                <input className={inputStyle} type="text" placeholder={t("home.bid.inputName")}/>
                <input className={inputStyle} type="email" placeholder={t("home.bid.inputMail")}/>
                <input className={inputStyle} type="text" placeholder="Telegram" />
                <button type="button" className="bg-blue-500 dark:bg-blue-950 border-1 border-blue-900 rounderd-[10px] cursor-not-allowed">{t("home.bid.buttonSend")}</button>
            </form>
        </div>
    );
}

export default Home;
