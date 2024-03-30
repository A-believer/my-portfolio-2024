import { watch, ref, onMounted } from "vue";

export function useTheme() {
    const theme = ref(null)

    function setTheme( themeVlaue) {
        const rootElement = document.documentElement
        rootElement.setAttribute('data-theme', themeVlaue)
    }

    function toggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
    onMounted(() => 
        {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            theme.value = storedTheme
        } else {
            theme.value = 'light'
        }
        setTheme(theme.value)
    }
    ) 

    watch(theme, (newTheme) => {
        localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    })

    

    return {theme, toggleTheme}
}