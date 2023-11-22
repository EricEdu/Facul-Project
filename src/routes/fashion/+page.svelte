<script lang="ts">
    import ExibitionAtom from "$lib/components/molecules/Exibition.molecule.svelte";
    import TitleMolecule from "$lib/components/molecules/Title.molecule.svelte";
    import { onMount } from "svelte";
    import { GetAll } from "../../services/ProductService";
    import type { Product } from "../models/Product";

    let itens: Product[] = [];
    
    onMount(async () => {
        await loadAll();
        console.log(itens);
        debugger
        // Iterar sobre itens e acessar as propriedades de cada objeto
       await iterateItems(itens);
    });

    function iterateItems(itens: Product[]) {
        itens.forEach(item => {
            console.log(item.title);
            console.log(item.subtitle);
            // Adicione outras propriedades conforme necessário
        });
    }

    const lst = [];  
     

    async function loadAll() {
        itens = await GetAll();
    }
</script>

<TitleMolecule name="FASHION" move="left-[70px]"/>
<div class="flex flex-wrap justify-around">
    {#each Array(itens) as itemmocado}
        <div class="vTable px-10 py-10">
            <ExibitionAtom
                imgpng={"1fstt.png"}
                sfactor="object-none object-center"
                imgt2="w-[900px]"
                imgl2="h-[500px]"
                title={itemmocado.data.title}
                subtitle={itemmocado.data.subtitle}
            />
        </div>
    {/each}
</div>
