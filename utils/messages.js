import colors from 'colors'
import readline from 'readline'
export const showMenu = () => {
 return new Promise (resolve => {

   
    console.log(`${'1.'.green} Create a Task`)
    console.log(`${'2.'.green} List All Tasks`)
    console.log(`${'3.'.green} List Completed Tasks`)
    console.log(`${'4.'.green} List Pending Task`)
    console.log(`${'5.'.green} Complete Task(s)`)
    console.log(`${'6.'.green} Delete a Task`)
    console.log(`${'0.'.green} Exit`)

const readLine = readline.createInterface({
    input: process.stdin,
   output: process.stdout
}) 

readLine.question('Chpose an option: ', (opt) => {
    readLine.close();
    resolve(opt)
})

})
 
 


}

export const pause = () => {

    return new Promise (resolve => {

        const readLine = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
     
        readLine.question(`Press ${ 'Enter'.cyan } to continue`,(opt) => {
           readLine.close()
           resolve()
        })

    })
  
    }



