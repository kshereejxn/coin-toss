let bodyElement = document.querySelector ('body')

let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2)
        console.log (this.state)

        //use math.random and set it to "this.state"
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        coin.flip ()
           if (this.state === 0){ 
            document.body.append('Heads')
            console.log('heads')


           }
           else {
            document.body.append('Tails')
             console.log('tails')
           } 
           
        //use if/else statement depending on the flip and write it on the HTML, use append
        //call the flip function inside here
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        coin.flip ()
           if (this.state === 0){ 
        
        let headsImg = document.createElement('img')
        headsImg.src = 'https://www.marshu.com/articles/images-website/articles/presidents-on-coins/penny-cent-coin-head.jpg'
        headsImg.className = 'img'
        bodyElement.append(headsImg)
        return headsImg
            
           } 
           else {
        let tailsImg = document.createElement('img')
        tailsImg.src = 'http://clipart-library.com/img1/985331.jpg'
        tailsImg.className = 'img'
        bodyElement.append(tailsImg) 
        return tailsImg

           } 

        
        
        //call the flip function inside here as well
        //if/else statement set to an image, use append
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

    }
     
}

function check(){
    coin.toString()
}
check()
//write 2 functions that roll the coin 20x


