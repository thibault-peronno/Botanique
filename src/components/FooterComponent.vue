<template>
    <div class="footer">
        <p class="footer_name">&copy; Thibault PERONNO</p>
        <p class="footer_cda footer_txt">Futur Concepteur et Développeur d'Application</p>
        <p class="footer_dwwm footer_txt">Développeur Web et Web Mobile (Titre RNCP)</p>
        <p class="footer_api footer_txt">API ouverte de <a class="footer_api-a" href="https://trefle.io/">Trefle.io</a></p>
    </div>
</template>

<script>
export default  {

}
</script>

<style>
.footer{
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

.footer_name{
    font-weight: bold;
    color: rgb(63, 115, 75);
}

.footer_txt{
    font-size: 0.8rem;
}

.footer_api-a{
    color: rgb(110, 175, 125);
}
.footer_api-a:hover{
    cursor: pointer;
    color: rgb(63, 115, 75);
}
</style>