export default function resetInput() {
  const category = document.querySelector('#category');
  const date = document.querySelector('#date');
  const time = document.querySelector('#time');
  const asset = document.querySelector('#asset');
  const classification = document.querySelector('.classification');
  const amount = document.querySelector('#amount');
  const description = document.querySelector('#description');
  const memo = document.querySelector('#memo');

  classification.checked = true;
  date.value = '';
  time.value = '';
  asset.value = '카카오뱅크';
  category.selectedIndex = 0;
  amount.value = '';
  description.value = '';
  memo.value = '';
}
