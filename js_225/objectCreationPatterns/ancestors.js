// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array
// of objet names

// Cycle through, appending the proto objects to an array, stopping when Object.prototype is found

function ancestors() {
  const ancestor = Object.getPrototypeOf(this);
  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors())
  }

  return ['Object.prototype']
}
Object.prototype.ancestors = ancestors

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']