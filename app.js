import colors from 'colors'
import  {inquireMenu, pause}  from './utils/inquirer.js'
console.clear()

const main = async() => {
    
    let opt = ''
    do {
       opt = await inquireMenu() 
   
      opt !== '0' && await pause()
       
     
    } while (opt !== '0')
    
}

main()