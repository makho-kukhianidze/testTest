const data = require('./data.json')


const fetchData = () => {
    // Fetch the data from an API or perform any necessary operations
    return data; // For simplicity, we'll use the imported data directly
  };


  // 3. Create datatable body
const createDataTableBody = (data) => {
    const tableBody = document.createElement('tbody');
    
    // Loop through the data and create table rows
    data.forEach((item) => {
      const row = tableBody.insertRow();
      
      // Assuming your data has two properties: 'name' and 'age'
      const nameCell = row.insertCell();
      nameCell.textContent = item.name;
      
      const ageCell = row.insertCell();
      ageCell.textContent = item.age;
    });
    
    return tableBody;
  };



  // 4. Insert data into datatable body
const insertDataIntoTable = () => {
    const data = fetchData();
    const tableBody = createDataTableBody(data);
    
    const table = document.getElementById('myTable'); // Assuming you have an existing table with the id 'myTable'
    table.appendChild(tableBody);
  };
  
  // 5. Create tfooter only if defined in data.json
  const createTableFooter = () => {
    const data = fetchData();
    
    if (data.footer) {
      const table = document.getElementById('myTable');
      const tfoot = document.createElement('tfoot');
      const row = tfoot.insertRow();
      const cell = row.insertCell();
      cell.textContent = data.footer;
      
      table.appendChild(tfoot);
    }
  };


  // Call the functions to insert the data and create the table footer
insertDataIntoTable();
createTableFooter();
