<template>
    <div class="about" id="About">
        <hr>
        <h1>
            A propos
        </h1>
        <div class="about_text">
            <p class="about_text_green">
                Nnamedit est un correcteur orthographique propre à la langue ewondo, qui pourrait mettre en exergue l'immense richesse de cette langue.  
            </p>
            <p class="about_text_red">
                Il pourrait améliorer la qualité des productions écrites et même de l'apprentissage de la langue.
            </p>
            <p class="about_text_yellow">
                la langue ewondo représente un élément important de la culture camerounaise. Et elle pourrait grâce à cet outil qu'est le correcteur orthographique, intéresser davantage de personnes.
            </p>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'AboutComp',
}
</script>

<style scoped>
    .about{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .about h1{
        color: rgb(3, 41, 93);
        text-align: center;
    }

    .about .about_text {
        display: grid;
    }
    .about .about_text p{
        border: 1px solid rgba(0,0,0, .2);
        border-radius: 50%;
        width: 300px;
        height: 300px;
        text-align: center;
        display: flex;
        align-items: center;
        font-weight: bolder;
    }

    .about .about_text .about_text_green{
        background-color: rgba(114, 253, 114, 0.763);
        color: black;
        grid-column-start: 1;
        grid-column-end: 1;

    }

    .about .about_text .about_text_red{
        background-color: rgb(254, 68, 68);
        color: black;
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 2;

    }

    .about .about_text .about_text_yellow{
        background-color: rgb(253, 253, 136);
        color: black;
        grid-column-start: 3;
        grid-column-end: 3;
    }

    @media screen and (max-width: 900px) {
        .about .about_text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
</style>