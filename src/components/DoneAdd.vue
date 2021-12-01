<template>
  <div class="container">
    <h1>Завершенные задачи</h1>
    <div class="myaddcard" v-for="done of doneList" :key="done.id">
      <h2>{{done.text}}</h2>
      <div class="card_des">
        <p>{{done.textArea}}</p>
      </div>
      <button class="openlink" @click="toMyTaskList(done.id)">Отменить завершение</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      doneList: []
    }
  },
  computed: {
  },
  methods: {
    toMyTaskList (id) {
      this.$store.dispatch('updateTask', {
        ...this.done(id),
        isDone: false
      }).then(() => {
        this.$router.push('/MyAds')
      })
    },
    done (id) {
      return this.$store.getters.MyAdsById(id)
    }
  },
  created () {
    this.$store.dispatch('fetchTask').then(() => {
      this.doneList = this.$store.getters.created.filter(ad => ad.isDone)
    })
  }
}
</script>

<style lang="less">
</style>
