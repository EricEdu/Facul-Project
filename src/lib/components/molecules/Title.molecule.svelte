<script>
    import YellowCompAtom from "../atoms/YellowComp.atom.svelte";

    export let name = ""
    export let move = "left-[190px]"

</script>
<div class="container flex  mx-auto pt-10 pb-20 relative right-[180px]">
    <a
        class="my-2 font-black text-[40px] justify-start text-black-700 transition-colors duration-300 transform dark:text-black-200 md:mx-2 md:my-0 z-10"
        href="/fashion">{name}</a
    >
    <div class={`absolute bottom-1 top-16 ${move}`}>
        <YellowCompAtom/>
    </div>
</div>