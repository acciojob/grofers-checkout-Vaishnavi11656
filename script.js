// 1. Select all elements with the class "prices"
    const priceElements = document.querySelectorAll(".prices");

    // 2. Initialize a variable to hold the total
    let totalPrice = 0;

    // 3. Loop through each price element
    for (let i = 0; i < priceElements.length; i++) {
        // 4. Get the text content of the element (e.g., "120")
        const priceText = priceElements[i].textContent;
        
        // 5. Convert the text to a number and add it to the total
        totalPrice = totalPrice + Number(priceText);
    }

    // 6. Find the table to add the new row to
    // (We assume there is only one table on the page)
    const table = document.querySelector("table");

    // 7. Create the new row (tr) and cell (td)
    const newRow = document.createElement("tr");
    const totalCell = document.createElement("td");

    // 8. Set the new cell's text to the total price
    totalCell.textContent = totalPrice;

    // 9. Give the cell an id 'ans' so it can be found by tests
    totalCell.id = "ans";
    
    // 10. Since the table has 2 columns (item & price),
    // we make this new cell span both columns.
    totalCell.setAttribute("colspan", "2");

    // 11. Add the cell to the row, and the row to the table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);