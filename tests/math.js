QUnit.test( "Vector2 tests", function( assert ) {
    // Test vector creation
    var x1 = Math.random() * 10000;
    var y1 = Math.random() * 10000;
    var v1 = new Vector2(x1, y1);
    var x2 = Math.random() * 10000;
    var y2 = Math.random() * 10000;
    var v2 = new Vector2(x2, y2);
    assert.ok( v1.x == x1, "Vector creation for vector 1: x ok" );
    assert.ok( v1.y == y1, "Vector creation for vector 1: y ok" );
    assert.ok( v2.x == x2, "Vector creation for vector 2: x ok" );
    assert.ok( v2.y == y2, "Vector creation for vector 2: y ok" );
    
    // Test vector addition
    v1.add(v2);
    
    assert.ok( v1.x == x1 + x2, "Vector addition for vector 1: x ok" );
    assert.ok( v1.y == y1 + y2, "Vector addition for vector 1: y ok" );
    assert.ok( v2.x == x2, "Vector addition for vector 2: x ok" );
    assert.ok( v2.y == y2, "Vector addition for vector 2: y ok" );
});