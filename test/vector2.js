QUnit.module( "Vector2", {
    getRandomVector: function () {
        var x = Math.random() * 100000000000,
            y = Math.random() * 100000000000;
        return new Vector2(x, y);
    },
    beforeEach: function () {
        this.v1 = this.getRandomVector();
        this.x1 = this.v1.x;
        this.y1 = this.v1.y;

        this.v2 = this.getRandomVector();
        this.x2 = this.v2.x;
        this.y2 = this.v2.y;
    }
});

QUnit.test( "Creation", function(assert) {
    assert.ok( this.v1.x == this.x1, "Vector creation for vector 1: x ok" );
    assert.ok( this.v1.y == this.y1, "Vector creation for vector 1: y ok" );
    assert.ok( this.v2.x == this.x2, "Vector creation for vector 2: x ok" );
    assert.ok( this.v2.y == this.y2, "Vector creation for vector 2: y ok" );
});

QUnit.test( "Addition", function (assert) {
    this.v1.add(this.v2);

    assert.ok( this.v1.x == this.x1 + this.x2, "Vector addition for vector 1: x ok" );
    assert.ok( this.v1.y == this.y1 + this.y2, "Vector addition for vector 1: y ok" );
    assert.ok( this.v2.x == this.x2, "Vector addition for vector 2: x ok" );
    assert.ok( this.v2.y == this.y2, "Vector addition for vector 2: y ok" );
});

QUnit.test( "Copying", function (assert) {
    var delta = Math.random() * 100000000000;
    this.v2 = this.v1.copy().add(new Vector2(delta, -delta));

    assert.ok( this.v1.x == this.x1, "Vector copying for vector 1 (unchanged): x ok" );
    assert.ok( this.v1.y == this.y1, "Vector copying for vector 1 (unchanged): y ok" );
    assert.ok( this.v2.x == this.x1 + delta, "Vector copying for vector 2 (copy): x ok" );
    assert.ok( this.v2.y == this.y1 - delta, "Vector copying for vector 2 (copy): y ok" );
});