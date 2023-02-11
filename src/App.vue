<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style >

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,1000;1,800&display=swap');

*, ::after, ::before{
    margin :0;
    padding : 0;
    box-sizing: border-box;
    font-family: 'Nunito', 'Lucida Sans', 'Verdana', 'sans-serif';
}

a{
    text-decoration: none;
    color: rgb(110, 175, 125);
}

li{
    list-style-type: none;
}

.icon{
    width:30px;
    height:30px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 25px;
}

h1 {
  font-weight: bolder;
  font-size: 2rem;
  color: rgb(110, 175, 125);
  margin: 0 0 10px 0;
  text-align: center;
}

h2{
  font-weight: bolder;
  font-size: 1.8rem;
  color: rgb(63, 115, 75);
  margin: 0 0 10px 0;
}

h3{
  font-weight: bolder;
  font-size: 1.4rem;
  color: rgb(110, 175, 125);
  margin: 0 0 10px 0;
}

p{
  font-size: 1.2rem;
  line-height: 1.4em;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
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
    margin-top: 1rem;
  }
}
</style>
