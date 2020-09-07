import React from "react";
import HandleExpenses from "../hooks/ExpenseHook";
import { Container, BorderView, Header, Card, Context } from "../css/main";
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
            <Card>
                <Header>{Value}</Header>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={context}
                        onChange={handleContext}
                    />
                    <hr />
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmount}
                    />
                    <hr />
                    <button type="submit " disabled={!amount ? true : false}>
                        Submit
                    </button>
                </form>

                <BorderView>
                    <Context>
                        {state.map(({ title, amount, id }) => (
                            <p key={id}>
                                {title} {amount}
                            </p>
                        ))}
                    </Context>
                    <div>
                        <button onClick={handleDelete}>Clear History</button>
                    </div>
                </BorderView>
            </Card>
        </Container>
    );
}

export default Expense;
