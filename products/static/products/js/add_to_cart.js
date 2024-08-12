document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0; // Initialize cart count

    // Select all "add-to-cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++; // Increment cart count
            updateCartBadge();
        });
    });

    function updateCartBadge() {
        // Find the cart badge element and update its text
        const cartBadge = document.querySelector('.cart-badge');
        if (cartBadge) {
            cartBadge.textContent = cartCount;
        } else {
            console.log('Cart badge not found.');
        }
    }
});
