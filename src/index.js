
document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    createToDo(e.target["new-task-description"].value)
  })
  function createToDo(input) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', performDelete)
    btn.textContent = 'Delete To Do list'
    p.textContent = `${input} `
    p.appendChild(btn)
    document.getElementById('tasks').appendChild(p)
  }

  function performDelete(e) {
    e.target.parentNode.remove()
  }

});



