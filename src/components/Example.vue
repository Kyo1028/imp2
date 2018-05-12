<template>
  <div id="example">
    <Header></Header>
    <Body></Body>
  </div>
</template>

<script>
import Header from './Header'
import Body from './Body'

export default {
  name: 'Example',
  components: {
    Header,
    Body
  }
}
</script>
