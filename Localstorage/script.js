document.addEventListener("DOMContentLoaded", function() {
    displayData();
});

function saveData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    
    let user = {
        name: name,
        email: email,
        age: age
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    
    displayData();
}

function displayData() {
    let usersTable = document.getElementById("usersTable");
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Clear previous table rows
    usersTable.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
        </tr>
    `;
    
    users.forEach(user => {
        let row = usersTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        
        cell1.innerHTML = user.name;
        cell2.innerHTML = user.email;
        cell3.innerHTML = user.age;
    });
}
