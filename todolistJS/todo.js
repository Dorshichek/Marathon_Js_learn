const STATUS = {
  TO_DO: 'To Do',
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
}

const DEFAULT_STATUS = STATUS.TO_DO

const list = {
  "create a new practice task": STATUS.IN_PROGRESS,
  "make a bed": STATUS.DONE,
  "write a post": STATUS.TO_DO,
}

function changeStatus(task, status) {
  if (task in list) {
    list[task] = status
  } else {
    console.log('Данной задачи нет в листе')
  }
}

function addTask(task) {
  list[task] = DEFAULT_STATUS
}

function deleteTask(task) {
  if (task in list) {
    delete list[task]
  } else {
    console.log('Данной задачи нет в листе')
  }

}


//Мое решение не самое лучшее, городить огород в функцию + записывать в нее несколько действий + консоль логать
// function checkTaskStatusInList(status) {
//
//   let haveStatus = false
//   console.log(status + ' :')
//
//   for (let task in list) {
//     if (list[task] === status) {
//       haveStatus = true
//       console.log('   ' + task)
//     }
//   }
//
//   if (haveStatus === false) {
//     console.log(' - ')
//   }
// }

//Решение со стрима, лучшее))
function showList() {
  const tasks = {
    [STATUS.TO_DO]: '',
    [STATUS.IN_PROGRESS]: '',
    [STATUS.DONE]: '',
  }

  for (let key in list) {
    tasks[list[key]] += key + '\n'
  }

  if (tasks[STATUS.TO_DO] === '') {tasks[STATUS.TO_DO] = ' - '}
  if (tasks[STATUS.IN_PROGRESS] === '') {tasks[STATUS.IN_PROGRESS] = ' - '}
  if (tasks[STATUS.DONE] === '') {tasks[STATUS.DONE] = ' - '}

  console.log(`${STATUS.TO_DO + ' :'} \n${tasks[STATUS.TO_DO]} \n${STATUS.IN_PROGRESS + ' :'} \n${tasks[STATUS.IN_PROGRESS]} \n${STATUS.DONE + ' :'} \n${tasks[STATUS.DONE]}`)
}

//Переписанное решение
// function showList() {
//   let toDo = '',
//       inProgress = '',
//       done = '',
//       hasNoStatus = '  - ';
//
//   for (let task in list) {
//     switch (list[task]) {
//       case 'To DO':
//         toDo += `\n "${task}"`
//         break
//       case 'In Progress':
//         inProgress += `\n "${task}"`
//         break
//       case 'Done':
//         done += `\n "${task}"`
//       default:
//         break
//     }
//   }
//
//   console.log(`${STATUS.TO_DO + ' :'} \n${toDo || hasNoStatus} \n${STATUS.IN_PROGRESS + ' :'} ${inProgress || hasNoStatus} \n${STATUS.DONE + ' :'} ${done || hasNoStatus}`)
//
// }


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
