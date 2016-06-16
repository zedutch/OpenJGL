var ojglMouse = {
    down: 0,
    downR: 0,
    up: 0,
    upR: 0,
    clicked: undefined,
    draggedL: undefined,
    draggedR: undefined,
    currentDragL: undefined,
    currentDragR: undefined,
    startL: undefined,
    startR: undefined,
    cursor: "normal",
    position: new Vector2(),
    ERROR: 5,
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    click: function ojglMouseClick(e) {
        "use strict";
        var d = new Date();
        ojglMouse.clicked = {
            x: e.clientX,
            y: e.clientY,
            time: d.getTime()
        };
    },
    doubleClick: function ojglMouseDoubleClick(e) {
        "use strict";
    },
    buttonDown: function ojglMouseButtonDown(e) {
        "use strict";
        var d = new Date();
        if (e.button === ojglMouse.MIDDLE) {
            Log.log("Clicked at " + e.clientX + ", " + e.clientY, this);
        }
        if (e.button === ojglMouse.LEFT) {
            ojglMouse.down = d.getTime();
            ojglMouse.up = 0;
            ojglMouse.startL = {
                x: e.clientX,
                y: e.clientY
            };
        } else {
            ojglMouse.cursor = "allScroll";
            ojglMouse.downR = d.getTime();
            ojglMouse.upR = 0;
            ojglMouse.startR = {
                x: e.clientX,
                y: e.clientY
            };
        }
        e.preventDefault();
        return false;
    },
    buttonUp: function ojglMouseButtonUp(e) {
        "use strict";
        var d = new Date();
        if (e.button === ojglMouse.LEFT) {
            ojglMouse.up = d.getTime();
            ojglMouse.down = 0;
            if (ojglMouse.currentDragL === undefined) {
                // Assume the ojglMouse didn't move
                ojglMouse.click(e);
            } else {
                // console.log("ojglMouseL moved from " + ojglMouse.startL.x + ", " + ojglMouse.startL.y + " to " + e.clientX + ", " + e.clientY);
                ojglMouse.draggedL = {
                    from: {
                        x: ojglMouse.startL.x,
                        y: ojglMouse.startL.y
                    },
                    to: {
                        x: e.clientX,
                        y: e.clientY
                    },
                    time: d.getTime()
                };
                ojglMouse.currentDragL = undefined;
                ojglMouse.startL = undefined;
            }
        } else {
            ojglMouse.cursor = "normal";
            ojglMouse.upR = d.getTime();
            ojglMouse.downR = 0;
            if (ojglMouse.currentDragR === undefined) {
                // Do nothing on right click
            } else {
                // console.log("ojglMouseR moved from " + ojglMouse.startR.x + ", " + ojglMouse.startR.y + " to " + e.clientX + ", " + e.clientY);
                ojglMouse.draggedR = {
                    from: {
                        x: ojglMouse.startR.x,
                        y: ojglMouse.startR.y
                    },
                    to: {
                        x: e.clientX,
                        y: e.clientY
                    },
                    time: d.getTime()
                };
                ojglMouse.currentDragR = undefined;
                ojglMouse.startR = undefined;
            }
        }
        e.preventDefault();
        return false;
    },
    moved: function ojglMouseMoved(e) {
        "use strict";

        ojglMouse.position.x = e.clientX;
        ojglMouse.position.y = e.clientY;

        if (ojglMouse.down && ((e.clientX < ojglMouse.startL.x - ojglMouse.ERROR / 2 || e.clientX > ojglMouse.startL.x + ojglMouse.ERROR / 2) || (e.clientY < ojglMouse.startL.y - ojglMouse.ERROR / 2 || e.clientY > ojglMouse.startL.y + ojglMouse.ERROR / 2))) {
            ojglMouse.currentDragL = {
                from: {
                    x: ojglMouse.startL.x,
                    y: ojglMouse.startL.y
                },
                to: {
                    x: e.clientX,
                    y: e.clientY
                }
            };
        } else if (ojglMouse.downR && ((e.clientX < ojglMouse.startR.x - ojglMouse.ERROR / 2 || e.clientX > ojglMouse.startR.x + ojglMouse.ERROR / 2) || (e.clientY < ojglMouse.startR.y - ojglMouse.ERROR / 2 || e.clientY > ojglMouse.startR.y + ojglMouse.ERROR / 2))) {
            ojglMouse.currentDragR = {
                from: {
                    x: ojglMouse.startR.x,
                    y: ojglMouse.startR.y
                },
                to: {
                    x: e.clientX,
                    y: e.clientY
                }
            };
        }
    },
    setCustomCursor: function(image) {
        ojglMouse._customCursor = new Sprite(image);
    },
    init: function ojglMouseInit(screen) {
        "use strict";

        screen.addEventListener("dblclick", ojglMouse.doubleClick);
        screen.addEventListener("mousedown", ojglMouse.buttonDown);
        screen.addEventListener("mouseup", ojglMouse.buttonUp);
        screen.addEventListener("mousemove", ojglMouse.moved);

        screen.setOnContextMenu(function (e) {
            e.preventDefault();
            return false;
        });
    },
    render: function ojglMouseRender(screen) {
        "use strict";

        if (ojglMouse._customCursor) {
            screen.hideSystemCursor();
            ojglMouse._customCursor.render(screen, ojglMouse.position);
        }
    }
};