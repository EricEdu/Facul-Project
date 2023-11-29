<script lang="ts">
    import ButtonAtom from "$lib/components/atoms/Button.atom.svelte";
    import RouteshomeAtom from "../atoms/Routeshome.atom.svelte";
    import GModal from "$lib/components/pages/Login.menu.svelte";
    let showModal = false;
    const handleClose = () => {
        showModal = false;
    }
</script>

<div class="Navbar">
    <div
        class="flex flex-col md:flex-row md:mx-6 items-center justify-center gap-6"
    >
        <RouteshomeAtom/>
        <div class="Adjust">
        <button on:click={() => showModal = true}>
            <ButtonAtom />
        </button>
        </div>
    </div>
</div>

<GModal show={showModal} on:close={handleClose}/>
<style>
    .Navbar {
        font-family: "Poppins", sans-serif;
    }
</style>
