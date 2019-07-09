const todos = (state = {list:[]}, action)=>{
    switch (action.type){
        case 'ADD_TODO':
            break;
        case 'TOGGLE_TODO':
            const toggleList = state.list.map(
                (todo, index) => {
                    index === action.index ? {...todo, complete : !todo.complete} : todo
                }
            )
            state = Object.assign({}, state, {list : toggleList})
            break;
        default :
                return state
    }
}