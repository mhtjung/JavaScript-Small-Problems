const p = (item => console.log(item))

class Item {
  constructor(itemName, itemCategory, itemQuantity) {
    if (this.validateInput(itemName, itemCategory, itemQuantity)) {
      this.name = itemName;
      this.category = itemCategory;
      this.quantity = itemQuantity;
      this.sku = this.generateSKU();
    } else {
      return { 
        notValid: true, 
        error: 'INVALID INPUT', 
        message: `Failed to create item: ${itemName} category: ${itemCategory} quantity ${itemQuantity}`}
    }
  }

  generateSKU() {
    let splitName = this.name.split(' ')
    if (splitName.length > 1 && splitName[0].length < 3) {
      return splitName[0] + splitName[1][0] + this.category.slice(0,2)
    }
    return (this.name.slice(0, 3) + this.category.slice(0,2)).toUpperCase()
  }

  validName(name) {
    if (name.trim().length < 5) {
      return false
    }
    return true
  }

  validCategory(category) {
    let numOfWords = category.trim().split(' ').length
    let length = category.length
    return numOfWords === 1 && length >= 5
  }

  validQuantity(quantity) {
    return quantity !== undefined
  }

  validateInput(itemName, itemCategory, itemQuantity) {
    return this.validName(itemName) && this.validCategory(itemCategory) && this.validQuantity(itemQuantity)
  }
}

const ItemManager = (function() {
  return {
    items: [],
    create(itemName, itemCategory, itemQuantity) {
      let newItem = new Item(itemName, itemCategory, itemQuantity)
      if (newItem.hasOwnProperty('error')) {
        // console.log(newItem.error, newItem.message)
        return false
      }
      this.items.push(newItem)
    },
    update(sku, attributes) {
      let item = this.getItemBySKU(sku)
      for (let key in attributes) {
        item[key] = attributes[key]
      }
    },
    delete(sku) {
      let index = this.items.indexOf(this.getItemBySKU(sku))
      this.items.splice(index, 1)
    },
    getItemBySKU(sku) {
      let item = this.items.find( item => item.sku === sku.toUpperCase())
      return item !== undefined ? item : { error: 'Invalid SKU', message: `Could not find an item with SKU ${sku}` };
    },
    inStock() {
      return this.items.filter(item => item.quantity > 0);
    },
    itemsInCategory(category) {
      return this.items.filter(item => item.category === category);
    },
  };
})();

const ReportManager = (function() {
  return {
    init(itemManager) {
      this.items = itemManager
    },
    createReporter(sku) {
      let self = this
      return {
        itemInfo() {
          let item = self.items.getItemBySKU(sku)
          for (let key in item) {
            console.log(`${key}: ${item[key]}`)
          }
        }
      }
    },
    reportInStock() {
      let arr = this.items.inStock();
      console.log(arr.map(item => item.name).join(', '));
    }
  }
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

p(ItemManager.items.length === 4); // returns list with the 4 valid items
ReportManager.init(ItemManager);
ReportManager.reportInStock(); // logs soccer ball,football,kitchen pot
ItemManager.update('SOCSP', { quantity: 0 });
// p(ItemManager.inStock()); // returns list with the item objects for football and kitchen pot
ReportManager.reportInStock(); // logs football,kitchen pot
// p(ItemManager.itemsInCategory('sports')); // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
p(ItemManager.items.length === 3);// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10