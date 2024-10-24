document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const radioButtons = document.querySelectorAll('input[name="transform"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'uppercase') {
                textInput.value = textInput.value.toUpperCase();
            } else if (radio.value === 'lowercase') {
                textInput.value = textInput.value.toLowerCase();
            }
        });
    });
});