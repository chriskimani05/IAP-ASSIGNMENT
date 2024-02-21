const newTask = document.getElementById('task');
const submitButton = document.getElementById('submit');

submitButton.disabled = true;


newTask.addEventListener('input', function(){
    const inputValue = newTask.value;
    console.log(inputValue);

    // enable the submit button if the input field is not empty
    if (inputValue.trim() !== '') {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});


const form = document.getElementById('taskform');

form.addEventListener('submit', function(event){ 
    event.preventDefault();

    const inputValue = newTask.value;
    console.log(inputValue);

    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = inputValue;

   document.getElementById('tasks').appendChild(newTaskItem);
   newTask.value = '';
   submitButton.disabled = true;

   return false;
});
