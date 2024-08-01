export default function selectAllCheckbox(mainCheckbox) {
  const checkboxes = document.querySelectorAll('.checkbox');

  mainCheckbox.addEventListener('click', () => {
    for (let checkbox of checkboxes) {
      checkbox.checked = mainCheckbox.checked;
    }
  });
}
