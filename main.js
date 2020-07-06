let bodyElement = document.querySelector ('body')

let coin = {
    state: 0,
    flip: function() {
        //use math.random and set it to "this.state"
        this.state = Math.floor(Math.random() * 2)
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        //use if/else statement depending on the flip and write it on the HTML, use append
        //call the flip function inside here
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           coin.flip ()
           if (this.state === 0){
               console.log('heads')
           }
           else {
               console.log('tails')
           }
    },
    toHTML: function() {
        let image = document.createElement('img');
        
        //call the flip function inside here as well
        //if/else statement set to an image, use append
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

           if (this.state === 0) {
            image = "heads"
            image.setAttribute("src", "images/pennyhead.png");
            image.setAttribute("width", "250");
            image.setAttribute("height", "250");
            image.setAttribute("alt", "heads");
            bodyElement.append(image)
           }
        return image;
    }
    //else stmt
     
};

function check(){
    coin.toString()
}
check()
//write 2 functions that roll the coin 20x


