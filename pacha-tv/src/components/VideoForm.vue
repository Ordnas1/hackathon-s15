<template>
    <div class="form">
        <h2 class="form__title">Editar Video</h2>
            <hr>
            <form action="" method="POST">
                <div class="form-row">
                    <input v-model="title" type="text" name="title" id="title" placeholder="Título">
                    <input v-model="url" type="url" name="url" id="url" placeholder="Url">
                </div>
                <textarea v-model="desc" name="desc" id="desc" cols="30" rows="10"></textarea>
                <div class="form-row form-row--btn">
                    <button v-on:click.prevent="sendVideo" class="form-row__btn form-row__btn--send">Editar</button>
                    <button class="form-row__btn">Cancelar</button>
                </div>
            </form>  
    </div>
</template>

<script>
export default {
    name: "VideoForm",
    props: ["title", "url", "desc"]
}
</script>

<style lang="scss">
.form {

    font-family: 'Roboto', sans-serif;
    width: 50%;
    margin: auto;

    &__title{
        text-align: center;
    }

    & .form-row {
        display: flex;
        justify-content: space-between;
        margin: 0 0 1rem 0;

        &--btn {
            justify-content: center;
        }

        &__btn {
            margin: 1rem;
            background-color: #C4C4C4;
            border: none;
            padding: 1rem 1.4rem;
            font-size: 14px;
            cursor: pointer;

            &--send {
                background: #FF5252;
                color: white
            }
        }
    }

     & input {
        width: 49%;
    }

    & textarea {
        width: 100%;
    }

}
</style>