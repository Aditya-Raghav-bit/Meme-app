import {catsData} from './data.js'

const emotionRadios = document.getElementById("emotion-radios")

const getImageBtn = document.getElementById("get-image-btn")

getImageBtn.addEventListener('click', getMatchingCatsArray)

emotionRadios.addEventListener('change', highlightCheckedOption)

function getMatchingCatsArray(){
    
    if(document.querySelector('input[type="radio"]:checked')){
        let checkedEmotions = document.querySelector('input[type="radio"]:checked').value;
        console.log(checkedEmotions)
    }
}

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for(let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getEmotionsArray(cats){
    const emotionsArray = []
    for(let cat of cats){
        for(let emotion of cat.emotionTags){

            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
    let radioItems = ``
    const catEmotionsArray = getEmotionsArray(cats)
    
    for(let emotion of catEmotionsArray){
        radioItems += `<div class="radio">
                            <input type="radio"
                            id="${emotion}"
                            value="${emotion}"
                            name="emotions">

                            <label for="${emotion}">${emotion}</label>
                        </div>
                        `
    }

    emotionRadios.innerHTML = radioItems
}


renderEmotionsRadios(catsData)