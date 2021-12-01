<template>
  <div class="container">
    <h1>Добавьте новую задачу</h1>
    <form action="javascript:;">
        <div class="contact_input">
          <input type="text" name="name" v-model="text" @blur="$v.text.$touch()" :class="{'input_error': $v.text.$error}">
          <label class="lbl">Название задачи</label>
          <div class="invalid" v-if="$v.text.$error">Название задачи обязателен!</div>
        </div>
      <div class="contact_textarea">
        <textarea name="text" cols="30" rows="10" v-model="textArea" @blur="$v.textArea.$touch()" :class="{'input_error': $v.textArea.$error}"></textarea>
        <label>Описание задачи</label>
        <div class="invalid" v-if="$v.textArea.$error">Описание задачи обязателен!</div>
      </div>
        <button type="submit" @click="augment" class="contact_btn">Добавить задачу</button>
    </form>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
export default {
  // props: ['newad'],
  data () {
    return {
      text: '',
      textArea: ''
    }
  },
  methods: {
    augment () {
      if (this.text !== '' && this.textArea !== '') {
        const task = {
          text: this.text,
          textArea: this.textArea,
          isDone: false
        }
        this.$store.dispatch('addTask', task)
          .then(() => {
            this.$router.push('/MyAds')
          })
      }
    }
  },
  validations: {
    text: {
      required
    },
    textArea: {
      required
    }
  }
}
</script>

<style lang="less">
</style>
