const CurrencyFormater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export { CurrencyFormater };