const fundamentos = document.getElementById("fundamentos")
const funList = document.getElementById("Fundamentos-list")

funList.style.display = "none"

fundamentos.addEventListener("mouseenter", function()
{
    funList.style.display = "block"
})
fundamentos.addEventListener("mouseleave", function()
{
    funList.style.display = "none"
})



