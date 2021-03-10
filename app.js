class ItemTask{
    constructor (itemTaskText){
        this.itemId = Date.now().toString();
        this.itemTaskText = itemTaskText;
        this.itemStatus = false;
    }
}
class Category{
    constructor( categoryVal ){
        this.id = Date.now().toString();
        this.categoryVal = categoryVal;
        this.categoryContainer = []
    }
    static createCategoryContainer(categoryVal){
        container.style.display = 'flex';
        const categoryTitle =  document.getElementById("containerHeader").firstElementChild;
        categoryTitle.innerHTML = categoryVal;
    }
}
class UI{
    static displayCategory(){
        const Categories = Store.getCategory();
        Categories.forEach((category) => UI.addCategoryToList(category))
    }

    static addCategoryToList(category){
        const categoryList = document.getElementById('categoryList');
        const categoryItem = document.createElement('li');
        const categoryBtns = `
            <div class="listBtn">
                <button class="trash btnC"><i class="fas fa-trash-alt"></i></button>
                <button class="open btnC"><i class="fas fa-external-link-alt"></i></button>
            </div>`
        categoryItem.setAttribute("class", "list-item category-list") 
        categoryItem.innerHTML = `
            <h1>${category.categoryVal}</h1>
            ${categoryBtns}`
        categoryList.appendChild(categoryItem);
    }
    static deleteCategory(el){
        if(el.classList.contains('trash')){
            el.parentElement.parentElement.remove()
        }
    }
    static openCategory(el){
        if(el.classList.contains('open')){
            const categoryVal = el.parentElement.previousElementSibling.innerHTML;
            console.log(categoryVal)
            // Category.createCategoryContainer(categoryVal)
        }
    }
    static clearFields(){
        document.getElementById("categoryVal").value = '';
    }
}

class Store {
    static getCategory(){
        let categories;
        if( localStorage.getItem('categories') === null){
            categories = []
        }else{
            categories = JSON.parse(localStorage.getItem('categories'))
        }
        return categories;
    }
    static addCategory(category){
        const categories = Store.getCategory();
        categories.push(category);
        localStorage.setItem('categories', JSON.stringify(categories))
    }
    static removeCategory(category){
        const categories = Store.getCategory();
        categories.forEach((category, index) => {
            if(category.categoryVal === category ){
                categories.splice( index, 1)
            }
        })
    localStorage.setItem('categories', JSON.stringify(categories))
    }
}




//EVENT: Display Books
document.addEventListener('DOMContentLoaded', UI.displayCategory);

//Event: New Start
document.getElementById('resetBtn').addEventListener('click', (e)=>{
    const categoryList = document.getElementById('categoryList')
    const container = document.getElementById('container')
    const doneContainer = document.getElementById('doneContainer');
    const undoneContainer = document.getElementById('undoneContainer');
    categoryList.innerHTML = '';
    container.style.display = 'none';
    doneContainer.innerHTML = '';
    undoneContainer.innerHTML = '';
    localStorage.clear();
})



//EVENT: Add Category
document.getElementById('taskAddBtn').addEventListener('click', (e)=>{ 
    const categoryVal = document.getElementById('categoryVal').value;
    if( categoryVal !== '' ){
        const category = new Category(categoryVal);    
        UI.addCategoryToList(category)
        Store.addCategory(category)
        UI.clearFields();
    }
});



document.querySelector('.category-list').addEventListener('click', (e)=>{
    //Delete Category
    UI.deleteCategory(e.target)

    //Open Category
    UI.openCategory(e.target)

    //Remove Category from Store
    // Store.removeCategory(e.target.parentElement.parentElement.textContent)
})



//EVENT: End and Calculate












