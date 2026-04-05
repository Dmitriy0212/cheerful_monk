const orderModal = document.getElementById("orderModal");
const openOrderBtn = document.getElementById("openOrderModal"); /// первірити назву кнопки
const closeBtn = orderModal.querySelector(".order-close");

openOrderBtn.onclick = () => orderModal.style.display = "block";
closeBtn.onclick = () => orderModal.style.display = "none";
window.onclick = (e) => { if (e.target == orderModal) orderModal.style.display = "none"; }

document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Заявка відправлена!");
  orderModal.style.display = "none";
  this.reset();
});