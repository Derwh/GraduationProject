<template>
  <!-- 顶部 -->
  <AppTopnav />

  <!-- 头部 -->
  <AppHeader />

  <!-- 头部吸顶 -->
  <AppHeaderSticky />

  <main>
    <!-- 二级路由 -->
    <router-view> </router-view>
  </main>

  <!-- 底部 -->
  <AppFooter />

</template>

<script>

import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'

export default {
  name: 'shop-layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  // 获取头部分类数据
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped>
</style>>
