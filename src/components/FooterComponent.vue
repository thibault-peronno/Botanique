<template>
    <div class="footer">
        <p class="footer_name">&copy; Thibault PERONNO</p>
        <p class="footer_cda footer_txt">Futur Concepteur et Développeur d'Application</p>
        <p class="footer_dwwm footer_txt">Développeur Web et Web Mobile (Titre RNCP)</p>
        <p class="footer_api footer_txt">API ouverte de <a class="footer_api-a" href="https://trefle.io/"
                target="_blank">Trefle.io</a></p>
        <div class="footer_icons">
            <span id="iconGithub" class="span-icon">
                <a href="https://github.com/Thib-numberX" target="_blank">
                    <img 
                        src="../../public/icons/github.svg"
                        alt=""
                        class="icons_language footer-icons_github"
                    >
                </a>
            </span>
            <span id="iconLinkedin" class="span-icon">
                <a href="https://www.linkedin.com/in/thibault-peronno/" target="_blank">
                    <img 
                        src="../../public/icons/linkedin.svg" 
                        alt=""
                        class="icons_language footer-icons_linkedin"
                    >
                </a>
            </span>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import tooltip from '../utils/tooltip';
// eslint-disable-next-line no-unused-vars
import app from '../utils/app';
</script>

<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid rgb(63, 115, 75);
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
}

.footer_name {
    font-weight: bold;
    color: rgb(63, 115, 75);
}

.footer_txt {
    font-size: 0.8rem;
}

.footer_api-a {
    color: rgb(110, 175, 125);
}

.footer_api-a:hover {
    cursor: pointer;
    color: rgb(63, 115, 75);
}

.icons_language {
    width: 30px;
    margin: 5px 5px 0;
}

.span-icon {
    position: relative;
}

@media (min-width: 780px) {

    .footer {
        position: relative;
        height: max-content;
    }

    .footer_icons {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 20%;
        right: 10px;
    }

    /* .tooltip {
        position: absolute;
        top: 9px;
        right: 65px;
        border: 1px solid;
        padding: 3px;
        border-radius: 5px;
        font-size: 0.7rem;
    } 
    Le scoped ne permet de toucher la class*/
}
</style>