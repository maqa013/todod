const comments =[
    {
        email: ' Person@gmail.com',
        body:' Lorem ipsum , dolor sit amet consectetur adipicising elit. Iste,officia?'
    }
]


if(!localStorage.getItem('comments')){
    localStorage.setItem('comments', JSON.stringify(comments))
}


const container = document.querySelector('.container')

function update(){
    const Comments1 =  JSON.parse(localStorage.getItem('comments'))
    container.innerHTML = ''
    for(let comment of Comments1){
        container.innerHTML += `
        <div class="coment-block1">
        <div class="comment">
            <p class="first"> ${comment.email}</p>
            <p class="word">${comment.body}</p>
       
          
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
        
    </div>
        `
    }
}
update()

const input = document.querySelector('input')

const textarea = document.querySelector('textarea')

const btn = document.querySelector('button')
function addComment(e){
    e.preventDefault()

const newcomment = {
    email: input.value,
    body: textarea.value

}
comments.push(newcomment)
localStorage.setItem('comments', JSON.stringify(comments))
update()
}


function change(element){
    element.style.fill = 'red'
}

function handleClick(e){
 if(e.target.tagName === 'path'){
  change(e.target)
 }
}

container.addEventListener('click',handleClick)

btn.addEventListener('click' , addComment)