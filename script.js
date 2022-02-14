//1
/* const sections = document.getElementsByClassName('section-title')
for (const section of sections) {
    section.style.color = 'red';
} */
document.getElementById('top-player').style.color = '#1B9D99';
document.getElementById('top-blog').style.color = '#1B9D99'
document.getElementById('latest-course').style.color = '#1B9D99'

//2 
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(122, 52, 187, 0.69)';
    player.style.borderRadius = '10%';
    player.style.padding = '10px';
    player.style.marginRight = '10px';
}

//3 event bubble 
document.getElementById('add-list').addEventListener('click', function () {
    // console.log('clicked');
    const listParent = document.getElementById('list-parent');
    const li = document.createElement('li')
    li.innerText = 'New List Added';
    // console.log(listParent);
    listParent.appendChild(li)
})
//event delegate 
document.getElementById('list-parent').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target)
})

//4 
function plusBtn() {
    let inputField = document.getElementById('input-field');
    const plus = inputField.value;
    if (inputField.value < 5) {
        inputField.value = parseInt(plus) + 1;
    }

}
function minusBtn() {
    let inputField = document.getElementById('input-field');
    const minus = inputField.value;
    if (inputField.value > 0) {
        inputField.value = parseInt(minus) - 1;
    }
}

