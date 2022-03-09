<template>
  <nav>
    <router-link class="logotype" to="/"><h1>PokéAbilities</h1></router-link>
    <span>
      <input type="text" v-model="pokemonNameSearch" @keydown.enter="searchPokemon()" class="searchField" placeholder="Pokémon name"/>
      <input type="button" @click="searchPokemon()" class="searchButton" :class="{ blink: blinking }" value="🔎">
    </span>
  </nav>
</template>

<script>
export default {
  name: 'PokemonHome',
  components: {},

  data () {
    return {
      pokemonNameSearch: '',
      pokemon: {
        nome: '',
        id: '',
        habilidades: [],
        imgURL: ''
      },
      blinking: false
    }
  },

  methods: {
    async searchPokemon () {
      if(this.pokemonNameSearch) {
        this.$router.push({name: 'pokemonDisplay', params: { name: this.pokemonNameSearch }})
        this.blinking = true
        setTimeout(async () => {
          this.blinking = false
        }, 1000);
        this.pokemonNameSearch = ''
      }
    }
  }
}
</script>

<style scoped>
@import url('https://db.onlinewebfonts.com/c/f4d1593471d222ddebd973210265762a?family=Pokemon');
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: radial-gradient(circle, rgb(204, 0, 0) 0%, rgb(255, 0, 0) 27%, rgb(255, 0, 0) 35%, rgb(204, 0, 0) 86%, rgb(255, 55, 55) 100%);
    padding: 0 1em;
    font-size: 2vw;
    border-bottom: 0.5em solid #222224;
  }
  nav h1 {
    font-family: 'Pokemon';
    color: #FFCB05;
    -webkit-text-stroke: 0.5px #3D7DCA;
    margin: 0;
    letter-spacing: 0.2em;
    padding: 0 10px;
    background-color: white;
    border-radius: 100px;
    border: 0.25em solid #222224;
    margin: 0.25em;
  }

  span {
    display: flex;
    align-items: center;
  }

  span input {

    margin: 0 0.5em;
    font-size: 2vw;
  }

  .searchField {
    padding: 0 0.25em;
    border: 0px;
    border-radius: 0.25em;
    text-align: center;
    min-height: min-content ;
    box-shadow: #ff1111 0 1em 1em;
    border-bottom: 0.25em solid #222224;
    background-color: unset;
    color: white;
  }

  .searchField::placeholder {
    color: white;
  }

  .searchField:focus {
    border-radius: 0;
  }

  .searchButton {
    width: 4em;
    height: 4em;
    border-radius: 4em;
    padding: 0 0.25em;
    border: 0px;
    background-color: white;
    border: 0.25em solid #222224;
    text-align: center;
    vertical-align: center;
    color: #222224;
  }
  .blink {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0% {
      background-color: white;
    }
    10% {
      background-color: salmon;
    }
    20% {
      background-color: white;
    }
    30% {
      background-color: salmon;
    }
    40% {
      background-color: white;
    }
    50% {
      background-color: salmon;
    }
    60% {
      background-color: white;
    }
    70% {
      background-color: salmon;
    }
  }

  .logotype {
    text-decoration: none;
  }
</style>