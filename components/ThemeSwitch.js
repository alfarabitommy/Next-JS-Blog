import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
    if (typeof localStorage === 'undefined') {
        return false;
    }
    const value = localStorage.getItem('darkMode');
    return (value === null) ? false : JSON.parse(value);
}

// ini adalah contoh penggunaan button untuk merubah tema website kita
// misalnya dari light mode menjadi dark mode maupun sebaliknya
function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(loadDarkMode);

    // ini adalah constant dan pemyimpanan sementara pilihan user untuk disimpan di dalam local storage
    const handleClick = () => {
        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
        setDarkMode(!darkMode);
    };

    console.log('[ThemeSwitch] darkMode:', darkMode);
    const text = darkMode ? 'Light Mode' : 'Dark Mode';
    return (
        <>
            {/* supressHydrationWarning berfungsi untuk menghilangkan error hydration akibat adanya perbedaan pada client dan server */}
            <button onClick={handleClick} suppressHydrationWarning>
                {text}
            </button>
            <style jsx>{`
             button {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
             }    
            `}</style>
            {/* ini adalah if, jika dark mode false maka layar akan menjadi putih, jika dark mode true maka layar akan menjadi hitam */}
            { darkMode && <DarkTheme /> }
        </>
    );
}

export default ThemeSwitch;