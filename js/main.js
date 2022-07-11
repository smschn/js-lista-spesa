// create a list (array) for the shopping list.
const shoppingList = [
    'meat',
    'pasta',
    'rice',
    'bread',
    'honey',
    'fish',
    'milk',
    'chocolate',
    'yogurt',
    'apple'
]

// create a while loop that shows in console every single shopping list item.
i=0;
while (i<shoppingList.length) {
    console.log(`At list number ${i} we find: ${shoppingList[i]}`); // could be written as: ('At list number ' + i + ' we find: ' + shoppingList[i])
    i++;
}