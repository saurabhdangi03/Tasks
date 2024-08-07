let editIndex = null;

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    // Reset message element
    messageElement.style.color = 'red';

    // Validate full name
    if (fullName === '') {
        messageElement.textContent = 'Full Name is required.';
        return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        messageElement.textContent = 'Please enter a valid Email ID.';
        return;
    }

    // Validate mobile number
    if (!mobileRegex.test(mobile)) {
        messageElement.textContent = 'Please enter a valid 10-digit Mobile No.';
        return;
    }

    // Validate username
    if (username === '') {
        messageElement.textContent = 'Username is required.';
        return;
    }

    // Validate password
    if (password.length < 8) {
        messageElement.textContent = 'Password must be at least 8 characters long.';
        return;
    }
    if (!uppercaseRegex.test(password)) {
        messageElement.textContent = 'Password must contain at least one uppercase letter.';
        return;
    }
    if (!lowercaseRegex.test(password)) {
        messageElement.textContent = 'Password must contain at least one lowercase letter.';
        return;
    }
    if (!digitRegex.test(password)) {
        messageElement.textContent = 'Password must contain at least one digit.';
        return;
    }
    if (!specialCharRegex.test(password)) {
        messageElement.textContent = 'Password must contain at least one special character.';
        return;
    }

    const newUserData = {
        fullName: fullName,
        email: email,
        mobile: mobile,
        username: username,
        password: password
    };

    let usersData = JSON.parse(localStorage.getItem('usersData')) || [];

    usersData.push(newUserData);

    localStorage.setItem('usersData', JSON.stringify(usersData));

    messageElement.textContent = 'User registered successfully';
    messageElement.style.color = 'green';

    displayUserData(usersData);

    setTimeout(function() {
        messageElement.textContent = '';
    }, 3000);

    document.getElementById('registrationForm').reset();
});

function displayUserData(usersData) {
    const userDataTableBody = document.querySelector('#userDataTable tbody');
    userDataTableBody.innerHTML = usersData.map((userData, index) => `
        <tr data-index="${index}">
            <td><span class="view">${userData.fullName}</span><input class="edit username-input" type="text" value="${userData.fullName}" style="display:none;"></td>
            <td><span class="view">${userData.email}</span><input class="edit username-input" type="email" value="${userData.email}" style="display:none;"></td>
            <td><span class="view">${userData.mobile}</span><input class="edit username-input" type="tel" value="${userData.mobile}" style="display:none;"></td>
            <td><span class="view">${userData.username}</span><input class="edit username-input" type="username" value="${userData.username}" style="display:none;"></td>
            <td><span class="view">${userData.password}</span><input class="edit username-input" type="password" value="${userData.password}" style="display:none;"></td>
            <td class="action-buttons">
                <button class="view" onclick="editUser(${index})">Edit</button>
                <button class="edit" onclick="saveUser(${index})" style="display:none;">Save</button>
                <button class="edit" onclick="cancelEdit(${index})" style="display:none;">Cancel</button>
                <button class="view" onclick="deleteUser(${index})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function editUser(index) {
    const row = document.querySelector(`tr[data-index="${index}"]`);
    row.querySelectorAll('.view').forEach(el => el.style.display = 'none');
    row.querySelectorAll('.edit').forEach(el => el.style.display = 'inline');
}

function saveUser(index) {
    const row = document.querySelector(`tr[data-index="${index}"]`);
    const fullName = row.querySelector('input[type="text"]').value;
    const email = row.querySelector('input[type="email"]').value;
    const mobile = row.querySelector('input[type="tel"]').value;
    const username = row.querySelector('input[type="username"]').value;
    const password = row.querySelector('input[type="password"]').value;

    // Get users data from localStorage
    let usersData = JSON.parse(localStorage.getItem('usersData'));

    // Update user data
    usersData[index] = {
        
        fullName: fullName,
        email: email,
        mobile: mobile,
        username: username,
        password: password 
    };

    // Save updated users data to localStorage
    localStorage.setItem('usersData', JSON.stringify(usersData));

    // Re-display updated user data
    displayUserData(usersData);
}

function cancelEdit(index) {
    const row = document.querySelector(`tr[data-index="${index}"]`);
    row.querySelectorAll('.view').forEach(el => el.style.display = 'inline');
    row.querySelectorAll('.edit').forEach(el => el.style.display = 'none');
}

function deleteUser(index) {
    let usersData = JSON.parse(localStorage.getItem('usersData'));
    usersData.splice(index, 1);
    localStorage.setItem('usersData', JSON.stringify(usersData));
    displayUserData(usersData);
}

document.addEventListener('DOMContentLoaded', function() {
    const storedUsersData = JSON.parse(localStorage.getItem('usersData'));
    if (storedUsersData) {
        displayUserData(storedUsersData);
    }
});
