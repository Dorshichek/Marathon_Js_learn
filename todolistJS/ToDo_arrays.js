const STATUS = {
  TO_DO: 'To do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
}

const DEFAULT_STATUS = STATUS.TO_DO

const PRIORITY = {
  LOW: 'Low',
  HIGH: 'High',
}

const DEFAULT_PRIORITY = PRIORITY.LOW

const list = [
  {name: 'create a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH},
  {name: 'create ToDO list', status: STATUS.DONE, priority: PRIORITY.HIGH},
  {name: 'make a bed', status: STATUS.DONE, priority: PRIORITY.LOW},
]

function addTask(taskName) {
  list.push({name: taskName, status: DEFAULT_STATUS, priority: DEFAULT_PRIORITY})
}

function changeStatus(taskName, changeStatus) {
  let searchTask = list.find(task => task.name === taskName)
  searchTask.status = changeStatus
}

function changePriority(taskName, changePriority) {
  let searchTask = list.find(task => task.name === taskName)
  searchTask.priority = changePriority
}

function deleteTask(taskName) {
  const DELETE_COUNT = 1
  let deleteTaskIndex = list.findIndex(task => task.name === taskName)
  list.splice(deleteTaskIndex, DELETE_COUNT)
}

function showBy(key) {
  const NO_TASKS = "-"
  if (key === 'status') {

    let tasks = {
      [STATUS.IN_PROGRESS]: '',
      [STATUS.TO_DO]: '',
      [STATUS.DONE]: '',
    }

    for (let key of list) {
      if (key.status === STATUS.TO_DO) {
        tasks[STATUS.TO_DO] += `\n "${key.name}"`;
      }
      if (key.status === STATUS.IN_PROGRESS) {
        tasks[STATUS.IN_PROGRESS] += `\n "${key.name}"`;
      }
      if (key.status === STATUS.DONE) {
        tasks[STATUS.DONE] += `\n "${key.name}"`;
      }
    }

    console.log(
    `${STATUS.TO_DO} : \n  ${tasks[STATUS.TO_DO] || NO_TASKS} 
    \n${STATUS.IN_PROGRESS} : \n${tasks[STATUS.IN_PROGRESS] || NO_TASKS}
    \n${STATUS.DONE} : \n${tasks[STATUS.DONE] || NO_TASKS}`)
  }

  if (key === 'priority') {
    let tasks = {
      [PRIORITY.LOW]: '',
      [PRIORITY.HIGH]: '',
    }

    for (let key of list) {
      if (key.priority === PRIORITY.LOW) {
        tasks[PRIORITY.LOW] += `\n "${key.name}"`;
      }
      if (key.priority === PRIORITY.HIGH) {
        tasks[PRIORITY.HIGH] += `\n "${key.name}"`;
      }
    }

    console.log(
    `${PRIORITY.LOW} : \n  ${tasks[PRIORITY.LOW] || NO_TASKS} 
    \n${PRIORITY.HIGH} : \n${tasks[PRIORITY.HIGH] || NO_TASKS}`)
  }
}

addTask('Do Homework')
addTask('Buy products')
addTask('Learn JS')
addTask('Learn english')

changeStatus('Buy products', 'Done')
changeStatus('Learn JS', 'In progress')

changePriority('Learn JS', 'High')
changePriority('create a post', 'Low')

deleteTask('Do Homework')
deleteTask('Buy products')

showBy('status')
showBy('priority')