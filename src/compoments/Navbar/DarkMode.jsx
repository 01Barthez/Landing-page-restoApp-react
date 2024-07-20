import React from 'react';
import DarkModePng from "../../assets/DarkMode";
import LightModePng from "../../assets/LightMode";

    const DarkMode = () => {
        const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );

    const element = document.documentElement;

    React.useEffect(() =>{
        if(theme === "dark"){
            element.classList.add("dark")
            localStorage.setItem(theme, "dark");
        }else{
            element.classList.remove("dark")
            localStorage.setItem(theme, "light");
        }
    },[theme]);

    const changeTheme = () => {
        if(theme === "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    return (<>
        <div className="relative">
            <img 
                src={DarkModePng} 
                alt="imgDark" 
                className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-lg transition-all duration-300 ${theme !=="dark" ? "opacity-0" : "opacity(100)"}`}
                onClick={changeTheme}
            />

            <img 
                src={LightModePng} 
                alt="imgLight" 
                className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-lg transition-all duration-300`}
                onClick={changeTheme}
            />
        </div>
    </>
  )
}

export default DarkMode
