import { useState } from "react";

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
        </>
    );
}

export default ThemeSwitch;