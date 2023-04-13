<template>
  <a-layout>

    <!-- 头部 -->
    <a-layout-header class="header">
      <h1 style="color: #fff;">后台管理系统模块</h1>
    </a-layout-header>

    <!-- 内容 -->
    <a-layout>

      <!-- 菜单 -->
      <a-layout-sider width="200" style="background: #fff" :style="layoutStyle">
        <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline">
          <a-sub-menu v-for="menu of menus" :key="menu.key">
            <template #title>
              <span>{{ menu.name }}</span>
            </template>
            <a-menu-item v-for="sub of menu.children" :key="sub.key">
              <router-link :to="sub.url">{{ sub.name }}</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>

      <!-- content -->
      <a-layout style="padding: 20px;" :style="layoutStyle">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px', overflow: 'auto' }">
          <router-view :key="$route.path"></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import * as menusConfig from '../../config/meun'
import { useRoute } from 'vue-router'

const route = useRoute();

const getSelectedKeys = () => {
  const menu = menusConfig.flatMenus.find(menu => menu.url == route.path);
  return menu ? [menu.key] : [];
};

const getOpenKeys = () => {
  const keys = getSelectedKeys();
  if (keys.length === 0) {
    return [];
  }
  const [key] = keys;
  const menu = menusConfig.menus.find(menu => {
    return menu.children?.some(sub => {
      return sub.key == key;
    });
  });
  return menu ? [menu.key] : [];
};
const openKeys = ref<string[]>(getOpenKeys());
const selectedKeys = ref<string[]>(getSelectedKeys());

const menus = computed(() => {
  return menusConfig.menus
});


const layoutStyle = computed(() => {
  return `
    height:calc(100vh - 64px);
  `
})
</script>
 
<style scoped lang="scss">
.ant-layout {
  width: 100%;
  height: 100vh;
}
</style>