// script.js
const personData = {
    "name": "John Doe",
    "age": 30,
    "isEmployed": true,
    "contact": {
        "email": "john@example.com",
        "phone": "555-1234"
    },
    "hobbies": ["reading", "swimming", "coding"],
    "address": {
        "street": "123 Main St",
        "city": "Boston",
        "state": "MA",
        "zipCode": "02108"
    }
};

// Populate the HTML with data
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('personName').textContent = personData.name;
    document.getElementById('personAge').textContent = personData.age;
    document.getElementById('employmentStatus').textContent = personData.isEmployed ? 'Employed' : 'Unemployed';
    document.getElementById('email').textContent = personData.contact.email;
    document.getElementById('phone').textContent = personData.contact.phone;
    document.getElementById('street').textContent = personData.address.street;
    document.getElementById('city').textContent = personData.address.city;
    document.getElementById('state').textContent = personData.address.state;
    document.getElementById('zipCode').textContent = personData.address.zipCode;

    const hobbiesList = document.getElementById('hobbiesList');
    personData.hobbies.forEach(hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });
});
