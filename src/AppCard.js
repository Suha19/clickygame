
import React from 'react';

const button = document.querySelector('#click');
button.addEventListener('click', () => {
    console.log(this); // Window { ... }
    this.classList.toggle('on');
});