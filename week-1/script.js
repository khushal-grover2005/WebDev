let ctr = 0;
let globalIndex = 0;

function del(index) {
    const element = document.getElementById(index);
    element.remove();
}

function update(index)
{
    const element = document.getElementById(index);
    const taskInput = document.getElementById("Task-" + index);
    element.innerHTML = "<div style='flex: 1;'>" + taskInput.value + "</div> <div><button style='margin-right: 5px;border-bottom: 1px solid #d83333;border-top: 1px solid #d83333; border-left: 1px solid #d83333;border-right: 1px solid #d83333;background-color: #242424;color:#506789; cursor: pointer;border-radius: 4px;' onclick='del(" + index + ")'>delete</button></div> <div> <input type='text' placeholder='Update Task' id='Task-" + index + "' style='margin-right: 5px; background-color: #242424; border:1px solid  #d83333; color: aliceblue;border-radius:4px;'></div> <div><button style='border-bottom: 1px solid #d83333;border-top: 1px solid #d83333; border-left: 1px solid #d83333;border-right: 1px solid #d83333;background-color: #242424;color:#506789; cursor: pointer;border-radius: 4px;'onclick='update(" + ctr + ")'>Update</button></div>";

}

function AddToDo() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("style", "display: flex; align-items: center; margin-top: 10px; padding: 10px; border: 1px solid #ccc; border-radius: 4px; background-color: #242424;");
    newDiv.setAttribute("id", ctr);

    const taskInput = document.querySelector("input");

    newDiv.innerHTML = "<div style='flex: 1;'>" + taskInput.value + "</div> <div><button style='margin-right: 5px;border-bottom: 1px solid #d83333;border-top: 1px solid #d83333; border-left: 1px solid #d83333;border-right: 1px solid #d83333;background-color: #242424;color:#506789; cursor: pointer;border-radius: 4px;' onclick='del(" + ctr + ")'>delete</button></div> <div> <input type='text' placeholder='Update Task' id='Task-" + ctr + "' style='margin-right: 5px;background-color: #242424; border:1px solid  #d83333; color: aliceblue; border-radius:4px;'></div> <div><button style='border-bottom: 1px solid #d83333;border-top: 1px solid #d83333; border-left: 1px solid #d83333;border-right: 1px solid #d83333;background-color: #242424;color:#506789; cursor: pointer;border-radius: 4px;'onclick='update(" + ctr + ")'>Update</button></div>";

    document.body.appendChild(newDiv);
    ctr = ctr + 1;
}

 