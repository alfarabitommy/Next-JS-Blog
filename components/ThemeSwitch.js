import { useState } from "react";
import DarkTheme from "./DarkTheme";

// ini adalah contoh penggunaan button untuk merubah tema website kita
// misalnya dari light mode menjadi dark mode maupun sebaliknya
function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(false);

    console.log('[ThemeSwitch] darkMode:', darkMode);
    const text = darkMode ? 'Light Mode' : 'Dark Mode';
    return (
        <>
            <button onClick={() => setDarkMode(!darkMode)}>
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