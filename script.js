document.getElementById('houseForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const price = document.getElementById('price').value;
    const phone = document.getElementById('phone').value;

    // Price validation
    if (price <= 0) {
        alert('Please enter a valid price greater than 0.');
        return;
    }
if(houseForm.empty){alert('Please fill the Form!');}
    // Phone number validation
    if (!/^\d{10}$/.test(phone)) {
        alert('Phone number must be 10 digits.');
        return;
    }

    // If all validations pass
    alert('House added successfully!');
    this.reset(); // Clear form
});
