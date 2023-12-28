const themeToggle = document.getElementById("themeToggle");

function setThemeProperties(bgColor, keypadBgColor, keypadBgColor2, textColor) {
    document.documentElement.style.setProperty('--bg-color', bgColor);
    document.documentElement.style.setProperty('--keypad-bg-color', keypadBgColor);
    document.documentElement.style.setProperty('--keypad-bg-color2', keypadBgColor2);
    document.documentElement.style.setProperty('--text-color', textColor);
}

const storedTheme = localStorage.getItem('theme');
if (storedTheme == 'dark') {
    setThemeProperties('#1F1D36', '#3F3351', '#864879', '#E9A6A6');
    themeToggle.checked = true;
} else {
    setThemeProperties('#F2F1EB', '#e3dac6', '#AFC8AD', '#88AB8E');
}

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        setThemeProperties('#1F1D36', '#3F3351', '#864879', '#E9A6A6');
        localStorage.setItem('theme', 'dark');
    } else {
        setThemeProperties('#F2F1EB', '#e3dac6', '#AFC8AD', '#88AB8E');
        localStorage.setItem('theme', 'light');
    }
});

let result = document.getElementById('result');

function appendToResult(value) {
    if (result.value == '0' && value == '0') {
        result.value = '0';
    }
    else if (result.value == '0' && value != '0' && value != '.') {
        result.value = '';
        result.value += value;
    }
    else
        result.value += value;
}

function backspace() {
    if(result.value == 'Error')
        result.value = '0';
    else if(result.value != '0') {
        result.value = result.value.slice(0, -1);
        if (result.value == '')
            result.value = '0';
    }
}

function allclear() {
    result.value = '0';
}

function calculate() {
    try {
        if (result.value == '')
            result.value = '0';
        result.value = eval(result.value);
    }
    catch(e) {
        result.value = "Error";
    }
}