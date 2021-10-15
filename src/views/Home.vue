
<template>
  <h1>{{book.title}}</h1><br/>

  <h2>VUEX Store</h2>
  <button @click="this.$store.commit('increment')" v-text="`Ich wurde ${this.$store.state.count} Mal geklickt`"></button>

  <h2>List-Rendering</h2>

  <div v-if="loading">Fetching</div>
  <div v-else style="text-align:left;">
    <ul id="array-rendering">
      <li v-for="item in data.data" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>

</template>

<script>
import { ref, reactive, onMounted} from 'vue' // vue 'functionality'
import { get } from '../api/api'
export default {


  setup() {

    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    const data = ref([])
    const loading = ref(false)

    const getData = async () => {
      loading.value = true
      data.value = await new get().request('https://jsonplaceholder.typicode.com/posts')
      loading.value = false
    }

    onMounted(getData) // created not needed in composition api

    return {
      readersNumber,
      book,
      data,
      loading
    }
  
  }

}

</script>
