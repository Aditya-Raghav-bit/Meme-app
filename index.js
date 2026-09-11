import {catsData} from './data.js'

function getEmotionsArray(cats){
    const emotionsArray = []
    for(let cat of cats){
        for(let emotion of cat.emotionTags){
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}

let emotionRadios = document.getElementById("emotion-radios")

function renderEmotionsRadios(cats){
    let radioItems = ``
    const catEmotionsArray = getEmotionsArray(cats)
    
    for(let emotion of catEmotionsArray){
        radioItems += `<p>${emotion} <br></p>`
    }

    emotionRadios.innerHTML = radioItems
}


renderEmotionsRadios(catsData)