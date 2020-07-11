<template>
  <div id="app">
    <div id="nav">
      <header>
        <h1>Video Pacha</h1>
        <a href="#/new"><span>Agregar Video</span></a>
      </header>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  box-sizing: border-box;
}

*::after, *::before {
  box-sizing: inherit;
}

body {
  margin: 0;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: tomato;
    color: white;
    font-family: 'Roboto', sans-serif;
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    & h1 {
        margin: 0;
    }

    & a{
        color: white;
        text-decoration: none;
    }
}
</style>
