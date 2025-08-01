//selectionne les elements html
const toDoform = document.getElementById("toDoForm");
const toDoinput = document.getElementById("toDoInput");
const toDoList = document.getElementById("toDoList");



// ajout d'une tâche
toDoform.addEventListener('submit', function(e){
    e.preventDefault();

    const taskText = toDoinput.value.trim();//enleve les espaces vides
    if (taskText === "")return;// ne fait rien si vide

    const li = document.createElement('li');// creer element

    const span = document.createElement('span'); //span pour contenirle text
    span.textContent = taskText;
    //fait pas fait
    span.addEventListener('click', () => {
        li.classList.toggle('done');
    });

const deleteBtn = document.createElement('button');
deleteBtn.textContent = ' Supprimer';
deleteBtn.addEventListener('click', () => {
    toDoList.removeChild(li);
});

li.appendChild(span);
li.appendChild(deleteBtn);
toDoList.appendChild(li);//ajoute à ul un li

toDoinput.value = '';// vide le champs

});




//localStorage: stocke les donnees de facon persistante dans le navigateur
//JSON.stringify(): convertit un objet en JS en texte
//JSON.parse(): transforme ce texte en objet JS
//addEventListener(): reagit aux evenements comme submit ou click
//classList.toggle(): ajoute/enleve une class en CSS