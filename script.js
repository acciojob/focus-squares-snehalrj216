//your JS code here. If required.
let squares = document.querySelectorAll(".square");

squares.forEach(square => {

    square.addEventListener("mouseenter", function() {

        squares.forEach(otherSquare => {
            if (otherSquare !== square) {
                otherSquare.style.backgroundColor = "#6F4E37"; // Coffee
            }
        });

    });

    square.addEventListener("mouseleave", function() {

        squares.forEach(sq => {
            sq.style.backgroundColor = "#E6E6FA"; // Reset to Lavender
        });

    });

});
