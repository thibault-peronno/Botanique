<template>
    <div class="footer">
        <p class="footer_name">&copy; Thibault PERONNO</p>
        <p class="footer_cda footer_txt">Futur Concepteur et Développeur d'Application</p>
        <p class="footer_dwwm footer_txt">Développeur Web et Web Mobile (Titre RNCP)</p>
        <p class="footer_api footer_txt">API ouverte de <a class="footer_api-a" href="https://trefle.io/"
                target="_blank">Trefle.io</a></p>
        <div class="footer_icons">

            <a href="https://github.com/Thib-numberX" target="_blank">
                <img 
                    src="../../public/icons/github.svg" 
                    alt="" 
                    class="icons_language footer-icons_github"
                    @mouseover="tooltipGithub = true" @mouseleave="tooltipGithub = false"
                >
            </a>
            <span v-if="tooltipGithub" id="iconGithub"  :class="{ tooltipGth : tooltipGithub }">Github</span>
            <a href="https://www.linkedin.com/in/thibault-peronno/" target="_blank">
                <img 
                    src="../../public/icons/linkedin.svg"
                    alt="" 
                    class="icons_language footer-icons_linkedin"
                    @mouseenter="tooltipLinkedin = true" @mouseleave="tooltipLinkedin = false">
            </a>
            <span v-if="tooltipLinkedin" id="iconLinkedin"  :class="{ tooltipLdn : tooltipLinkedin }">LinkedIn</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tooltipGithub: false,
            tooltipLinkedin: false,
        }
    }
}

</script>

<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid var(--borderColor);
    width: 100%;
    background-color: var(--primaryBgColor);
    position: relative;
}

.footer_name {
    font-weight: bold;
    color: var(--titleH3color);
}

.footer_txt {
    font-size: 0.8rem;
}

.footer_api-a {
    color: var(--texteColorNavActif);
}

.footer_api-a:hover {
    cursor: pointer;
    color: var(--linkColor );
}

.icons_language {
    width: 30px;
    margin: 5px 5px 0;
}

#iconLinkedin, #iconGithub {
    display:none;
}

@media (min-width: 780px) {

    .footer {
        /* position: relative; */
        height: 140px;
    }

    .footer_icons {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 20%;
        right: 10px;
    }

    .tooltipLdn {
    position: absolute;
    top: 50px;
    right: 45px;
    background-color: rgb(110, 175, 125);
    border: 2px solid rgb(63, 115, 75);
    color: white;
    padding: 3px;
    font-size: 0.7rem;
    font-weight: 900;
    width: 70px;
    text-align: center;
  }

  .tooltipGth {
    position: absolute;
    top: 8px;
    right: 45px;
    background-color: rgb(110, 175, 125);
    border: 2px solid rgb(63, 115, 75);
    color: white;
    padding: 3px;
    font-size: 0.7rem;
    font-weight: 900;
    width: 70px;
    text-align: center;
  }

  #iconLinkedin, #iconGithub {
    display:block;
}
}
</style>