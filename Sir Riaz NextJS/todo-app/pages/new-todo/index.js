import { useRouter } from 'next/router';

import NewTodoForm from '../../components/todos/NewTodoForm';

function NewTodoPage() {
    const router = useRouter()

    async function addTodoHandler(enteredTodoData) {
        // external api calls should be made here
        // const response = await fetch('/api/new-todo', {
        //     method: 'POST',
        //     body: JSON.stringify(enteredTodoData),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        // const data = await response.json();

        router.push('/')
    }

    return (
        <NewTodoForm onAddTodo={addTodoHandler} />
    )
}

export default NewTodoPage;