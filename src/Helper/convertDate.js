export function convertDate(date) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('fr-FR');
}