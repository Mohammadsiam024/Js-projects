console.log("connected")
const toDoList = document.getElementById("todo-list")
const textField = document.getElementById("inputField")
const addButton = document.getElementById("add-btn")
let text = ""

const addNewList=()=>{
    if(text!=""){

        var list= document.createElement('li')
        var input= document.createElement('input')
        var label= document.createElement('label')
        var textNode = document.createTextNode(text)
        
        
        const SVG_NS = "http://www.w3.org/2000/svg"
        var svg = document.createElementNS(SVG_NS, "svg")
        var path = document.createElementNS(SVG_NS, "path")
        
        
        svg.classList.add('icon','delete-btn')
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
        svg.setAttribute("viewBox", "0 -960 960 960")
        svg.setAttribute("fill", "#88987f")
        path.setAttribute("d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z")
        
        svg.appendChild(path)
        
        list.classList.add("todo-item")
        input.type = "checkbox"
      
        let id = `todo-item-${Date.now()}`
        input.id = id
        label.htmlFor = id
        
        label.appendChild(textNode)
        list.appendChild(input)
        list.appendChild(label)
        list.appendChild(svg)
        
        toDoList.appendChild(list)

        textField.value = ''
        text = ''
            }
        else{
           return
        }
}

textField.addEventListener('input', (e)=>{
     text= e.target.value.trim();
     console.log(text)
})

textField.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        addNewList()
    }
})

addButton.addEventListener('click', ()=>{
    addNewList()

})

toDoList.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-btn')
    if (!deleteBtn) return

    const listItem = deleteBtn.closest('.todo-item')
    listItem.remove()
})




