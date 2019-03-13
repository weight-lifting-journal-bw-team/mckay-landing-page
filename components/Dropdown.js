class Dropdown {
    constructor(dropdown) {
        this.element = dropdown;
        this.button = dropdown.querySelector('.dropdown-button');
        this.content = dropdown.querySelector('.dropdown-content');
        this.button.addEventListener('click', () => {
            return this.toggleContent();
          });
    }

    toggleContent() {
        this.content.classList.toggle('dropdown-hidden');
    }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));