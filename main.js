function countCharacters (string){
    const charCounts = {}
    const characters = Array.from (string)
    for (let index = 0; index < characters.length; index +=1){
        const char = characters[index]

        if (charCounts[char] === undefined){
            charCounts[char] = 1
        }
        else{
            charCounts[char] += 1
        
        }
        }
    return charCounts
    }



const charCountsObject = countCharacters('doggo')
console.log(charCountsObject)
console.log(charCountsObject['d'] ===1)
console.log(charCountsObject['o'] ===2)
console.log(charCountsObject.g===2)
