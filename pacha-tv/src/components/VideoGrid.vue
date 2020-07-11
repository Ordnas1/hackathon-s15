<template>
    <div class="video-grid">
        <div v-for="video in videos" class="video-grid__elem">
                <a :href="'#/edit/' + video.id"><span class=video-grid__edit>&#9998</span></a>
                <span v-on:click="deleteVideo(video.id)" class="video-grid__delete">&#10005</span>
                <img v-bind:src="video.url">
                <h2>{{ video.title }}</h2>
                <h3>0 visualizaciones</h3>
                <p>{{ video.desc }}</p>
                <button v-on:click.prevent="showVideo(video.id)" class=video-grid__btn>Mostrar detalles</button>
            </div>
    </div>

</template>

<script>
export default {
    name: 'VideoGrid',
    props: {
        videos: Array
    },
    methods: {
        showVideo: function (id) {
            window.location.href=`#/video/${id}`      
        },
        deleteVideo: function (id) {
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
              };
            
            fetch(`http://localhost:3000/videos/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => (this.postId = data.id))
            window.location.href = "/"
        }
    },
}
</script>

<style lang="scss">
.video-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, 260px);
    grid-template-rows: auto;
    justify-content: center;
    gap: 10px 10px;

    & a {
        color: inherit;
    }
    
    &__elem {
        position: relative;
        width: 260px;
        height: 420px;
        border: 1px solid #CFCFCF;
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        


        & h2 {
            padding: 0.5rem 1rem;
            font-size: 14px;
            margin: 0
        }

        & h3 {
            padding: 0 1rem;
            margin:0;
            font-size: 11px;
            color: #303030;
        }

        & p {
            font-size: 12px;
            padding: 0.5rem 1rem;
            margin: 0;
            line-height: 18px;
            color: #808080;
        }

        &:hover {
            box-shadow: 0px 0px 8px rgba(146, 146, 146, 0.53);  
        }
    }

    &__edit {
        position: absolute;
        padding: 0.4rem;
        cursor: pointer;
    }

    &__delete {
        position: absolute;
        padding: 0.4rem;
        cursor: pointer;
        right: 0;
    }

    &__btn {
        position: absolute;
        width: 90%;
        bottom: 1%;
        right: 5%;
        padding: 0.7rem;
        border: none;
        background: #00C1AA;
        color: white;
        cursor: pointer;
    }
}
</style>