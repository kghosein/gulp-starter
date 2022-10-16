export default function toggleMode() {
  let darkMode = localStorage.getItem('darkMode');
  const toggleDark = document.querySelector(".toggle-mode-wrapper");

  const enableDarkMode = () => {
    document.querySelector(".icon-cover").classList.add("to-dark");
    document.body.classList.add("dark");
    localStorage.setItem('darkMode', 'enabled');
  }

  const removeDarkMode = () => {
    document.querySelector(".icon-cover").classList.remove("to-dark");
    document.body.classList.remove("dark");
    localStorage.setItem('darkMode', null);
  }

  if(darkMode === 'enabled') {
    enableDarkMode();
  }

  toggleDark.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        removeDarkMode();
    }
  });
  
}
