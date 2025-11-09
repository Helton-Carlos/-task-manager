export default defineNuxtRouteMiddleware((to, _from) => {
  if (to.name !== 'login') {
    return navigateTo('/login');
  }
});
