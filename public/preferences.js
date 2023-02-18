const theme = localStorage.getItem("theme");
const mql = window.matchMedia('(prefers-color-scheme: dark)');
const hasMediaQueryPreference = typeof mql.matches === 'boolean';

console.log(theme);

if (theme === "dark") {
  document.documentElement.classList.add("dark");
} else if (theme !== 'light' && hasMediaQueryPreference && mql.matches) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark")
}

const font = localStorage.getItem("font")
if (["sans-serif", "serif", "mono"].includes(font)) {
  // document.documentElement.classList.add("font", font)
  document.documentElement.dataset["font"] = font
} else {
  localStorage.setItem("font", "sans-serif");
  document.documentElement.dataset["font"] = "sans-serif"
}
