function PlayState(playerPos) {
    "use strict";
    
    var charColl = new CollisionBody(new Vector2(10, 10));
    var charSprite = new Sprite("img/char_S0.png");
    this.char = new Entity(playerPos, charColl, charSprite);
}

// Subclass the GameState class.
PlayState.prototype = GameState.prototype;

PlayState.prototype.update = function (deltaTime) {
    "use strict";
}

PlayState.prototype.render = function (screen) {
    "use strict";

    this.char.render(screen);
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