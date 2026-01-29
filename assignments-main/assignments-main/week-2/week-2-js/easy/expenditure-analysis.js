/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let TotalsByCAtegory={};
  for(let transac of transactions){
    if(!TotalsByCAtegory[transac.category]){
      TotalsByCAtegory[transac.category] = 0;
    }
    TotalsByCAtegory[transac.category]+=transac.price;

  }
 return Object.keys(TotalsByCAtegory).map(category => {
  return { category, totalSpent: TotalsByCAtegory[category] };
});

}

module.exports = calculateTotalSpentByCategory;
