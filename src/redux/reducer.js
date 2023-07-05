import { useState } from "react";

//Complete the reducer function logic inside the curly braces {}
const initState={
    data :[] ,
}
const reducer = (state= initState,{type,payload}) => {
    switch (type) {
        default:
            return state;
    }
};

export { reducer };