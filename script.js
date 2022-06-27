const containerElement = document.getElementById('container')

function toggleTheme() {
  if (containerElement.classList.contains('dark-theme')) {
    containerElement.classList.remove('dark-theme')
    containerElement.classList.add('light-theme')
  } else {
    containerElement.classList.add('dark-theme')
    containerElement.classList.remove('light-theme')
  }
}
