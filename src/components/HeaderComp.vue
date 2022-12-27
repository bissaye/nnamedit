<template>
    <div class="header">
        <div class="header_logo">
            <img src="../assets/logo.png" class="header_logo_img"/>
        </div>
        <div class="header_links">
            <span class="header_links_item">
                <router-link :to="{name: 'App', hash: '#Home'}">
                    Accueil
                </router-link>
            </span>
            <span class="header_links_item">
                <router-link :to="{name: 'App', hash: '#About'}">
                    A propos
                </router-link>
            </span>
            <span class="header_links_item">
                <router-link :to="{name: 'App', hash: '#Editor'}">
                    Editeur
                </router-link>
            </span>
        </div>
    </div>
</template>
  
<script>
export default {
name: 'HeaderComp',
}
</script>

<style scoped>
.header{
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 5px;
    background-color: rgba(227, 232, 255, 0.967);
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 100%;
    top:0;
}
.header_links_item a{
    font-weight: bold;
    color: #2c3e50;
    margin: 5px;
}
.header_links_item a.router-link-exact-active {
  color: #42b983;
}
.header_logo_img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin:auto;
}
</style>
  