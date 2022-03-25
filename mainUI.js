var userList = [];

function addUser(xid, xname, xsurname, xemail, xphone){
    var newUser = {
        id : xid,
        name : xname,
        surname : xsurname,
        email : xemail,
        phone : xphone
    };
    console.log(newUser);
    userList.push(newUser);    
}

function getUserList(){
    return userList;
}


document.querySelector('#btnSaveUser').addEventListener('click', saveUser);
drawUser();


function saveUser(){
    var sId = document.querySelector('#id').value,
        sName = document.querySelector('#name').value,
        sSurname = document.querySelector('#surname').value,
        sEmail = document.querySelector('#email').value,
        sPhone = document.querySelector('#phone').value;

        addUser(sId, sName, sSurname, sEmail, sPhone);
        drawUser();
       
}


function drawUser(){
    var list = getUserList(),
        tbody = document.querySelector('#listTable tbody');

        tbody.innerHTML = '';

        for (let i = 0; i < list.length; i++) {
            var row = tbody.insertRow(i),
                idCell = row.insertCell(0),
                nameCell = row.insertCell(1),
                surnameCell = row.insertCell(2),
                emailCell = row.insertCell(3),
                phoneCell = row.insertCell(4);

                idCell.innerHTML = list[i].id;
                nameCell.innerHTML = list[i].name;
                surnameCell.innerHTML = list[i].surname;
                emailCell.innerHTML = list[i].email;
                phoneCell.innerHTML = list[i].phone;

                tbody.appendChild(row);
                
        }
}



