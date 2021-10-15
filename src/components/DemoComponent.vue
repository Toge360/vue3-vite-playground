<template>
  <h2>{{component.title}} with prop: "{{demoProp}}"</h2>
</template>

<script>
import { ref, reactive} from 'vue' // vue 'functionality'
export default {

  name: 'DemoComponent',

  props: {
    demoProp: String
  },

  setup() {

    const component = reactive({ title: 'Demo Component' })
    const loading = ref(false)

    return {
      component,
      loading
    }
  
  }

}
</script>

<style>

</style>