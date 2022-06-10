const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];
class cart {
}
class cartElement {
}

class GoodsItem {
  constructor({ title, price }) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `
    <div class="goods-item">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
    </div>
  `;
  }
}
class GoodsList {
  items = [];
  fetchGoods() {
    this.items = goods;
  }
  render() {
    const goods = this.items.map(item => {
      const goodItem = new GoodsItem(item);
      return goodItem.render()}).join('');
  
    document.querySelector('.goods-list').innerHTML = goods;
  }
}
class Hamburger {
  constructor(size, stuffing) {  }
  addTopping(topping) {} // Добавить добавку 
  removeTopping(topping) {} // Убрать добавку 
  getToppings(topping) {} // Получить список добавок 
  getSize() {} // Узнать размер гамбургера 
  getStuffing() {} // Узнать начинку гамбургера 
  calculatePrice() {} // Узнать цену 
  calculateCalories() {} // Узнать калорийность 
  }

class SmallHamburger extends Hamburger{
  price = 50;
};
class BigHamburger extends Hamburger{
  price = 100;
};
const smallHamburger = new SmallHamburger();
const bigHamburger = new BigHamburger();
const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();