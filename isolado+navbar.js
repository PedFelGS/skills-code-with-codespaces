const perfil = document.querySelector(".app-dropdown-group")
const menu = document.querySelector(".user-menu")

perfil.onclick = () => {
  menu.classList.toggle("active")
  console.log("menu clickado")
}
