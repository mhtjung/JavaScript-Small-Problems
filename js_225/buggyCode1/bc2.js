const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    let newPrice = this.price - discount;

    return newPrice;
  },
};
let p = function(value) {console.log(value)}
p(item.discount(20)); // 40
p(item.discount(50)); // 25
p(item.discount(25)); // 37.5