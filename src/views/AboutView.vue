<template>
    <section class="container-about">
        <div class="container-about_info">
                <img src="../../public/icons/face.svg" alt="icone représantant le développeur" class="about-info_icons_face">
                <h1 class="about-info_h1">Thibault PERONNO</h1>
                <p>Développeur Web et Web Mobile (Titre RNCP DWWM) et en cours de formation pour le titre de Concepteur et Développeur d'Application (Titre RNCP CDA)</p>
                <p>Comme chaque développeur, j'ai une préfèrence entre le côté client ou serveur. Pour ma part, je suis attiré par le front-end, cela doit être dû à mon penchant pour la créativité, la cuisine, la photographie.</p>
        </div>
        <div class="container-about_site">
            <h2 class="about-site_h3">Pourqoi ce site en VueJs3 ?</h2>
            <p>Ce site n'a vocation qu'à titre pédagogique sur le framework VueJS en version 3. Lors de la formation pour le titre de CDA au sein de l'école <a href="https://oclock.io/" target="_blank">O'Clock</a> nous sommes formés sur des tecnologique back-end et front-end. Cette année, c'est le framework <a href="https://vuejs.org/" target="_blank">VueJs</a> qui a été choisi.</p>
            <p>Bien que la formation intensive nous donne les cartes pour devenir des développeurs employable, je souhaite approndir les techologie abordées lors de la formation. C'est pour cela, j'ai codé ce site.</p>
            <div class="about-site_languages">
                <h2>Langages du site</h2>
                <img src="../../public/icons/vuejs.svg" alt="" class="icons_language">
                <img src="../../public/icons/vitejs.svg" alt="" class="icons_language">
                <img src="../../public/icons/css.svg" alt="" class="icons_language">
        
            </div>
        </div>
        <div class="container-about_languages">
            <h3>Langages et technologies vue lors de mon parcours (formation et entreprise) en tant que développeur</h3>
            <img src="../../public/icons/html.svg" alt="" class="icons_language">
            <img src="../../public/icons/sass.svg" alt="" class="icons_language">
            <img src="../../public/icons/javascript.svg" alt="" class="icons_language">
            <img src="../../public/icons/php.svg" alt="" class="icons_language">
            <img src="../../public/icons/react.svg" alt="" class="icons_language">
            <img src="../../public/icons/redux.svg" alt="" class="icons_language">
            <img src="../../public/icons/angular.svg" alt="" class="icons_language">
            <img src="../../public/icons/laravel.svg" alt="" class="icons_language">
            <img src="../../public/icons/docker.svg" alt="" class="icons_language">
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.container-about{
    padding: 20px;
}

.container-about_info{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 10px 0;
}
.about-info_icons_face{
    width: 200px;
    border-radius: 50%;
    border: 2px solid rgb(63, 115, 75);
    padding: 5px;
    margin: 0 0 30px 0;
}
.about-info_txt{
    margin: 20px 0 0 0;
}
.container-about_info h1 {
	text-align: center;
    width: 100%;
}
.container-about_info p {
	width: 100%;
    text-align: justify;
}

.container-about_site{
    margin: 0 0 20px 0;
}
.container-about_site{
    /*clear permet de dégager le texte en dessus de l'élement flottant */
    /* clear: left; */
}

.about-site_languages{
    margin: 20px 0 0 0;
}

.icons_language{
    width: 50px;
    margin: 20px 10px;
}

@media (min-width: 1024px) {

    .container-about{
        padding: 50px;
    }
    
    .container-about_info{
        display: block;
    }
    .about-info_icons_face{
        float: left;
        margin: 0 10px 50px 0;
        /*Permet de modifier l'écoulement du contour */
        shape-outside: margin-box;
    }
    .about-info_txt{
        display: inline;
    }
    .container-about_info h1 {
        text-align: left;
    }
    .container-about_info p {
        width: 70%;
    }
    
    .container-about_site{
        /*pas de changement avec la version mobil*/
    }
    .container-about_site{
        /*clear permet de dégager le texte en dessus de l'élement flottant */
        clear: left;
    }
    
    .about-site_languages{
        /*pas de changement avec la version mobil*/
    }
    
    .icons_language{
        /*pas de changement avec la version mobil*/
    }
}
</style>