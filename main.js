const numInput = document.querySelector(".number-input");
const result = document.getElementById("result");
const tip = 0.2;

window.addEventListener("load", randBgPic);
numInput.addEventListener("input", figureTip);

function figureTip() {
  let tipAmount = (numInput.value * tip).toFixed(2);
  let total = parseFloat(tipAmount) + parseFloat(numInput.value);
  
  if (numInput.value === "" || numInput.value <= 0) {
    result.innerHTML = `<p class="total-amount">Please Enter A Correct Value</p>`;
  } else if (tipAmount > 5) {
    result.innerHTML = `<p class="tip-info">Based on a 20% tip</p>
                        <p class="tip-amount">Your tip amount is $ ${tipAmount}</p>
                        <p class="total-amount">Your Total is ${total.toFixed(2)}</p>`;
  } else {
    total = parseFloat(numInput.value) + 5;
    result.innerHTML = `<p class="tip-info">Based on a 20% tip</p>
                        <p class="tip-amount">Your tip amount is $ 5.00</p>
                        <p class="total-amount">Your Total is ${total.toFixed(2)}</p>`;
  }
}

const bgPic = [
  "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/959922/pexels-photo-959922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/208485/pexels-photo-208485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

function randBgPic() {
  const randPic = bgPic[Math.floor(Math.random() * bgPic.length)];
  document.body.style.background = `url(${randPic}) repeat center / cover`;
  document.body.style.backgroundAttachment = "fixed";
}
