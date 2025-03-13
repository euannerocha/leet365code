//SOLUTION

//Create a simple TypeScript program that reads the quantity of products in stock and displays the total value in money 

type Product = {
    name: string;
    price: number;
    quantity: number;
  };
  
  function calculateTotalValue(products: Product[]): number {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  const stock: Product[] = [
    { name: "Pen", price: 2.5, quantity: 10 },
    { name: "Notebook", price: 15, quantity: 5 },
    { name: "Pencil", price: 1.2, quantity: 20 }
  ];
  
  const totalValue = calculateTotalValue(stock);
  console.log(`Total value is: R$ ${totalValue.toFixed(2)}`);
  

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.