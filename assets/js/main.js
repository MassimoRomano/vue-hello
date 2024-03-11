const { createApp, ref } = Vue



createApp({
    data() {
        const img = ref('./assets/img/img.jpg ')
        return {
            message: 'Hello Vue!' ,
            img,
            
        }
    }

}).mount('#app')






