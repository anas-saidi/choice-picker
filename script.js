const textArea = document.querySelector('textarea');
const tagsEl = document.querySelector('#tags');
textArea.focus()
textArea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if(e.key==='Enter'){
        const times = 30
        setTimeout(()=>{e.target.value='';},100)
    let interval = setInterval(()=>{
        const randomChoice = pickRandomChoice()
        randomChoice.classList.add('highlight')
        setTimeout(()=>{randomChoice.classList.remove('highlight')},100)
    
    
    },100)
    setTimeout(()=>{
    clearInterval(interval)
    let rand =pickRandomChoice() 
    setTimeout(()=>{rand.classList.add('highlight')},100)
    
    },100*times)
    





    }
})
function pickRandomChoice(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)];
}
function createTags(input){
    const tags = input.split(',').filter(el=>el.trim()!=='').map(el=>el.trim())
    tagsEl.innerHTML = ''
    tags.forEach(tag =>{ 
        let tagEl = document.createElement('span') 
        tagEl.classList.add('tag')
        tagEl.innerText=tag;
        tagsEl.appendChild(tagEl)

    })
}