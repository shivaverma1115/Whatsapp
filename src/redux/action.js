
//DO NOT change the function names

//function to return the add action object
const handleAddActionObj = (payload) => {
    return{
        type:"ADD",
        payload:payload
    }
};

//function to return the reduce action object
const handleReduceActionObj = (payload) => {
    return{
        type:"REDUCE",
        payload:payload
    }
};

export { handleAddActionObj, handleReduceActionObj };