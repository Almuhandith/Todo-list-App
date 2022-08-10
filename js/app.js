
window.addEventListener('load', ()=> {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#input-el')
    const listEL = document.querySelector('#tasks')
    let myList = []
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please add a task to the list")
            return
        }

        const taskEl = document.createElement("div");
        taskEl.classList.add("task")

        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content");

        taskEl.appendChild(taskContentEl);

        const taskInputEl = document.createElement("input")
        taskInputEl.type = "text"
        taskInputEl.classList.add("text");
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");


        taskContentEl.appendChild(taskInputEl);

        const taskActions = document.createElement("div");
        taskActions.classList.add("actions");
        
        const taskEdit = document.createElement("button")
        taskEdit.classList.add("edit")
        taskEdit.innerHTML ="Edit"

        const taskDelete = document.createElement("button")
        taskDelete.classList.add("delete")
        taskDelete.innerHTML ="Delete"

        taskActions.appendChild(taskEdit);
        taskActions.appendChild(taskDelete);

        taskEl.appendChild(taskActions)

        listEL.appendChild(taskEl);

        input.value = "";

        taskEdit.addEventListener('click', () => {
            if (taskEdit.innerText.toLowerCase() == "edit") {
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                taskEdit.innerText = "Save";
            } else {
                taskInputEl.setAttribute("readonly", "readonly");
                taskEdit.innerText = "Edit";
            }

            // function renderList() {
            //         let listItems = ""
            //         for(let i = 0; i < listEL.length; i++) {
            //             listItems += listEL[i]       
            //     }
            // }
            // console.log(listItems);
            // localStorage.setItem('myList', JSON.stringify(myList))
            // renderList()
        })

        taskDelete.addEventListener('click', () => {
            listEL.removeChild(taskEl);
        })
    })

})




