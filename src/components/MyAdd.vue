<template>
  <div class="container">
    <h1>Список задач</h1>
    <div class="search_wrap">
      <div class="contact_input">
        <input type="text" v-model="searchSomething">
        <label class="lbl" for="name">Поиск</label>
      </div>
      <button @click="searchTask">Поиск</button>
    </div>
    <div class="myaddcard" v-for="added in addList" :key="added.id">
      <h2>{{added.text}}</h2>
      <div class="card_des">
        <p>{{added.textArea}}</p>
      </div>
      <div class="wrap">
        <router-link class="openlink mb-5" :to="'/MyAds/' + added.id">Открыть</router-link>
        <button class="openlink mr-5" @click="removeTask(added.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchSomething: '',
      addList: []
    }
  },
  computed: {
    adslist () {
      return this.$store.getters.created.filter(task => task.isDone === false)
    }
  },
  created () {
    this.$store.dispatch('fetchTask').then(() => {
      this.addList = this.adslist
    })
  },
  methods: {
    removeTask (id) {
      this.$store.dispatch('deleteTask', {
        id: id
      }).then(() => {
        this.addList = this.adslist
      })
    },
    searchTask () {
      this.addList = []
      return this.adslist.filter(post => {
        if (post.text.toLowerCase().includes(this.searchSomething.toLowerCase()) || post.textArea.toLowerCase().includes(this.searchSomething.toLowerCase())) {
          this.addList.push(post)
        }
      })
    }
  }
}
</script>

<style lang="less">
</style>
