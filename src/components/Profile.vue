<template>
    <img src="../assets/Header.jpg" class="header">
    <div class="prof">
        <img src="../assets/Profile.jpg" class="profile">
        <h1>Ilham Bintang Nurmansyah</h1>
    </div>
    
</template>

<script>
export default {
    name: 'Profile',
}
</script>

<style scoped>

.header{
    height: 286px;
    width: 100%;
    object-fit: cover;
    object-position: 0% 65%;
}

.profile{
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 200%;
    margin-left: 250px;
    margin-top: -110px;
    display: block;
}
h1{
    font-size: 70px;
    display: block;
    margin-top: 0px;
    margin-left: 100px;
    font-family: Allerta;
}
.prof{
    display: flex;
    align-content: center;
}
</style>