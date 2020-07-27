

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then( res => res.json())
    .then( states => {

        for( const state of states) {
            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`
        }
    })
}


populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")


    const ufValue = event.target.value

    const indexState = event.target.selectedIndex

    stateInput.value = event.target.options[indexState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then( res => res.json())
    .then( cities => {

        citySelect.innerHTML = "<option value>Selecione a cidade<option>"
        citySelect.disabled = true

        for( const city of cities) {
            citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false

    })

}


document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)


//Itens de coleta
//Pegar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    //add or remove
    const itemLi = event.target

    //Adiciona ou remove uma classe com javascript
    itemLi.classList.toggle("selected")
    const itemId = event.target.dataset.id


    console.log('ITEM ID: ', itemId)
   //verifica se itens selecionados, se sim...


    const alreadySelected = selectedItems.findIndex(item =>{
        const itemFound = item == itemId //isso será true or false
        return itemFound
    })
    
    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId //False
            return itemIsDifferent
        })
        selectedItems = filteredItems
    }
    else{
        selectedItems.push(itemId)
    }
    console.log('selectItems: ', selectedItems)
   
    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
}
