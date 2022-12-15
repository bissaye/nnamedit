<template>
  <div class="Home">
    <ul>
      <li v-for="word in  Object.keys(corrections)" :key="word">
      <label :for="word">{{word}}</label>&nbsp;
        <select :id="word">
          <option v-for="item in corrections[word]" :key="item" :value="item">{{item}}</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['corrections'],
  name: 'CorrectionComp',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Home{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 5px;
  }
</style>
