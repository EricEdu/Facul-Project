<script lang="ts">
        import ButtonAtom from "$lib/components/atoms/Button.atom.svelte";
</script>

<div class="Navbar">
    <div
        class="flex flex-col md:flex-row md:mx-6 items-center justify-center gap-6"
    >
        <a
            class="my-2 text-gray-700 text-[17px] font-bold transition-colors duration-300 transform dark:text-black-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            href="#">CATALOGUE</a
        >
        <a
            class="my-2 text-gray-700 text-[17px] font-bold transition-colors duration-300 transform dark:text-black-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            href="#">FASHION</a
        >
        <a
            class="my-2 text-gray-700 text-[17px] font-bold transition-colors duration-300 transform dark:text-black-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            href="#">FAVOURITE</a
        >
        <a
            class="my-2 text-gray-700 text-[17px] font-bold transition-colors duration-300 transform dark:text-black-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            href="#">LIFESTYLE</a
        >
        <ButtonAtom />
    </div>
</div>

<style>
    .Navbar {
        font-family: "Poppins", sans-serif;
    }
</style>
