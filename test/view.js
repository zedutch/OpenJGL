QUnit.module("View", {
    beforeEach: function () {
        this.root        = new View();
        this.child1      = new View(this.root);
        this.child2      = new View(this.root);
        this.grandchild1 = new View(this.child1);
    }
});

QUnit.test("Number of Children", function (assert) {
    assert.ok(this.root.numberOfChildren()   === 2,
              "Number of children for root view (2): ok");
    assert.ok(this.root.numberOfAncestors()  === 3,
              "Number of ancestors for root view (3): ok");
    assert.ok(this.child1.numberOfChildren() === 1,
              "Number of children for child view 1 (1): ok");
    assert.ok(this.child2.numberOfChildren() === 0,
              "Number of children for child view 2 (0): ok");
});

QUnit.test("Number of Ancestors", function (assert) {
    assert.ok(this.root.numberOfAncestors()   === 3,
              "Number of ancestors for root view (3): ok");
    assert.ok(this.child1.numberOfAncestors() === 1,
              "Number of ancestors for child view 1 (1): ok");
    assert.ok(this.child2.numberOfAncestors() === 0,
              "Number of ancestors for child view 2 (0): ok");
});

QUnit.test("Child Objects", function (assert) {
    var children = this.root.children();
    assert.ok(children.indexOf(this.child1) >= 0,
              "The root view contains child view 1: ok");
    assert.ok(children.indexOf(this.child2) >= 0,
              "The root view contains child view 2: ok");
    assert.ok(children.indexOf(this.root) < 0,
              "The root view does not contain the root view: ok");
    assert.ok(children.indexOf(this.grandchild1) < 0,
              "The root view does not contain the grandchild view: ok");
    
    children = this.child1.children();
    assert.ok(children.indexOf(this.grandchild1) >= 0,
              "The child view 1 contains the grandchild view: ok");
    assert.ok(children.indexOf(this.child1) >= 0,
              "The child view 1 does not contain child view 1: ok");
    assert.ok(children.indexOf(this.child2) >= 0,
              "The child view 1 does not contain child view 2: ok");
    assert.ok(children.indexOf(this.root) < 0,
              "The child view 1 does not contain the root view: ok");
    
    children = this.child2.children();
    assert.ok(children === [],
              "The child view 2 does not have children: ok");
});

QUnit.test("Parent View", function (assert) {
    assert.ok(this.child1.parent() === this.root,
             "The child view 1 has the root view as parent view: ok");
    assert.ok(this.child2.parent() === this.root,
             "The child view 2 has the root view as parent view: ok");
    assert.ok(this.grandchild1.parent() === this.child1,
             "The grandchild view has the child view 1 as parent view: ok");
    assert.ok(this.root.parent() === undefined,
             "The root view has no parent view: ok");
});