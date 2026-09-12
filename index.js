import {catsData} from './data.js'

let emotionRadios = document.getElementById("emotion-radios")

emotionRadios.addEventListener('change', function(e){
    console.log(e.target.id)
})

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
                            name="emotions"

                            <label for="${emotion}">${emotion}</label>
                        </div>
                        `
    }

    emotionRadios.innerHTML = radioItems
}


renderEmotionsRadios(catsData)