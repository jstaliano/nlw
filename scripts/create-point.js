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
        //const ufValue = event.target.value
        //console.log(ufValue)
        console.log(event.target.value)

        const url = ``
        /*
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios")
        .then( res => res.json() )
        .then( cities => {
            
            for(const city of cities){                
                citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option> `
                console.log(citySelect.value)
            }
            
        } ) */
        
    }

    document
    .querySelector("select[name=uf]")
    .addEventListener("change", () => {
        console.log("mudei", getCities)
    })


    
   