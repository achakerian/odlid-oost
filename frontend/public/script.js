// Fetch data from the TypeScript backend API and display it
async function fetchItems() {
    try {
      const response = await fetch('http://localhost:3000/api/items');
      const items = await response.json();
  
      const itemsList = document.getElementById('items-list');
      items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.id}: ${item.name}`;
        itemsList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }
  
  // Fetch items when the page loads
  window.onload = fetchItems;
  