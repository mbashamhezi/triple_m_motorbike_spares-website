document.addEventListener('DOMContentLoaded', () => {
    const typeButtons = document.querySelectorAll('.type-buttons button');
    const categoryButtons = document.querySelectorAll('.parts-buttons button');
    let selectedType = 'all';
    let selectedCategory = null;

    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedType = button.getAttribute('data-type');
            filterData();
        });
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedCategory = button.getAttribute('data-category');
            filterData();
        });
    });

    function filterData() {
        const dataElements = document.querySelectorAll('#data-container .product-card');
        dataElements.forEach(element => {
            element.style.display = 'none';
            const type = element.getAttribute('data-type');
            const category = element.getAttribute('data-category');
            if ((selectedType === 'all' || type === selectedType) && (!selectedCategory || category === selectedCategory)) {
                element.style.display = 'block';
            }
        });
    }

    // Initial filter display
    filterData();
});