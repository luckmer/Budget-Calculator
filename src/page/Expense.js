import React from "react";
import HandleExpenses from "../hooks/ExpenseHook";
import {
    Card,
    Container,
    Context,
    Header,
    DeleteContext,
    Tag,
} from "../css/main";
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
            <Tag>
                <header>
                    <h2>Expense Tracker</h2>
                </header>
                <hr />
            </Tag>
            <Card>
                <Header>Wallet: {Value}</Header>
                <header>
                    <h2>Data</h2>
                </header>
                <hr />
                <Context>
                    <div>
                        {state.map(({ title, amount, id }) => (
                            <div key={id}>
                                <p>
                                    {title} {amount}
                                </p>
                            </div>
                        ))}
                    </div>
                </Context>
                <DeleteContext>
                    <button onClick={handleDelete}>Clear History</button>
                </DeleteContext>

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
            </Card>
        </Container>
    );
}

export default Expense;
