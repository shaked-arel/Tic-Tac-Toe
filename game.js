let text=document.getElementById("Text")
let reset= document.getElementById('resetButton')
let boxes=Array.from(document.getElementsByClassName('box'))
let win_color=getComputedStyle(document.body).getPropertyValue('--win_box_color')

const O="O"
const X="X"
let current=X
let boxes_clicked=Array(9).fill(null)

const start=()=>{
    boxes.forEach(box=> box.addEventListener('click',boxClicked))
}

function boxClicked(e){
    var id= e.target.id
    if(boxes_clicked[id]==null){
        boxes_clicked[id]=current
        e.target.innerText=current
        if(is_win()!=false){
            text.innerHTML=current+' won!'
            let win_boxes= is_win()
            win_boxes.map(box=>boxes[box].style.backgroundColor=win_color)
            return

        }
        if(current==X){
            current=O
        }
        else{
            current=X
        }
    }  
}

const win_combos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function is_win(){
    for (const combo of win_combos) {
        let [a,b,c]=combo
        if(boxes_clicked[a]&&(boxes_clicked[a]== boxes_clicked[b]&& boxes_clicked[a]==boxes_clicked[c])){
            return [a,b,c]
        }  
    }
    return false
    
}


reset.addEventListener('click',restart)
function restart(){
    boxes_clicked.fill(null)
    boxes.forEach(box=>{
        box.innerText=''
        box.style.backgroundColor=''
    })
    current=X
    
    text.innerHTML='Tic Tac Toe'
}


start()


//reset.onclick()