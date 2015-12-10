var size = new Vector2(800, 450);

ojglInit("mainGameCanvas", new PlayState(new Vector2(0, 0)), size);

setTimeout(function () {
    ojglChangeState(new PlayState(new Vector2(100, 100)));
}, 2000)