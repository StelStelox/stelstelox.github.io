import ThemeSwitch from "../../features/ui/ThemeSwitch";
import LanguageSelector from "../../features/ui/LanguageSelector";

function Header() {

    return (
        <header className='flex items-center justify-between bg-[#efefefd3] bg-opacity-73 rounded-[18px] p-[10px] h-[70px] mt-[15px] max-w-[1000px] mx-auto w-full mb-[15px]'>
            <nav className="flex gap-[15px] items-center justify-center">
                <img className='w-[45px]' src="./avatar.png" alt="" />
                <h1 className="text-black text-[25px]">Stel Stelox</h1>
            </nav>
            <nav className="flex gap-[15px]">
                <ThemeSwitch/>
                <LanguageSelector/>
            </nav>
        </header>
    );
};

export default Header;