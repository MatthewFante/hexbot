const hexbotContent = document.querySelector('#hexbotContent');
const hexbotButton = document.querySelector('#getColors');
const hexbotCount = document.querySelector('#hexbotCount');

hexbotButton.addEventListener('click', ()=>{
  var hexbot = new XMLHttpRequest();
 
  hexbot.onreadystatechange = function () {
    if(hexbot.readyState === 4) {
      let response = JSON.parse(hexbot.responseText);
      // console.log(response.colors);
      let dots = "";
      for (i = 0; i<response.colors.length; i+=1){
        console.log(response.colors[i].value);
        dots += "<div class='dot' style='background-color:" + response.colors[i].value +"'><br /><br />" + response.colors[i].value + "</div>";
        };
        hexbotContent.innerHTML = dots;
      }
    };

  hexbot.open('GET', 'https://api.noopschallenge.com/hexbot?count=' + hexbotCount.value);
  
  hexbot.send();
})

