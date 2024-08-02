export default function resetInput() {
  document.getElementsByName('category').value = '';
  document.querySelector('#date').value = '';
  document.querySelector('#time').value = '';
  document.querySelector('#asset').value = '카카오뱅크';
  document.querySelector('#classification').value = '';
  document.querySelector('#amount').value = '';
  document.querySelector('#description').value = '';
  document.querySelector('#memo').value = '';
}
