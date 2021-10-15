
<template>
  <h1>{{page.title}}</h1><br/>

  <h2>VUEX Store</h2>
  <button @click="this.$store.commit('increment')" v-text="`Ich wurde ${this.$store.state.count} Mal geklickt`"></button>

  <DemoComponent demoProp="I am a prop"></DemoComponent>

  <h2>List-Rendering</h2>

  <div v-if="loading">
    Fetching data ...
  </div>

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
import DemoComponent from "../components/DemoComponent.vue"
export default {

  components: {
    DemoComponent
  },

  setup() {

    const page = reactive({ title: 'Vue 3 Composition API' })
    const data = ref([])
    const loading = ref(false)

    const getData = async () => {
      loading.value = true
      data.value = await new get().request('https://jsonplaceholder.typicode.com/posts')
      loading.value = false
    }

    onMounted(getData) // 'created' not needed in composition api

    return {
      page,
      data,
      loading
    }
  
  }

}

</script>
