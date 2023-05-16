

const storedSelectedCars = localStorage.getItem('selectedCars');

if (storedSelectedCars) {
    let selectedCars = JSON.parse(storedSelectedCars);
    console.log(selectedCars);
    selectedCars.forEach((car, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        listItem.innerHTML = `
            ${car.model}
            <span class="badge badge-danger btn badge-pill delete" data-index="${index}">Remove</span>
        `;
        const deleteButton = listItem.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            selectedCars.splice(index, 1); // Remove the selected car from the array
            localStorage.setItem('selectedCars', JSON.stringify(selectedCars)); // Update the local storage
            listItem.remove(); // Remove the list item from the HTML
        });
        const list = document.querySelector('#selectedList');
        list.appendChild(listItem);
    });

    const deleteAllButton = document.createElement('button');
    deleteAllButton.classList.add('btn', 'btn-danger', 'mt-2');
    deleteAllButton.textContent = 'Delete All Selected Cars';
    deleteAllButton.addEventListener('click', () => {
        const confirmDelete = confirm("Are you sure you want to remove all selected cars?");
        if (confirmDelete) {
            selectedCars = []; // Clear the selectedCars array
            localStorage.removeItem('selectedCars'); // Remove the 'selectedCars' key from local storage
            const list = document.querySelector('#selectedList');
            list.innerHTML = ''; // Clear the selected car list in the HTML
            alert("Your booking list is now empty");
            window.location.href = "../index.html"; // Redirect to the home page
        }
    });

    const sendButton = document.createElement('button');
    sendButton.classList.add('btn', 'btn-success', 'mt-2');
    sendButton.textContent = 'Send';
    sendButton.addEventListener('click', () => {
        if (selectedCars.length > 0) {
            alert("Thank you for your order");
            localStorage.removeItem('selectedCars'); // Remove the 'selectedCars' key from local storage
            const list = document.querySelector('#selectedList');
            list.innerHTML = ''; // Clear the selected car list in the HTML
        } else {
            alert("Your order cannot be processed as you have not reserved any cars");
        }
    });

    const deleteAllBtn = document.querySelector('.c');
    deleteAllBtn.appendChild(deleteAllButton);
    const sendBtn = document.querySelector('.send-btn')
    sendBtn.appendChild(sendButton);
}
