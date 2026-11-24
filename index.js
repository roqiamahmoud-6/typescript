"use strict";
class user {
    id;
    name;
    password;
    email;
    phone;
    age;
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    displayInfo() {
        console.log({
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
            age: this.age
        });
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
}
class Admin extends user {
    manageNotes() {
        console.log("Admin can manage notes");
    }
}
class Note {
    id;
    title;
    content;
    author;
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
    preview() {
        const shortPreview = this.content.slice(0, 25);
        console.log(shortPreview);
    }
}
class NoteBook {
    notes = [];
    addNote(note) {
        this.notes.push(note);
    }
    removeNote(id) {
        this.notes = this.notes.filter((note) => { note.id !== id; });
    }
}
class storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    getAllItems() {
        return this.items;
    }
}
