let count = 0
document.getElementById('add-task-btn').addEventListener('click', function () {
    // let count = 0
    count++
    let taskInput = document.getElementById('task-input').value
    if (taskInput == '') {
        alert('Please Input a task...')
    } else {

        // add Task
        let tableContainer = document.getElementById('table-container')
        let tableContent = document.createElement('tr')
        tableContent.innerHTML = `                    
        <th scope="row">${count}</th>
        <td>${taskInput}</td>
        <td><button class="btn btn-danger delete-btn">Delete</button>
        <button class="btn btn-primary done-btn">Done</button></td>
        `
        tableContainer.appendChild(tableContent)
        // empty input 
        document.getElementById('task-input').value = ''
        // remove all event 
        document.getElementById('empty-btn').addEventListener('click', function () {
            tableContainer.innerText = ''
        })


        // button 
        let deleteButton = document.getElementsByClassName('delete-btn')
        let doneButton = document.getElementsByClassName('done-btn')
        // remove button
        for (const deleteBtn of deleteButton) {
            deleteBtn.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.display = 'none'
            })
        }
        //Done button
        for (const doneBtn of doneButton) {
            doneBtn.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.textDecoration = 'line-through'
            })
        }
    }
})