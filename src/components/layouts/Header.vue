<template>
<div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link v-for="link in links" :key="link.name" :to="link.route" class="navbar-item">
                    {{ link.name }}
                </router-link>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <a class="button is-primary">
                    <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                    Log in
                </a>
                </div>
            </div>
            </div>
        </div>
    </nav>
    <section class="hero is-link is-with-navbar">
    <div class="hero-body">
        <div class="container">
        <h2 class="title">
            Music store
        </h2>
        <h3 class="subtitle">Canciones que estan Vue-nisimas</h3>
        <my-player></my-player>
        </div>
    </div>
    </section>
</div>
</template>

<script>
import myPlayer from '../Player'
export default {
  data () {
    return {
      links: [
        { route: '/', name: 'Home' },
        { route: '/about', name: 'About' },
        { route: '/contact', name: 'Contact' }
      ]
    }
  },
  components: {
    myPlayer
  }
}
</script>

<style lang="scss" scoped>
</style>
