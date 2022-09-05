// import Inboxit from '../json/inbox.json';
// import spamit from '../json/spam.json';


// const initialState ={
//     inbox:Inboxit
// }

// const addReducers =(state=initialState ,action)=>{
//     console.log("add email is called ")
//     switch(action.type)
//     {
//         case "compose":
//             console.log(state.inbox.length);
//             return {
//                 ...state,
//                 Inboxit :Inboxit.unshift(action.payload)
//             }
//     }
// } 
// export default addReducers;