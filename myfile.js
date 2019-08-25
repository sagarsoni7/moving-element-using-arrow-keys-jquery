$(document).ready(function () {
    let spaceship = $("#spaceship");
    spaceship.css({
        "position": "absolute",
        "left": 10,
        "top": 100
    });

    let isMovingRight = false;
    let isMovingLeft = false;
    let isMovingUp = false;
    let isMovingDown = false;

    $(document).on("keydown", function (e) {
        let kc = e.keyCode;
        if (kc == 39) {
            isMovingRight = true;

        };
    });

    $(document).on("keyup", function (e) {
        let kc = e.keyCode;
        if (kc == 39) {
            isMovingRight = false;

        };
    });
    
    $(document).on("keydown", function (e) {
        let kc = e.keyCode;
        if (kc == 37) {
            isMovingLeft = true;

        };
    });

    $(document).on("keyup", function (e) {
        let kc = e.keyCode;
        if (kc == 37) {
            isMovingLeft = false;

        };
    });
    
    $(document).on("keydown", function (e) {
        let kc = e.keyCode;
        if (kc == 38) {
            isMovingUp = true;

        };
    });

    $(document).on("keyup", function (e) {
        let kc = e.keyCode;
        if (kc == 38) {
            isMovingUp = false;

        };
    });
    
    $(document).on("keydown", function (e) {
        let kc = e.keyCode;
        if (kc == 40) {
            isMovingDown = true;

        };
    });

    $(document).on("keyup", function (e) {
        let kc = e.keyCode;
        if (kc == 40) {
            isMovingDown = false;

        };
    });

    function move() {
        if (isMovingRight) {
            spaceship.css({
                "left": (spaceship.position().left + 5)
            });
        };
        if (isMovingLeft) {
            spaceship.css({
                "left": (spaceship.position().left - 5)
            });
        };
        if (isMovingUp) {
            spaceship.css({
                "top": (spaceship.position().top - 5)
            });
        };
        if (isMovingDown) {
            spaceship.css({
                "top": (spaceship.position().top + 5)
            });
        };
    }

    setInterval(move, 10);

});
