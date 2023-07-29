









export async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getTodoById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export async function deleteTodoById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}