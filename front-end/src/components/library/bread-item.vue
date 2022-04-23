<template>
<!-- 单个面包屑组件 -->
  <div class="bread-item">
    <RouterLink v-if="to" :to="to"><slot /></RouterLink>
    <span v-else><slot /></span>
  </div>
</template>
<script>
export default {
  name: 'BreadItem',
  props: {
    to: {
      type: [String, Object],
      default: ''
    }
  }
}
</script>
