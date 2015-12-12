function PlayState(playerPos) {
    "use strict";
    
    var self = this;
    var charSprite = new Sprite("img/char_S0.png", function() {
        var charColl = new CollisionBody(charSprite.size);
        self.char = new Entity(playerPos, charColl, charSprite);
    });
    
    this.lastClick = 0;
}

// Subclass the GameState class.
PlayState.prototype = GameState.prototype;

PlayState.prototype.update = function (deltaTime) {
    "use strict";
    
    if (ojglMouse.clicked && ojglMouse.clicked.time > this.lastClick) {
        this.lastClick = ojglMouse.clicked.time;
        var p = new Vector2(ojglMouse.position.x, ojglMouse.position.y);
        if (this.char.containsPoint(p)) {
            console.log("Entity clicked!");
        }
    }
}

PlayState.prototype.render = function (screen) {
    "use strict";

    this.char.render(screen);
    
    screen.renderText("Hello World!", new Vector2(5, 20));
    screen.renderText("This is OpenJGL Speaking.", new Vector2(5, 40), 16, "#55F", "oblique small-caps bold IndieFlower Lobster Serif");
}

PlayState.prototype.willAppear = function () {
    "use strict";

    Log.info("A Play State will soon appear.", this);
}

PlayState.prototype.willDisappear = function () {
    "use strict";

    Log.info("A Play State will soon disappear.", this);
}

PlayState.prototype.toString = function () {
    "use strict";
    return "PlayState";
}