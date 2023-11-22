<script lang="ts">
    import { ArrowRightSolid } from "flowbite-svelte-icons";
    import ArrowAtom from "../atoms/Arrow.atom.svelte";
    import ExibitionAtom from "../molecules/Exibition.molecule.svelte";
    import YellowCompAtom from "../atoms/YellowComp.atom.svelte";
    import TitleMolecule from "../molecules/Title.molecule.svelte";

    export let is = 3
    const iss = Array.from({length: is}, (x, i) => i+1)
    let names = [{id: 1, name: '1fstt.png'},{id: 2, name: '2fstt.png'},{id: 3, name: '3fstt.png'}];
    let images = ['','','']
</script>

<div class="flex justify-between">
    <TitleMolecule name = {"NEW ARRIVALS"} move = {"left-[160px]"}/>
</div>
<div class="flex-auto">
    <div class="teste justify-around flex pb-[150px]">
        {#each names as item, index (item.id)}
            {#if is > 3}
            0
            {:else}
            <ExibitionAtom/>
            {/if}
        {/each}
    </div>
</div>
<style>



</style>
