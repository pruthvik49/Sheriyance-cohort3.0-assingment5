 const btn = document.querySelector('#enter')
 const taskN = document.querySelector(".taskname")
 const editbtn = document.querySelector('#greebtn')
 const content = document.querySelector(".input")
 const form = document.querySelector(".editeform")
 const renderDiv = document.querySelector(".Text_area")

const addAllTaksn =  JSON.parse(localStorage.getItem("alltask")) || [];

// to render
function taskbulets (){
    renderDiv.innerHTML = ""

    addAllTaksn.forEach((e,id)=>{
        const taskdiv = document.createElement('div')
        taskdiv.innerHTML = ` <div id=${id} class="taks">
            <div class="tasktop">
                <h4>${e.title}</h4>
                <div>
                    <img class="delet" src="./imgs/delet.svg" alt="">
                    <img id = "greebtn" class="edite" src="./imgs/edit-circle-fill.svg" alt="">
                </div>
            </div>
            <div class="taskbottom">
                ${e.para}
            </div>
        </div>`
        renderDiv.appendChild(taskdiv)
    })
    
    
    editbtn.addEventListener("click",()=>{

            form.style.display = 'flex'
        })
    localStorage.setItem("alltask" ,JSON.stringify(addAllTaksn));
}

taskbulets();


btn.addEventListener("click", function(e) {
   let title = taskN.value.trim();
let para = content.value.trim();

if (!title) return;
if (!para) return;
addAllTaksn.push({title , para})

taskbulets();

taskN.value = "";
content.value = "";
})

// for enter input 
taskN.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        btn.click();
    }
});

content.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        btn.click();
    }
});

// render saved tasks when page loads












