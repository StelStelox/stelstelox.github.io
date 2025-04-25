function Home(){

    const inputStyle = "h-[15px] p-4 outline-none ring-2 ring-blue-500 rounded-[10px]";

    return (
        <div className="flex flex-col items-center justify-center">
            <form className="flex flex-col bg-gray-800 w-[300px] h-[350px] p-4 rounded-[18px] gap-4" action="">
                <h1 className="text-center text-[25px]">Заявка</h1>
                <h2 className="text-center">Заполните форму для регистрации заявки</h2>
                <input className={inputStyle} type="text" placeholder="Имя"/>
                <input className={inputStyle} type="email" placeholder="Почта"/>
                <input className={inputStyle} type="text" placeholder="Telegram" />
                <button type="button" className="bg-blue-950 border-1 border-blue-900 rounderd-[10px] cursor-not-allowed">Отправить</button>
            </form>
        </div>
    );
}

export default Home;
