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

const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>$(title)</h3><p>$(price)</p></div>`;
  };

const renderGoodsList = (list) => {
  let goodsList = list.map(items => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
  }

  renderGoodsList;

  
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