const users = [
 {id:1, username:'usuario1', email: 'usuario1@example.com'},
{ id: 2 , username:'usuario2', email: 'usuario2@example.com'},

// depois posso add outros usuarios//
];

const userTable =document.getElementById('userTable').getElementsByTagName('tbody') [0];
const userForm = document.getElementById ('userForm');
const userIdInput = document.getElementById ('userId');
const usernameInput= document.getElementById ('username');
const emailInput = document.getElementById ('email');


function renderTable() {
 userTable.innerHTML = '' ; //limpa a tabela

 users.forEach(user => {
    const row = userTable.insertRow() ;
    row.insertCell(0).innerText = user.id;
    row.insertCell(1).innerText = user.username;
    row.insertCell(2).innerText = user.email;

    const actionsCell =row.insertCell(3);
    actionsCell.innerHTML = `
    <button class= "edit-btn"   onclick="editUser(${user.id})">Editar</button>
    <button class="delete-btn"  onclick="deleteUser(${user.id})">Apagar</button>
    `;
 });

}

function editUser(userId) {
 const user= users.find (u => u. id == userId );
 userIdInput.value = user.id;
 usernameInput.value = user.username;
 emailInput.value = user.email;

}

function deleteUser(userId) {
  if (confirm('Tem certeza que deseja apagar este usuário?')) {
    const index = users.findIndex( u => u.id === userId );
    if (index > -1) {
        users.splice(index , 1);
        renderTable();
    }
  }
}


userForm.addEventListener(`submit`,function(event) {
    event.preventDefault();

    const id =parseInt(userIdInput.value);
    const username =usernameInput.value;
    const email= emailInput.value;


    if (isNaN(id)) {

        const newId = users.length ? Math.max(users.map(u => u.id)) + 1 :
1; 
   users.push({id: newId , username , email});
} else {
      const user=users.find ( u => u.id === id);
      if (user) {
        user.username = username;
        user.email =email;
      }
   }

   userIdInput.value= '';
   usernameInput.value= '';


})






