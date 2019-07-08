const hexbotContent = document.querySelector('#hexbotContent');

hexbotContent.addEventListener('click', ()=>{
  var hexbot = new XMLHttpRequest();
 
  hexbot.onreadystatechange = function () {
    if(hexbot.readyState === 4) {
      let response = JSON.parse(hexbot.responseText);
      let color = response.colors[0].value;
      hexbotContent.innerHTML = "<p>" + color + "</p>";
      hexbotContent.style.backgroundColor = color;
      }
    };

  hexbot.open('GET', 'https://api.noopschallenge.com/hexbot');
  
  hexbot.send();
})

