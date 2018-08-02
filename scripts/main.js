let users = [
	{
  	email: 'admin@gmail.com',
    password: 'admin'
  },
  {
  	email: 'maciej.jamer@gmail.com',
    password: 'maciej.jamer'
  }
];

const errorMessage = document.createElement('div');
errorMessage.classList.add('form-row', 'error-message');
errorMessage.textContent = 'Wpisz poprawny e-mail';

const form = document.querySelector('form');
const formRow = document.querySelectorAll('.form-row');

function checUser(){
  const emailValue = document.querySelector('input[type="email"]').value;
  const passwordValue = document.querySelector('input[type="password"]').value;

  for(let i = 0; i < users.length; i++){
  	if( emailValue === users[i].email && passwordValue === users[i].password ){

    if( document.querySelectorAll('.error-message').length ){
      form.removeChild(errorMessage);
    }
    document.querySelector('.loader').style.display = "none";

    formRow.forEach( (e,i) => {
      e.classList.remove('invalid');
    });
    document.querySelector('input[type="password"]').value = '';
    document.querySelector('input[type="email"]').value = '';
		document.querySelector('input[type="checkbox"]').checked = false;
    // location.href = 'https://www.onet.pl';
    alert('Witaj ' + emailValue);
    return;
    }
   form.insertBefore(errorMessage, form.childNodes[0]);
   document.querySelector('.loader').style.display = "none";
   formRow.forEach( (e,i) => {
     e.classList.add('invalid');
   });
  }
}
function checkingUser(){
	form.classList.add('overlay');
  document.querySelector('.loader').style.display = "block";
}

form.addEventListener('submit',function(e){
  e.preventDefault();
  checkingUser();

  setTimeout(function(){
    form.classList.remove('overlay');
  	checUser();
  }, 3000)
});
