/*document
    .querySelector("select[name=uf")
    .addEventListener("change", () => {
        console.log("mudei")
    }) */

   
    function populateUFs() {
        const ufSelect = document.querySelector("select[name=uf]")
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json() )
        .then( states => {
            
            for(const state of states){                               
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option> `
            }           
            
        } )
        
    }
    populateUFs()




    function getCities(event) {
        const citySelect = document.querySelector("select[name=city]")
        const stateInput = document.querySelector("[name=state]")
        //const ufValue = event.target.value
        //console.log(ufValue)
        
        const ufValue = event.target.value
        const indexOfSelectedState = event.target.selectedIndex
        stateInput.value = event.target.options[indexOfSelectedState].text
        
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
        citySelect.innerHTML=""
        citySelect.disabled = true
        fetch(url)
        .then( res => res.json() )
        .then( cities => {
            
            for(const city of cities){                
                 citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option> `
                
            }
            citySelect.disabled= false
        } )
        
    }

    document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


    // itens de coleta
    //addEventListener    
    const itemsToCollect = document.querySelectorAll(".items-grid li")
    for (const item of itemsToCollect){
        item.addEventListener("click",handleSelectedItem)
    }
    const collectedItems = document.querySelector("input[name=items]")
    let selectedItems= []
    function handleSelectedItem(event){
        const itemLi = event.target
        itemLi.classList.toggle("selected")
        const itemId = itemLi.dataset.id
        //console.log(event.target.dataset.id)
        
        //verificar se clicou em algum item que não está no array
        // se sim -> adicionar no array 
        const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item == itemId
            return itemFound
        })
        //***  reescrevendo função acima de forma contraída
        //  const alreadySelected = selectedItems.findIndex( item => item == itemId)
        //console.log(alreadySelected)
        // se já estiver selecionado -> retirar do array
        if (alreadySelected >= 0){
            //removendo item do array
            const filteredItems = selectedItems.filter( item=> {
                const itemsDifferent = item != itemId
                return itemsDifferent
            })
            //console.log(filteredItems)
            selectedItems = filteredItems
        }else {
            // adicionar array
            selectedItems.push(itemId)
        }
        // atualizar o campo
        collectedItems.value = selectedItems
        
    }
        


    
   