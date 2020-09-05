import { useState, useEffect } from "react";

export default function HandleExpenses() {
    const [state, setState] = useState([]);
    const [context, setContext] = useState("");
    const [amount, setAmount] = useState(0);
    const AddContext = (text) => {
        const newState = [
            ...state,
            { id: Date.now(), title: text, amount: +amount },
        ];
        setState(newState);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        AddContext(context);
        setAmount("");
        setContext("");
    };

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("cartItem"));
        if (store) setState(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(state));
    }, [state]);

    const handleContext = (e) => {
        setContext(e.target.value);
    };

    const handleAmount = (e) => {
        setAmount(e.target.value);
    };
    const handleDelete = () => {
        const clear = state.splice(state.length, 1);
        setState(clear);
    };

    const Map = state.map(({ amount }) => amount);
    const Value = Map.reduce((curr, next) => (curr += next), 0);

    return {
        handleSubmit,
        handleDelete,
        setContext,
        handleContext,
        handleAmount,
        context,
        amount,
        Value,
        state,
    };
}
