<template>
    <div>
        <h2>{{title}}</h2>
            <img v-bind:src="url">
            <h3>{{title}}</h3>
            <h4>0 visualizaciones</h4>
            <p>{{ desc }}</p>
    </div>
</template>

<script>
export default {
    name: "Show",
    data() {
        return {
            title: null,
            url: null,
            desc: null,
            id: this.$route.params.id
        }
    },

    mounted() {
        fetch(`http://localhost:3000/videos/${this.id}`)
        .then(response => response.json())
        .then(data => {
            this.title = data.title
            this.url = data.url
            this.desc = data.desc
        })
    },
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

*::after, *::before {
  box-sizing: inherit;
}


body {
  margin: 0;
}

div {
    font-family: 'Roboto', sans-serif;
    padding: 2rem;

    & h2 {
        margin: 2rem 0;
    }
    & img {
        display: block;
        width: 100%;
        margin: auto;
    }

    & h3 {
        font-size: 14px;
    }

    & h4 {
        font-size: 11px;
        color: #303030;
    }

    & p {
        font-size: 16px;
        color: #808080;
    }
}

</style>