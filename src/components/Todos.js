import React from "react";

const Todos = ({todos}) => {
    return (
        <div>
            <ul>
                {
                    todos && todos.map((todo, ind) => {
                        return <li key={ind} className={todo.status == "completed" ? "completed" : "active"}>{todo.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todos