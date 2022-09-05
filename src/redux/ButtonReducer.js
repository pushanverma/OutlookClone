import Inboxit from '../json/inbox.json';
import SpamMessage from '../json/spam.json';


const initialState=
{
    spam:SpamMessage,
    inbox:Inboxit
};


const buttonReducer =(state=initialState,action)=>{
    
switch(action.type)
{
    case "spam" : 
    console.log("spam is clicked ");
    // const index =state.inbox.findIndex(x => x==action.payload)
    // console.log(index)
    console.log(state.inbox[action.payload]);
    console.log(state.inbox[action.payload].status);
    return {
    ...state,
    Inboxit: Inboxit[action.payload].status="spam"

    }

    case "delete" : 
    console.log("delete is clicked ")
    console.log(state.inbox[action.payload]);
    return {
        ...state,
        Inboxit :Inboxit[action.payload].status="delete"
    }
    
    case "star" : 
    console.log("star is clicked ")
    console.log(state.inbox[action.payload]);
    return {
        ...state,
        Inboxit :Inboxit[action.payload].status ="star"
    }


    case "remove":
        console.log("remove is called ")
        console.log(state.inbox[action.payload].mId,".............1");
        let filtered=[]
        filtered=state.inbox.filter((user,index)=> user.mId !==state.inbox[action.payload].mId)
        console.log(filtered,"........2")
        return {
            ...state,
            inbox :filtered
        //  :Inboxit[action.payload].status ="remove"
        }

        case "compose":
        console.log("compose  is called ")
        // console.log(state.inbox[action.payload]);
        console.log(action);
        console.log(action.payload.sub);
        console.log(action.payload.cont);
        let arr =[]
        arr=state.inbox
        arr.push(action.payload)
        console.log(arr,"...........arr")
        console.log("pushing the array ......2")     
            return {
                ...state,
                // Inboxit :Inboxit.unshift(action.payload)
                inbox :arr
            }


    default : return state
    
}
}

export default buttonReducer