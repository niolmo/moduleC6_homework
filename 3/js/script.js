let socket = new WebSocket("wss://echo-ws-service.herokuapp.com");
let geoBtn = document.getElementById("geoBtn");

//отправка сообщений
document.forms.chatform.onsubmit = function () {
  let out = this.massage.value;
  let myMessage = document.createElement("div");
  myMessage.textContent = out;
  myMessage.style =
    "width:150px; padding:15px; margin-left:65%;  margin-bottom:10px; border: 2px solid #32CD32; border-radius:10px; text-align:right;";
  document.getElementById("chat").prepend(myMessage);
  socket.send(out);
  return false;
};

//получение сообщения в #caht
socket.onmessage = function (event) {
  let massage = event.data;
  let mesElem = document.createElement("div");
  mesElem.style =
    "width:150px; padding:15px; margin-bottom:10px; border: 2px solid #20B2AA; border-radius:10px;";
  mesElem.textContent = massage;
  document.getElementById("chat").prepend(mesElem);
};

//Геопозиция
function geoScreen(message, position = "flex-end") {
  let element = `
        <p class='messages' style='align-self: ${position}'>
            ${message}
        </p>
    `;
  document.getElementById("chat").innerHTML += element;
  document.getElementById("cont").scrollTop =
    document.getElementById("cont").scrollHeight;
}

const getGeo = (position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  geoScreen(
    `<a  href='${geoLink}' target='_blank' class="chatLink">Ваша геопозиция</a>`
  );
};

geoBtn.addEventListener("click", function show() {
  if (!navigator.geolocation) {
    console.log("Geolocation не поддерживается вашим браузером");
  } else {
    navigator.geolocation.getCurrentPosition(getGeo);
  }
});
