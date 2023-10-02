//////////////////////// side nav bar start///////////////////////////
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
//////////////////////// side nav bar close///////////////////////////



document.addEventListener("DOMContentLoaded", function () {
    const dataBody = document.getElementById("dataBody");

    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem("formData"));

    if (storedData && storedData.length > 0) {
        for (const data of storedData) {
            const row = document.createElement("tr");
            const firstNameCell = document.createElement("td");
            const lastNameCell = document.createElement("td");
            const phoneCell = document.createElement("td");
            const emailAddressCell = document.createElement("td");
            const emailCategoryCell = document.createElement("td");
            const registerDateCell = document.createElement("td");

            firstNameCell.textContent = data.firstName;
            lastNameCell.textContent = data.lastName;
            phoneCell.textContent = data.phone;
            emailAddressCell.textContent = data.emailAddress;
            emailCategoryCell.textContent = data.emailCategory;
            registerDateCell.textContent = data.registerDate;

            row.appendChild(firstNameCell);
            row.appendChild(lastNameCell);
            row.appendChild(phoneCell);
            row.appendChild(emailAddressCell);
            row.appendChild(emailCategoryCell);
            row.appendChild(registerDateCell);
            dataBody.appendChild(row);
        }
    }
});
