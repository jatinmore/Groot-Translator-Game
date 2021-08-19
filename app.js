  
var input_Text=document.querySelector("#inputval");
var getTranslate = document.querySelector("#translatetext");
var displayText = document.querySelector("#output-text"); 

var url="https://api.funtranslations.com/translate/groot.json";

function getTranslationUrl(text)
{
    return url + "?" +"text="+text
}

function errorHandle(error)
{
    alert('something went wrong with the server',error)
}
function responseHandler()
{
  var getText=input_Text.value;
  fetch(getTranslationUrl(getText))
    .then(response => response.json())
    .then(json => 
        {
            var outputText=json.contents.translated;
            displayText.innerText=outputText;
        })
    .catch(errorHandle)
        
}
getTranslate.addEventListener("click",responseHandler)
