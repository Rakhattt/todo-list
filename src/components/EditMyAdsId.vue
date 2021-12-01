<template>
  <div class="v-popup-window">
    <div class="v-popup">
      <div class="v-popup-container">
        <div class="v-popup_content">
          <input type="text" v-model="editText">
          <textarea cols="30" rows="10" v-model="editTextarea"></textarea>
        </div>
        <div class="v-popup_footer">
          <button class="btn" @click="onCancel" >Назад</button>
          <button class="btn" @click="onSave">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['added'],
  data () {
    return {
      editText: this.added.text,
      editTextarea: this.added.textArea
    }
  },
  methods: {
    onCancel () {
      this.editText = this.added.text
      this.editTextarea = this.added.textArea
      this.$emit('closePopup')
    },
    onSave () {
      if (this.editText !== '' && this.editTextarea !== '') {
        this.$store.dispatch('updateTask', {
          text: this.editText,
          textArea: this.editTextarea,
          id: this.added.id,
          isDone: false
        })
        this.$emit('closePopup')
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
