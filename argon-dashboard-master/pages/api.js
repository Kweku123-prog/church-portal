// Function to fetch data from the API
async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/getDetails'); // Replace 'https://api.example.com/data' with your API endpoint
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  // Function to populate table with fetched data
  async function populateTable() {
    const tableBody = document.querySelector('tbody');
    const data = await fetchData();
    
    // Clear existing table rows
    tableBody.innerHTML = '';
    
    // Iterate through the fetched data and create table rows
    data.forEach(item => {
      const row = document.createElement('tr');
      
      // Populate table cells
      row.innerHTML = `
        <td>
          <div class="d-flex px-2 py-1">
            <div>
              <img src="${item.image}" class="avatar avatar-sm me-3" alt="${item.name}">
            </div>
            <div class="d-flex flex-column justify-content-center">
              <h6 class="mb-0 text-sm">${item.name}</h6>
              <p class="text-xs text-secondary mb-0">${item.email}</p>
            </div>
          </div>
        </td>
        <td>
          <p class="text-xs font-weight-bold mb-0">${item.function}</p>
          <p class="text-xs text-secondary mb-0">${item.department}</p>
        </td>
        <td class="align-middle text-center text-sm">
          <span class="badge badge-sm bg-gradient-${item.status === 'Online' ? 'success' : 'secondary'}">${item.status}</span>
        </td>
        <td class="align-middle text-center">
          <span class="text-secondary text-xs font-weight-bold">${item.employed}</span>
        </td>
        <td class="align-middle">
          <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
            Edit
          </a>
        </td>
      `;
      
      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }
  
  // Call the populateTable function to initially populate the table
  populateTable();
  