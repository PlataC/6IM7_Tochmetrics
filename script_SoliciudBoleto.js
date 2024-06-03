document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('personal-data-form');
    const modal = document.getElementById('success-modal');
    const cancelButton = document.getElementById('cancel-button');
    const buyTicketButton = document.getElementById('buy-ticket-button');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
    });

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    buyTicketButton.addEventListener('click', () => {
        window.location.href = 'Pago.html';  // Replace with your desired URL
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
