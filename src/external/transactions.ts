const DEFAULT_DATE = "2023-03-14T00:00:00Z";

export enum TransactionType {
    PAYOUT = "payout",
    SPENT = "spent",
    EARNED = "earned"
  }

export type Transaction = {
    id: string;
    userId: string;
    type: TransactionType;
    amount: number;
    createdAt: string;
}

const createTransaction = (userId: string, amount: number): Transaction => {    
    return {
        id: crypto.randomUUID(),
        userId,
        type: TransactionType.PAYOUT,
        amount,
        createdAt: DEFAULT_DATE
    }
}

const getTransactionById = (transactionId: string, userId?: string): Transaction => {
    return {
        id: transactionId,
        userId: userId || crypto.randomUUID(),
        type: TransactionType.PAYOUT,
        amount: 100.00,
        createdAt: DEFAULT_DATE
    }
}

const getTransactionsByDate = (userId: string, startDate: Date, endDate: Date): Transaction[] => {
    const allTransactions  = getAllTransaction(userId);
    return allTransactions.filter(transaction => {
        const transactionDate = new Date(transaction.createdAt);
        return transactionDate >= startDate && transactionDate <= endDate;
    }) as  Transaction[];
}

const getAllTransaction = (userId:string) => {
    return [
        {
          "id": "41bbdf81-735c-4aea-beb3-3e5f433a30c5",
           userId,
          "createdAt": "2023-03-16T12:33:11.000Z",
          "type": "payout",
          "amount": 30
        },
        {
          "id": "41bbdf81-735c-4aea-beb3-3e5fasfsdfef",
          userId,
          "createdAt": "2023-03-12T12:33:11.000Z",
          "type": "spent",
          "amount": 12
        },
        {
          "id": "41bbdf81-735c-4aea-beb3-342jhj234nj234",
          userId,
          "createdAt": "2023-03-15T12:33:11.000Z",
          "type": "earned",
          "amount": 1.2
        }
    ]
}
