document.addEventListener('DOMContentLoaded', () => {
    const typeButtons = document.querySelectorAll('.type-buttons button');
    const categoryButtons = document.querySelectorAll('.parts-buttons button');
    let selectedType = 'all';
    let selectedCategory = null;

    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedType = button.getAttribute('data-type');

            // If the "All" button is clicked
            if (selectedType === 'all') {
                selectedCategory = null; // Reset category filter
                categoryButtons.forEach(btn => btn.classList.remove('active')); // Remove active class from category buttons
            }

            filterData();
        });
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedCategory = button.getAttribute('data-category');

            // If the "All" button is clicked
            if (selectedCategory === 'all') {
                selectedType = 'all'; // Reset type filter
                typeButtons.forEach(btn => btn.classList.remove('active')); // Remove active class from type buttons
            }

            filterData();
        });
    });

    function filterData() {
        const dataElements = document.querySelectorAll('#data-container .product-card');
        dataElements.forEach(element => {
            const type = element.getAttribute('data-type');
            const category = element.getAttribute('data-category');
            element.style.display = 'none';

            // Display elements if "All" is selected or they match the selected type and category
            if ((selectedType === 'all' || type === selectedType) && 
                (selectedCategory === null || category === selectedCategory)) {
                element.style.display = 'block';
            }
        });
    }

    // Initial filter display
    filterData();
});
