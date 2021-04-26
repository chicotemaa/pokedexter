
//obtener por formulario nombre o id

let form = document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let pokemon = document.getElementById('search').value;
    let url = 'https://pokeapi.co/api/v2/pokemon/'+pokemon;

    fetch(url)
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      let search = document.getElementById('form');
      let instructivo = document.getElementById('instructivo');
      let card = document.getElementById('card');
      let container = document.getElementById('container');
      let tipos=[]
      for (let i = 0; i < data.types.length; i++) {
       
       tipos.push(data.types[i].type.name)
      
      }
      console.log(tipos)
      search.style.display = 'none';
      instructivo.style.display = 'none';
       card.innerHTML=`
       
      <img class='img' src='${data.sprites.front_default}' alt='${data.name}'>
      <p class='dato' >Nombre: ${data.name}</p> 
      <p class='dato' >Tipo:  ${tipos}</p>
      <p class='dato' >Experiencia base: ${data.base_experience}</p>
      <p class='dato' >Altura: ${data.height}</p>
      <p class='dato' >Peso: ${data.weight}</p>
      <br>
        <form>
          <button type='submit' class='btn consultar' >Volver a consultar</button>
        </form>
      
      `;  
      container.style.height = '100%';
    })
    .catch(err=>{
      let card = document.getElementById('card');
      let search = document.getElementById('form');
      search.style.display = 'none';
      card.innerHTML=`
      <p>No existe Pokemon </p>
      <form>
      <button type='submit' class='btn' >Volver a consultar</button>
      </form>
      `
    })

  })




