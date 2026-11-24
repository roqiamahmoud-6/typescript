
class user{
    public readonly id:number;
    public  name:string;
    private readonly password:string;
    public  email:string;
    public  phone:string;
    public  age:number;
    public notebooks: NoteBook[] = [];


    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number
   
    ){
     if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60")
    }
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
        this.age = age
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
    addNotebook(notebook: NoteBook){
        this.notebooks.push(notebook);
    }


}

class Admin extends user {
     constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number
    ) {
        super(id, name, email, password, phone, age);
    }
    manageNotes() {
        console.log("Admin can manage notes");
    }

}


class Note {
    public id: number;
    public title: string;
    public content: string;
    public author: user;

    constructor(id: number, title: string, content: string, author: user) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }

    preview() {
        const shortPreview= this.content.slice(0, 25)
        console.log(shortPreview)
    }
}


class NoteBook {
    private notes: Note[] = [];

    addNote(note: Note){
        this.notes.push(note);
    }

    removeNote(id: number){
        this.notes = this.notes.filter((note) =>{ note.id !== id});
    }
}

class storage<t> {
    private items: t[] = [];
    addItem(item: t){
        this.items.push(item);
    }

    removeItem(index: number){
        this.items.splice(index, 1);
    }

    getAllItems(): t[] {
        return this.items;
    }
}

