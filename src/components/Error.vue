<template>
    <div>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
  export default{
    name: 'error',
    data () {
      return {
        msg: '404,page is not found'
      }
    }
  }
</script>