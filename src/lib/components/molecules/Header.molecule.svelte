<script lang="ts">
        import ButtonAtom from "$lib/components/atoms/Button.atom.svelte";
    import RouteshomeAtom from "../atoms/Routeshome.atom.svelte";
</script>

<div class="Navbar">
    <div
        class="flex flex-col md:flex-row md:mx-6 items-center justify-center gap-6"
    >
        <RouteshomeAtom/>
        <div class="Adjust">
        <ButtonAtom />
        </div>
    </div>
</div>

<style>
    .Navbar {
        font-family: "Poppins", sans-serif;
    }
</style>
