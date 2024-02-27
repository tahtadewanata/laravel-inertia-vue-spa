<template>
    <img :src="imageSource" @error="handleError" alt="Image" />
</template>

<script>
export default {
    data() {
        return {
            imageSource: "img/image-12x.jpg", // Ganti dengan path gambar default Anda
        };
    },
    methods: {
        handleError() {
            // Fungsi ini akan dipanggil ketika gambar tidak ditemukan
            this.imageSource = "img/image-12x.jpg"; // Ganti dengan path gambar default Anda
        },
    },
};
</script>
