import { TodoContext } from "./TodoContext"

interface Props {
    children: JSX.Element | JSX.Element[]
};

export const TodoProvider = ({children}: Props) => {
    return (
        <TodoContext.Provider value={{textWrite: 'Hello world'}}>
            { children }
        </TodoContext.Provider>
    )
};