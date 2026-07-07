export async function transferMoney(
    accountNumber: string,
    amount: number
) {

    return {
        success: true,
        accountNumber,
        amount
    };
}