<template>
  <div id="app">
    <header>
      <div class="container">
        <ul class="nav">
          <router-link v-for="link in reference" :key="link.title" tag="li" :to="link.url"><a v-text="link.title"></a></router-link>
        </ul>
      </div>
    </header>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    reference () {
      return [
        { title: 'New ad', url: '/' },
        { title: 'My ads', url: '/MyAds' },
        { title: 'Done add', url: '/DoneAdd' }
      ]
    }
  }
}
</script>
<style lang="less">
</style>
