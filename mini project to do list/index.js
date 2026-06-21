 const btn = document.querySelector('#enter')
 const taskN = document.querySelector(".taskname")
 const content= document.querySelector(".input")
 const renderDiv = document.querySelector(".Text_area")

const addAllTaksn =  [];

// to render
function taskbulets (){
    renderDiv.innerHTML = ''
    let title = taskN.value.trim();
    let con = content.value.trim();
    if (taskN.value === "") return;
    addAllTaksn.push({title , con})
    JSON.parse(localStorage.getItem("alltask"))
    // localStorage.clear()
let taskkeys = {
    t : taskN.value,
    para:content.value
    
   }
    addAllTaksn.forEach((e,id)=>{
  const taskdiv = document.createElement('div')
   taskdiv.innerHTML += ` <div id=${id} class="taks">
        <div class="tasktop">
            <h4>${taskkeys.t}</h4>
            <div>
                <img class="delet" src="./imgs/delet.svg" alt="">
                <img class="edite" src="./imgs/edit-circle-fill.svg" alt="">
            </div>
        </div>
        <div class="taskbottom">
            ${taskkeys.para}
        </div>

    </div>`
    renderDiv.appendChild(taskdiv)
    localStorage.setItem("alltask" ,JSON.stringify(addAllTaksn));
      
})
   taskN.value = ""
   content.value = ""
} 
btn.addEventListener("click", function(e) {
    e.preventDefault();
    
   taskbulets()
   
})



// for enter input 
taskN.addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
   taskbulets()
    }
})
content.addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
   taskbulets()
    }
})












