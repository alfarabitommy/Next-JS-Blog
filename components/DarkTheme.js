// ini adalah function standar untuk merubah dark mode menjadi hitam atau putih
function DarkTheme() {
    return (
        <style jsx global>{`
            :root {
            --background-color: rgb(36, 36, 36);
            --link-color: rgba(255, 174, 0, 0.771);
            --text-color: rgba(255, 255, 255, 0.774);
            }
        `}</style>
    )
}

export default DarkTheme;