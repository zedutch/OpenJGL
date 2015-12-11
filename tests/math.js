function getRandomVector() {
    var x = Math.random() * 100000000000;
    var y = Math.random() * 100000000000;
    return new Vector2(x, y);
}

QUnit.test( "Vector2 Creation", function(assert) {
    var x1 = Math.random() * 100000000000;
    var y1 = Math.random() * 100000000000;
    var v1 = new Vector2(x1, y1);
    var x2 = Math.random() * 100000000000;
    var y2 = Math.random() * 100000000000;
    var v2 = new Vector2(x2, y2);
    assert.ok( v1.x == x1, "Vector creation for vector 1: x ok" );
    assert.ok( v1.y == y1, "Vector creation for vector 1: y ok" );
    assert.ok( v2.x == x2, "Vector creation for vector 2: x ok" );
    assert.ok( v2.y == y2, "Vector creation for vector 2: y ok" );
});

QUnit.test( "Vector2 Addition", function (assert) {
    var v1 = getRandomVector();
    var x1 = v1.x;
    var y1 = v1.y;
    
    var v2 = getRandomVector();
    var x2 = v2.x;
    var y2 = v2.y;
    
    v1.add(v2);
    
    assert.ok( v1.x == x1 + x2, "Vector addition for vector 1: x ok" );
    assert.ok( v1.y == y1 + y2, "Vector addition for vector 1: y ok" );
    assert.ok( v2.x == x2, "Vector addition for vector 2: x ok" );
    assert.ok( v2.y == y2, "Vector addition for vector 2: y ok" );
});

QUnit.test( "Vector2 Copying", function (assert) {
    var v1 = getRandomVector();
    x1 = v1.x;
    y1 = v1.y;
    var delta = Math.random() * 100000000000;
    var v2 = v1.copy().add(new Vector2(delta, -delta));
    
    assert.ok( v1.x == x1, "Vector copying for vector 1 (unchanged): x ok" );
    assert.ok( v1.y == y1, "Vector copying for vector 1 (unchanged): y ok" );
    assert.ok( v2.x == x1 + delta, "Vector copying for vector 2 (copy): x ok" );
    assert.ok( v2.y == y1 - delta, "Vector copying for vector 2 (copy): y ok" );
});