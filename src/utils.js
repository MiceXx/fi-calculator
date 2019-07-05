
export const formatCurrency = (num) => {
    if (isNaN(num) || !num) return num;
    return `$${num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}