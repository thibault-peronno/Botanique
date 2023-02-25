<template>
    <section class="notFound">
        <img src="../../public/icons/seed.png" alt="" class="notFound-img">
        <div>
            <h1>erreur 404</h1>
            <p class="notFound-p">Il semble que tu sois perdu</p>
        </div>
    </section>
    <FooterComponent />
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';

export default {
    components: {
        FooterComponent
    }
}
</script>

<style scoped>
.notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 240px - 35px);
}

.notFound-img {
    width: 35%;
}

.notFound-p {
    text-align: center;
    margin: 10px 0;
}

@media (min-width: 720px) {
    .notFound {
        flex-direction: row;
        justify-content: center;
        min-height: calc(100vh - 240px);
    }

    .notFound-img {
        width: 25%;
    }

    .notFound-p {
        display: block;
        text-align: center;
        margin: 10px 0;
    }
}
</style>