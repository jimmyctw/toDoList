//header Section
const resetBtn = document.getElementById('resetBtn');
const endBtn = document.getElementById('endBtn');

//main Section
//main Section--Category
const categoryList = document.getElementById('categoryList');
const formBtns = document.getElementsByClassName('formBtn')
const categoryContainers = document.getElementsByClassName('category-container');
let categoryListItems = [];
let AllListItems = [];

let categorybtns = document.getElementsByClassName('btnC')


resetBtn.addEventListener('click', init)

for( let i = 0 ; i < formBtns.length; i++ ){
    const formBtn = formBtns[i];
    formBtn.addEventListener('click', e => 
        e.stopPropagation(
        chooseContainer(formBtn)
    ))
}

for (let i = 0; i < categorybtns.length; i++){
    const categorybtn = categorybtns[i];
    categorybtn.addEventListener('click', e =>
        e.stopPropagation(
            btnFunction(categorybtn)
        )
    )
}

function btnFunction(categorybtn){
    categorybtn.addEventListener('click', ()=>{

        if(categorybtn.classList.contains('trash')){
            trashRemove(categorybtn)
        }else if(categorybtn.classList.contains('open')){
            openCategory(categorybtn)
        }
    })
}


// function getTrashBtns (){
//     trashBtns = document.getElementsByClassName('trash')
//     for (let i = 0; i < trashBtns.length; i++){
//         const trashBtn = trashBtns[i];
//         trashBtn.addEventListener('click', e =>
//             e.stopPropagation(
//                 trashRemove(trashBtn)
//             )
//         )
//     }
// }

function getAllBtns(){
    console.log('trila')
    let categorybtns = document.getElementsByClassName('btnC');
    for (let i = 0; i < categorybtns.length; i++){
        const categorybtn = categorybtns[i];
        categorybtn.addEventListener('click', 
            // e.stopPropagation(
                btnFunction(categorybtn)
            // )
        )
    }
}


function openCategory(openBtn){
    const categoryTitle = openBtn.parentNode.previousElementSibling.innerHTML;
    console.log(categoryTitle)
}


//FUNCTION STARTS   ----------------------------------------------------------------
function init(){
    categoryList.innerHTML = '';
    categoryListItems = [];
    while ( categoryContainers.length > 0){
        categoryContainers[0].parentNode.removeChild(categoryContainers[0]);
    }
    doneContainer.innerHTML = '';
    undoneContainer.innerHTML = '';
}
function trashRemove(trashBtn){
    trashBtn.parentNode.parentNode.remove();
}
//----------------------------------------------------------------FUNCTION ENDS
function chooseContainer(formBtn){
    const formBtnId = formBtn.id;
    const input = formBtn.previousElementSibling;
    const inputValue = formBtn.previousElementSibling.value;
    const categoryBtns = `                        
        <button class="trash"><i class="fas fa-trash-alt"></i></button>
        <button><i class="fas fa-external-link-alt"></i></button>`;
    const itemBtn = `
        <button class="trash"><i class="fas fa-trash-alt"></i></button>
        <button class="doneCheck"><i class="fas fa-check"></i></button>`
    
    if( formBtnId === 'categoryBtn'){
        listBuild( formBtn, categoryBtns, inputValue)
        categoryListItems.push(inputValue)
        console.log(categoryListItems)
    }else{
        listContainerBuild(formBtnId)
        listBuild(formBtn, itemBtn, inputValue)
    }
    input.value = '';
    getAllBtns()
    
}

function categoryContainerBuild(value){
    const categoryValue = value;
    const categoryBox = document.createElement('div');
    categoryBox.setAttribute('class', 'category-container');
    categoryBox.setAttribute('id', categoryValue);
    const formSec = `
        <form>
            <label for="fname">Household </label>            
            <input class="categoryInput" type="text" id="inputCategory" placeholder="Input Task Item" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Input Task Item'">
            <button class="formBtn btnBig" type="button" id="itemAddBtn"><i class="fas fa-plus"></i></button>
        </form>`;
    const categorySec = `<ul class="list-container"></ul>`;
    categoryBox.innerHTML = formSec + categorySec;
}

function listContainerBuild (formBtnId){
    const listContainer = document.createElement('ul');
    const listContainerId = `${categoryName}Contanier`
    listContainer.setAttribute('class', 'list-container');
    listContainer.setAttribute('id', listContainerId);

}


function listBuild (formBtn, buttonSets, inputValue){
    if( inputValue !== ''){
        const listContainer = formBtn.parentNode.nextElementSibling;
        const listItem =  document.createElement("li");
        listItem.classList.add('list-item');
        const listContent = `
                <span>${inputValue}</span>
                <div class="listBtn">${buttonSets}
                </div>`
        listItem.innerHTML = listContent;
        appendItem(listItem, listContainer)
    }
}



function appendItem (item, container){
    container.appendChild(item);
}


//EVENTLISTENER STARTS----------------------------------------------------------------

// categoryAddBtn.addEventListener('click',  addItem(categoryAddBtn))
// itemAddBtn.addEventListener('click',  addItem(itemAddBtn))

//----------------------------------------------------------------EVENTLISTENER ENDS




//result Section
const doneContainer = document.getElementById('doneContainer');
const undoneContainer = document.getElementById('undoneContainer');