<template>
  <div class="container">
  <div class="mt-30">
    <div class="myaddcard">
      <h2>{{added.text}}</h2>
      <div class="card_des">
        <p>{{added.textArea}}</p>
      </div>
      <div class="wrap">
        <addEditMyAdsId :added="added" v-if="isInfoPopup" @closePopup="closeInfoPopup"></addEditMyAdsId>
        <button class="openlink ml-0" @click="backToMyAds">Назад</button>
        <button class="openlink ml-0 mr-ml-3" @click="showPopupInfo">Редактировать</button>
        <button class="openlink ml-0" @click="doneTask">Завершить</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import EditMyAdsId from './EditMyAdsId.vue'
export default {
  props: ['id'],
  data () {
    return {
      isInfoPopup: false,
      add: ''
    }
  },
  computed: {
    added () {
      const id = this.id
      return this.$store.getters.MyAdsById(id)
    }
  },
  components: {
    addEditMyAdsId: EditMyAdsId
  },
  methods: {
    showPopupInfo () {
      this.isInfoPopup = true
    },
    closeInfoPopup () {
      this.isInfoPopup = false
    },
    backToMyAds () {
      this.$router.push('/MyAds')
    },
    doneTask () {
      this.$store.dispatch('updateTask', {
        ...this.added,
        isDone: true
      })
        .then(() => {
          this.$router.push('/DoneAdd')
        })
    }
  }
}
</script>

<style lang="less">
</style>
