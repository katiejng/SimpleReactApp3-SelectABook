//state argument is not application state
// this reducer is responsible for returning active book state
export default function(state=null, action){
    switch (action.type){
      case 'BOOK_SELECTED':
        return action.payload;
    }

    return state
}
