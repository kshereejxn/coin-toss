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
        return image;
    }
};
//write 2 functions that roll the coin 20x
