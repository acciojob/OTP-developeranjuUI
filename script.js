//your JS code here. If required.
const codes = document.querySelectorAll('.code');

    codes.forEach((input, idx) => {
      input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value) {
          if (idx < codes.length - 1) {
            codes[idx + 1].focus();
          }
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (!input.value && idx > 0) {
            codes[idx - 1].focus();
          }
        }
      });
    });