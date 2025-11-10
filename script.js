// 1. Select all elements with the class "prices"
   // 1. Create the button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// 2. Define the function that runs on click
const getSum = () => {

    // --- This is your calculation logic ---
    
    // Select all elements with the class "price"
    const priceElements = document.querySelectorAll(".price"); 

    // Initialize a variable to hold the total
    let totalPrice = 0;

    // Loop through each price element
    for (let i = 0; i < priceElements.length; i++) {
        const priceText = priceElements[i].textContent;
        totalPrice = totalPrice + Number(priceText);
    }

    // Find the table
    const table = document.querySelector("table");

    // --- Prevent adding multiple 'total' rows ---
    // Check if the total row already exists and remove it
    const existingTotal = document.getElementById("ans");
    if (existingTotal) {
        existingTotal.closest("tr").remove(); // Find the row 'tr' and remove it
    }
    // --- End of prevention logic ---

    // Create the new row (tr) and cell (td)
    const newRow = document.createElement("tr");
    const totalCell = document.createElement("td");

    // Set the new cell's text to the total price
    totalCell.textContent = totalPrice;

    // Give the cell an id 'ans' for the test
    totalCell.id = "ans";
    
    // Make the cell span both columns
    totalCell.setAttribute("colspan", "2");

    // Add the cell to the row, and the row to the table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

// 3. Add the event listener to the button
getSumBtn.addEventListener("click", getSum);