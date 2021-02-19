const resetBtn = document.getElementById('resetBtn');
const categoryList = document.getElementById('categoryList');
const categoryContainers = document.getElementsByClassName('category-container');
const doneContainer = document.getElementById('doneContainer');
const undoneContainer = document.getElementById('undoneContainer');
const categoryAddBtn = document.getElementById('categoryAddBtn');
const itemAddBtn = document.getElementById('itemAddBtn');
const trashBtns = document.getElementsByClassName('trash');


//EVENTLISTENER STARTS----------------------------------------------------------------
resetBtn.addEventListener('click', init)
categoryAddBtn.addEventListener('click',  addItem(categoryAddBtn))
itemAddBtn.addEventListener('click',  addItem(itemAddBtn))

for (let i = 0; i < trashBtns.length; i++){
    const trashBtn = trashBtns[i];
    trashBtn.addEventListener('click', e =>
        e.stopPropagation(
            trashRemove(trashBtn)
        )
    )
}

//----------------------------------------------------------------EVENTLISTENER ENDS



//FUNCTION STARTS   ----------------------------------------------------------------

function init(){
    categoryList.innerHTML = '';
    while ( categoryContainers.length > 0){
        categoryContainers[0].parentNode.removeChild(categoryContainers[0]);
    }
    doneContainer.innerHTML = '';
    undoneContainer.innerHTML = '';
}

function trashRemove(trashBtn){
    trashBtn.parentNode.parentNode.remove();
}

function addItem(addBtn){
    const inputVal = addBtn.closest('#inputCategory').value;
    // const ans = input.value.trim();
    console.log(inputVal)
    // if (categoryVal) {
    //     co
    // } else {
    // }
}


//----------------------------------------------------------------FUNCTION ENDS