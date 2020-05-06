class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {

}

const myList = new TodoList()

document.querySelector('#add-todo').onclick = function() {
    const name = document.querySelector('#name').value

    if(name.length) {
        myList.add(name)
        document.querySelector('#name').value = ''
        document.querySelector('#name').focus()
    }
}

document.querySelector('#name').onkeypress = function(e) {
    if(e.keyCode == 13) {
        document.querySelector('#add-todo').click()
    }
}