const tooltip = {

    init: function () {
        const githubIcon = document.getElementById('iconGithub');
        const linkedinIcon = document.getElementById('iconLinkedin')

        githubIcon.addEventListener('mouseenter', () => { this.handleAddTooltip(githubIcon) });
        githubIcon.addEventListener('mouseleave', () => { this.handleRemoveTooltip(githubIcon)});

        /* cette façon d'écrire ne fonctionne pas si y un argument qui est envoyé à la méthode. Avec les () la méthide est appelé directement et non à l'event 
        githubIcon.addEventListener('mouseenter', this.handleGithub(githubIcon)); */
        // console.log(githubIcon);

        linkedinIcon.addEventListener('mouseenter', ()=>{this.handleAddTooltip(linkedinIcon)})
        linkedinIcon.addEventListener('mouseleave', () => { this.handleRemoveTooltip(linkedinIcon)});

    },

    handleAddTooltip(icon) {
            console.log(icon);
        const newDiv = document.createElement("div");
        let content;
        if(icon.id === 'iconGithub'){
            content = document.createTextNode('Github');
        }else{
            content = document.createTextNode('Linkedin');
        }
        
        // icon.id === 'iconLinkedin' ? content = document.createTextNode('Linkedin') : content = document.createTextNode('Github'); 
        
        newDiv.appendChild(content);
        newDiv.classList.add('tooltip');
        // console.log(newDiv);

        icon.appendChild(newDiv);
    },

    handleRemoveTooltip(){
        const tooltipDiv = document.getElementsByClassName('tooltip');
        // console.log('remove', tooltipDiv);
        for(let t = 0; t < tooltipDiv.length; t++ ){

            tooltipDiv[t].remove();
        }
    }
}

// addEventListener('DOMContentLoaded', tooltip.init);

export default tooltip