const display = document.querySelector('#display h1')
const btns = Array.from(document.getElementsByClassName('btns')[0].children)
const specialBtns = Array.from(document.getElementsByClassName('special-btns')[0].children)

let a = '0'
let b = null
let operation = null
let resetDisplay = false


const updateDisplay=()=>{
    display.textContent = a

}

const setOperator= (op)=>{
    if(operation!==null){
        calculate()
    }
    operation = op
    b = a
    resetDisplay = true
}

const calculate = ()=>{
    if (operation==null || resetDisplay) return

    let x = parseFloat(a)
    let y = parseFloat(b)
    let result = 0
    
    switch(operation){
        case '+':
            result = y+x
            break
        case '-':
            result= y-x
            break
        case 'x':
            result= y*x
            break
        case '/':
            result= y/x
            break     
        default:
            return  
    }
    a = result
    updateDisplay()
    resetDisplay = true 
    operation = null
}

btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        if (resetDisplay){

        a = btn.textContent
        resetDisplay = false
        }
        else{
            a = a==='0'? btn.textContent: a+btn.textContent
        }

      updateDisplay()  
    })    
    
});

specialBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        
        if (btn.textContent === 'C'){
            a = '0'
            b = null
            operation = null
            resetDisplay = false
            updateDisplay()
        }
        else if (btn.textContent === '='){
            calculate()
        }
        else if (btn.textContent === '.'){
            if(resetDisplay){
                a = '0.'
                resetDisplay= false
            }
            if(!a.includes('.')){
                a = a+'.'
            }
        }
        else if (btn.textContent === '←'){
            a = a.slice(0,-1)
            updateDisplay
        }        
        else{
            setOperator(btn.textContent)
        }
        updateDisplay()
    })    
});

