function toggleAnswerDiv() {
    let nextSibling = this.nextElementSibling;
    if (nextSibling.style.display == 'block') {
        nextSibling.style.display = 'none';
    } else {
        nextSibling.style.display = 'block';
    }
}