const el = document.querySelectorAll('.scheme.container rect');
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
let cost = 800;
let totalPrice = 0;

for (const element of el) {
    element.addEventListener("click", () => {
        if (!element.classList.contains("brone") && !element.classList.contains("fill-one") && !element.classList.contains("fill-two") && !element.classList.contains("fill-three")) {
            element.classList.toggle('active')
            let totalSeat = document.querySelectorAll(".scheme.container rect.active").length;
            console.log(totalSeat)
            totalPrice = totalSeat * cost;
            totalPriceTag.textContent = totalPrice;
        }
    });
}
menuButton.addEventListener('click', () => {
    console.log('Кликнули по меню');
    menu.classList.toggle('is-open')
})

function activeModal(){
    document.querySelector('.modal').classList.toggle('active');
}