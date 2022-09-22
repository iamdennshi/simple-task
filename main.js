// windows.localStorage to save after reload page

window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        // to cancel an input action
        e.preventDefault();
        const task = input.value;
        
        if (task) {
            // Enable 'Tasks'
            document.getElementById("task-list-header").style.display ="block";
            // document.querySelector("#task-list-header").classList.remove('off');

            const task_el = document.createElement("div");
            task_el.classList.add("task");
            list_el.appendChild(task_el);
  
            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");
            // task_content_el.innerHTML = task;
            task_el.appendChild(task_content_el);
            
            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");
            task_content_el.appendChild(task_input_el);

            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");

            const task_edit_el = document.createElement("button");
            task_edit_el.classList.add("edit");
            // task_edit_el.innerHTML = "<i class=\"fa-solid fa-pen\"></i>";
            task_actions_el.appendChild(task_edit_el);
            
            const task_edit_icon = document.createElement("i");
            task_edit_icon.classList.add("fa-solid");
            task_edit_icon.classList.add("fa-pen");
            task_edit_el.appendChild(task_edit_icon);

            const task_delete_el = document.createElement("button");
            task_delete_el.classList.add("delete");
            // task_delete_el.innerHTML = "<i class=\"fa-solid fa-minus\"></i>";
            task_actions_el.appendChild(task_delete_el);  
            
            const task_delete_icon = document.createElement("i");
            task_delete_icon.classList.add("fa-solid");
            task_delete_icon.classList.add("fa-minus");
            task_delete_el.appendChild(task_delete_icon);

            task_el.appendChild(task_actions_el);
            input.value = "";
            window.localStorage.setItem("list_el", list_el);

            // Disable active elements when adding a new one
            let aaa = list_el.querySelectorAll(".task");
            for (let a = 0; a < aaa.length; a++) {
                if (!aaa[a].querySelector("input").getAttribute("readonly"))
                    aaa[a].querySelector("input").setAttribute("readonly", "readonly");
                    aaa[a].querySelector(".edit i").className = "fa-solid fa-pen";
            }

            task_input_el.addEventListener('click', () => {
                if (task_edit_icon.className == "fa-solid fa-pen") {

                    // Disable active elements when adding a new one
                    aaa = list_el.querySelectorAll(".task");
                    for (let a = 0; a < aaa.length; a++) {
                        if (!aaa[a].querySelector("input").getAttribute("readonly"))
                            aaa[a].querySelector("input").setAttribute("readonly", "readonly");
                            aaa[a].querySelector(".edit i").className = "fa-solid fa-pen";
                    }

                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_icon.className = "fa-solid fa-check";
                }
                else {
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_icon.className = "fa-solid fa-pen";
                }
            })

            task_edit_el.addEventListener('click', () => {
                if (task_edit_icon.className == "fa-solid fa-pen") {

                    // Disable active elements when adding a new one
                    aaa = list_el.querySelectorAll(".task");
                    for (let a = 0; a < aaa.length; a++) {
                        if (!aaa[a].querySelector("input").getAttribute("readonly"))
                            aaa[a].querySelector("input").setAttribute("readonly", "readonly");
                            aaa[a].querySelector(".edit i").className = "fa-solid fa-pen";
                    }

                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_icon.className = "fa-solid fa-check";
                }
                else {
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_icon.className = "fa-solid fa-pen";
                }
            })

            task_delete_el.addEventListener('click', () => {
                task_el.remove();
                if (list_el.querySelector(".task") == null)
                    // Enable 'Tasks'
                    document.getElementById("task-list-header").style.display ="none";
                    // document.querySelector("#task-list-header").classList.add('off');
            });
        }
    });
});
