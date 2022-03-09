<template>
  <div class="wrapper">
    <main v-if="dataFound" class="container">
      <span>
        Nome<br/>
        <h1>{{ pokemon.name }}</h1>
      </span>
      <span>
        ID:<br/>
        <h1>{{ pokemon.id }}</h1>
      </span>
      <span class="bottom-wrapper"> 
        <span>
          <h2>Image:</h2>
          <img :src="pokemon.imgURL"/>
        </span>
        <span>
          <h2>Abilities</h2><br/>
          <table>
            <tr v-for="abilityObj in pokemon.abilities" v-bind:key="abilityObj.ability.name">
              <th>Ability</th>          
              <td>{{ abilityObj.ability.name }}</td>
            </tr>
          </table>
        </span>
      </span>
    </main>
    <main class="no-data" v-else><h1>No data found about this Pokémon</h1></main>
  </div>
</template>

<script>
export default {
  name: 'PokemonHome',

  data() {
    return {
      pokemon: {
        name: '',
        id: '',
        abilities: [],
        imgURL: ''
      },
      dataFound: false
    }
  },
  mounted () {
    this.$axios
      .get(`${process.env.VUE_APP_MIDDLEWARE_API_URL}/${this.$route.params.name}`)
      .then(response => {
        if (response.data && response.data != 'Not Found') {
          this.pokemon = response.data
          this.dataFound = true
        }
      })
  }
}
</script>

<style scoped>
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .container {
    justify-content: center;
    display: flex;
    width: 1000px;
    flex-flow: column wrap;
    margin-top: 3em;
    border: 0.25em solid #222224;
    border-radius: 1em;
    margin-bottom: 2em;
  }

  .container span {
    text-align: center;
    padding: 1em;
  }
  
  table, th, td {
    border-collapse: collapse;
    border: 3px #222224 solid;
  }
  
  td, th {
    padding: 0.5em;
  }

  .bottom-wrapper {
    display: flex;
    justify-content: center;
  }

  .bottom-wrapper span {
    display: flex;
    flex-direction: column;
    min-width: 250px;
  }

  .no-data {
    margin-top: 2em;
  }  
</style>