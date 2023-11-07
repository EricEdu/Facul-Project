<script lang="ts">
    import TitleAtom from "$lib/components/atoms/HomeName.atom.svelte";
    import HeaderMolecule from "$lib/components/molecules/Header.molecule.svelte"
</script>

<nav class="relative bg-white">
    <div
        class="container px-1 py-4 mx-auto md:flex md:justify-between md:items-center"
    >
        <TitleAtom />
        <div
            class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
        >
        <HeaderMolecule/>    
        </div>
    </div>
</nav>

