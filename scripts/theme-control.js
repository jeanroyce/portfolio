const root = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const mediaColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
const THEME_STORAGE_KEY = 'theme';

// Icones do botão de switch do 
// dark e light mode da fonte NerdFont
const icons = {
    dark: '\uf186',
    light: '\uf522',
};


// Salva os estados de controle manual da escolha de temas 
const state = {
    isThemeManual: false,
    manualTheme: null
};

function getSystemTheme() {
    return mediaColorScheme.matches ? 'dark' : 'light';
}

function getCurrentTheme() {
    return state.isThemeManual ? state.manualTheme : getSystemTheme();
}

function setTheme() {
    const theme = getCurrentTheme();
    root.style.colorScheme = theme;
    themeToggleBtn.textContent = icons[theme];
}

function toggleTheme() {
    const currentTheme = getCurrentTheme();
    state.isThemeManual = true;
    state.manualTheme = currentTheme === 'dark' ? 'light' : 'dark';

    saveTheme(state.manualTheme);
    setTheme();
}

function handleSystemThemeChange() {
    if (!state.isThemeManual) {
        setTheme();
    }
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === 'dark' || savedTheme === 'light') {
        state.isThemeManual = true;
        state.manualTheme = savedTheme;
    }
}

function saveTheme(theme) {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
}

function init() {
    themeToggleBtn.style.display = 'block';

    loadSavedTheme();
    setTheme();

    mediaColorScheme.addEventListener("change", handleSystemThemeChange);
    themeToggleBtn.addEventListener('click', toggleTheme);
}

init();
