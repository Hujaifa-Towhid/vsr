const changeBtn = document.getElementById('changeBtn');
const body = document.body;

changeBtn.addEventListener('click', () => {
  // এখানে আপনি বিভিন্ন ক্লাস যোগ করে ব্যাকগ্রাউন্ড চেঞ্জ করতে পারেন
  body.classList.toggle('red-background');
});
