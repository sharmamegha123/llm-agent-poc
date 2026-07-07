export async function getBalance(accountNumber: string) {

    if (!accountNumber) {
    throw new Error("Tool input is invalid");
}
    const mockAccounts: Record<string, number> = {
        "123456": 25000,
        "111111": 10000,
        "999999": 5000
    };
    const balance = mockAccounts[accountNumber];
     if (balance === undefined) {
        return {
            accountNumber,
            error: "Account not found"
        };
    }
    return {
        accountNumber: accountNumber,
        balance: mockAccounts[accountNumber] ?? 0
    };
}


console.log(await getBalance("123456")); // { accountNumber: '123456', balance: 25000 }