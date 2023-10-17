export enum PaymentTypes {
  CREDIT_CARD = '0',
  DEBIT_CARD = '1',
  CASH = '2',
}

export function getReadablePayment(type: string | null): string {
  switch (type) {
    case PaymentTypes.CREDIT_CARD:
      return 'Credit Card'
    case PaymentTypes.DEBIT_CARD:
      return 'Debit Card'
    case PaymentTypes.CASH:
      return 'Cash'
    default:
      return 'Payment type informed on checkout.'
  }
}
