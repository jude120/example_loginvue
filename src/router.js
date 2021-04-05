import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from './store'
Vue.use(Router)

const router = new Router({
  routes,
  //base:"/subcarpeta/", //solo usar en folder y for deploy
  mode: 'history'
});


export default router;router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth) //verificamos si la ruta requiere autorizacion
  const isLogged = store.state.auth.isLogged //vemos si el usuario tiene iniciada la sesion
  const pathlogin="/Login";
  if ( ! requiresAuth && isLogged && to.path.toLowerCase() === pathlogin.toLowerCase()) { //el usuario esta loggeado pero quiere ir a iniciar sesion
      //verificamos que tipo de usuario es 
    const tipo = parseInt(store.state.auth.user.tipo);
      if(tipo==3){
        return next('/hello') //se manda al inicio de tipo de usuario 3
      }else{
        return next('/') //si no se encuentra el tipo de usuario se manda a principal
      }
  } 
  if (requiresAuth && ! isLogged) { //requiere que la sesion este iniciada y el usuario no esta loggeado
    next('/') //mandas a login para que inicie sesion
  } 
  next()
})