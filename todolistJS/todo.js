const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
}

function changeStatus(task, status) {
  if (task in list) {
    list[task] = status
  }
}

function addTask(task) {
  list[task] = 'To Do'
}

function deleteTask(task) {
  delete list[task]
}

function checkTaskStatusInList(status) {

  let haveStatus = false
  console.log(status + ' :')

  for (let task in list) {
    if (list[task] === status) {
      haveStatus = true
      console.log('   ' + task)
    }
  }

  if (haveStatus === false) {
    console.log(' - ')
  }
}

function showList() {
  checkTaskStatusInList('To Do')
  checkTaskStatusInList('In Progress')
  checkTaskStatusInList('Done')
}



addTask('Assemble the puzzle')
addTask('Complete task number 20')
addTask('Buy products')

changeStatus('Complete task number 20', 'In Progress')
changeStatus('Buy products', 'In Progress')
changeStatus('write a post', 'In Progress')
changeStatus('create a new practice task', 'Done')
changeStatus('Assemble the puzzle', 'Done')

deleteTask('create a new practice task')
deleteTask('Assemble the puzzle')

showList()
