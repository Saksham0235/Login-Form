let toggle=document.querySelector('.toggle-btn')

function toggling()
{
    let rightdiv=document.querySelector('.right')
    rightdiv.classList.toggle('dark'); 
    let leftdiv=document.querySelector('.left')
    leftdiv.classList.toggle('dark'); 
    let h2=document.querySelector('h2')
    h2.classList.toggle('dark');
    let selectElements = document.querySelectorAll('select');
    selectElements.forEach((select) => {
        select.classList.toggle('dark');
    });
    if (rightdiv.classList.contains('dark')) {
        toggle.textContent = 'Light Mode'; 
    } else {
        toggle.textContent = 'Dark Mode';  
    }
}
