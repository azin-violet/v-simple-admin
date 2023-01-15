<template>
  <RouterView #default="{ Component, route }">
    <KeepAlive>
      <component :is="Component" :key="route.fullPath" />
    </KeepAlive>
  </RouterView>
</template>
