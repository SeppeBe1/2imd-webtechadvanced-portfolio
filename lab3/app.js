class Note {
    constructor(title) {
        this.title = title;
        this.element = this.createElement(title);
    }

    createElement(title) {
        let newNote = document.createElement("li");
        newNote.innerHTML = title;

        newNote.addEventListener('click', this.remove.bind(newNote));


        return newNote;
    }

    add() {
        // HINT🤩
        // this function should append the note to the screen somehow
        let taskList = document.getElementById("taskList");
        // element goes to the created note
        taskList.appendChild(this.element);
    }

    saveToStorage() {
        // HINT🤩
        // localStorage only supports strings, not arrays
        // if you want to store arrays, look at JSON.parse and JSON.stringify

        //returns array because multiple items possible in storage
        //json parse to object
        const arrayNotes = JSON.parse(localStorage.getItem('notes'));
        //adds latest to end of array
        arrayNotes.push(this.title);
        //object back to string
        localStorage.setItem('notes', JSON.stringify(arrayNotes));



    }

    remove() {
        // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
        // in this function, 'this' will refer to the current note element
        taskList.removeChild(this);
        // remove the item from screen and from localstorage
    }
}

class App {
    constructor() {
        console.log("👊🏼 The Constructor!");

        this.txtTodo = document.getElementById("taskInput");

        //listens to textfield if a key is pressed inside
        //.bind lets us use this in methods
        this.txtTodo.addEventListener("keypress", this.createNote.bind(this));

        // this.loadNotesFromStorage();
    }

    loadNotesFromStorage() {
        // HINT🤩
        // load all notes from storage here and add them to the screen
    }

    createNote(e) {
        const ENTER = 13;

        if (e.keyCode == ENTER) {
            e.preventDefault();
            //new note creating
            if (this.txtTodo.value) {
                let note = new Note(this.txtTodo.value);
                //adding after // append other notes
                note.add();
                note.saveToStorage();

                //clear textfield
            } else {
                //not create new element if it is empty
            }
            this.reset();
        }
    }

    reset() {
        // this function should reset the form / clear the text field
        this.txtTodo.value = "";
    }
}

let app = new App();