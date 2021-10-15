
<template>
  {{book.title}}<br/>
  <button @click="this.$store.commit('increment')" v-text="`VUEX-Store: ${this.$store.state.count}`"></button>
</template>

<script>
import { ref, reactive } from 'vue' // reactive 'feature'

export default {
  
  setup() {

    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })

    return {
      readersNumber,
      book
    }
  
  }

}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
