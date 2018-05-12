<template>
  <div id="welcome">
    <h1>{{ hello }}</h1>
    <button @click="example">Example</button>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      hello: 'Hello, Vue!'
    }
  },
  methods:{
    example: function() {
      this.$router.push('/example')
    }
  }
}
</script>
