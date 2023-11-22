<script>
    import ArrowAtom from "../atoms/Arrow.atom.svelte";
    export let imgpng = "1fstt.png";
    export let imgt = "w-[491px]"
    export let imgl = "h-[px]"
    export let arrowf ="right-10"
    export let sfactor = ""
    export let imgt2 = ""
    export let imgl2 = ""
    export let title = "Hoodies & Sweetshirtt"
    export let subtitle = "Explore Now!"
</script>

<div class={`teste2 ${imgt} ${imgl}`}>
    <div class={`test`} >
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={`${imgpng}`} class={`${sfactor} ${imgt2} ${imgl2}`}/>
    </div>
    <div class="font flex">
        <div>
            <p class="w-[20rem]">{title}</p>
            <p class="font2">{subtitle}</p>
        </div>
        <button class={`relative ${arrowf}`}>
            <ArrowAtom />
        </button>
    </div>
</div>

<style>
    .teste {
        border-radius: 2px;
    }
    .teste2 {
        
        overflow: hidden;
    }

    .font {
        color: #191919;
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 50px; /* 156.25% */
        letter-spacing: -1.28px;
    }
    .font2 {
        color: #7f7f7f;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 50px; /* 208.333% */
        letter-spacing: -0.96px;
    }
</style>
