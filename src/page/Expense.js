import React from "react";
import HandleExpenses from "../hooks/ExpenseHook";
import { Container } from "../css/main";
function Expense() {
    const {
        handleSubmit,
        handleContext,
        handleAmount,
        handleDelete,
        context,
        amount,
        Value,
        state,
    } = HandleExpenses();
    return (
        <Container>
            <div>{Value}</div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={context} onChange={handleContext} />
                <hr />
                <input type="number" value={amount} onChange={handleAmount} />
                <hr />
                <button type="submit " disabled={!amount ? true : false}>
                    Submit
                </button>
            </form>

            <div>
                {state.map(({ title, amount, id }) => (
                    <div key={id}>
                        {title}
                        {amount}
                    </div>
                ))}
            </div>
            <div>
                <button onClick={handleDelete}>Clear History</button>
            </div>
        </Container>
    );
}

export default Expense;
