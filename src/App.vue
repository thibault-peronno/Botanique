<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <router-view />
</template>

<script>

export default {
  // async beforeCreate(){
  //   await this.$store.dispatch('getAuthToken');
  // }
}

</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,1000;1,800&display=swap');
@import './assets/varCss.css';

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', 'Lucida Sans', 'Verdana', 'sans-serif';
}

body{
  background-color: var(--primaryBgColor);
}

a {
  text-decoration: none;
  color: var(--texteColorNav)
}

li {
  list-style-type: none;
}

.icon {
  width: 30px;
  height: 30px;
}

header {
  line-height: 1.5;
  height: 100px;
  padding: 15px;
}

h1 {
  font-weight: bolder;
  font-size: 2rem;
  color: var(--titleH1Color);
  margin: 0 0 10px 0;
  text-align: center;
}

h2 {
  font-weight: bolder;
  font-size: 1.8rem;
  color: var(--titleH2Color);
  margin: 0 0 10px 0;
}

h3 {
  font-weight: bolder;
  font-size: 1.4rem;
  color: var(--titleH3color);
  margin: 0 0 10px 0;
}

p {
  font-size: 1.2rem;
  line-height: 1.4em;
  color : var(--texteColor)
}

nav {
  width: 100%;
  /* font-size: 12px; */
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--texteColorNavActif);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
  }

}
</style>
