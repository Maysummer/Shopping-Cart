const currencyFormatter = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' })

export function formatCurrency(number: number) {
    return currencyFormatter.format(number)
}