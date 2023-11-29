<script lang="ts">
    import ExibitionAtom from "$lib/components/molecules/Exibition.molecule.svelte";
    import TitleMolecule from "$lib/components/molecules/Title.molecule.svelte";
    import { onMount } from "svelte";
    import { Edit, GetAll } from "../../services/ProductService";
    import type { Product } from "../models/Product";
    import type { AxiosResponse } from "axios";
    import { http } from "../../api";

    let itens: Product[] = [];
    let date = [] 
    let item: Product = {
        id: 0,
        thumbpainel: "",
        title: "",
        subtitle: "",
        IsFav: false,
        discounstringt: "",
    };

    // let titles = [];
    // let subtitles = [];
    // itens.data.forEach((e)=>{titles.push(e.title)});
    // itens.data.forEach((e)=>{subtitles.push(e.subtitle)});
    
    onMount(async () => {
        await loadAll();
        console.log(itens[0].IsFav)
        debugger
        // Iterar sobre itens e acessar as propriedades de cada objeto
    });
    
    async function loadAll() {
        debugger
        itens = await GetAll();
        itens = itens.data;
        console.log(itens[0].IsFav)
        debugger
        
    }

    async function IsFavUpdate() {
        if (item.id) {
            let retorno = await Edit(item, item.id);
            debugger
            item.IsFav = false
            itens.IsFav = false
            debugger
            if (retorno) {
                alert("Editou");
            }
        }
    }


    
</script>

<TitleMolecule name="FAVOURITE" move="left-[70px]"/>
<div class="flex flex-wrap justify-around">
    {#each itens as i}
    {#if i.IsFav == true}
        <div class="vTable px-10 py-10">
            {#if i.IsFav == true} 
            <button on:click={() => i.IsFav = false} class="relative  top-[80px] left-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" height="66" width="66" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
            </button>
            {/if}
            {i.IsFav = item.IsFav}
            <ExibitionAtom
                imgpng={"1fstt.png"}
                imgt2="w-[900px]"
                imgl2="h-[500px]"
                title={i.title}
                subtitle={i.subtitle}
            />
        </div>
        {/if}
    {/each}
</div>

