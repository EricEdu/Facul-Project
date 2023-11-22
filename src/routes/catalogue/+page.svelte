<script>
    import Arrow from "$lib/components/atoms/Arrow.atom.svelte";
import Button from "$lib/components/atoms/Button.atom.svelte";
    import PromotionAnuncioAtom from "$lib/components/atoms/PromotionAnuncio.svelte";
    import TitleMolecule from "$lib/components/molecules/Title.molecule.svelte";

</script>
<TitleMolecule name = {"CATALOGUE"} move = {"left-[70px]"}/>
<div class="flex items-center justify-center px-8 pb-10">
    <div class="Teste flex">
        <div class="FlexG flex flex-col">
            <img src="Xmas.jpg" class="w-[9000px] rounded-lg "/>
            <p class="text-[150px] absolute font-bold left-[180px] top-[400px]">
                Christmas <br>promotions</p>
                <div class="absolute bottom-20 left-[300px]">
                    <PromotionAnuncioAtom promtitle="20 Dec - 30 Dec 2021"/>
                </div>
                <button class="bg-black absolute text-white text-[80px]
                 left-[1382px] top-[1070px] rounded-lg
                  transition-colors duration-300 transform dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                    <a href="/fashion">Click Here</a></button>
        </div>
    </div>
</div>
<div class="flex">
    <div class="px-[30px] pb-10">
        <img src="Xmas2.jpeg" class="object-none h-[849px] w-[800px]  rounded-lg"/>
        <p class="text-[70px] absolute top-[1350px] left-[50px] font-bold rounded-lg
        transition-colors duration-300 transform dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
        Join Us Now</p>
    </div>
    <div class="pr-[30px]">
        <img src="Xmas5.jpeg" class="object-none rounded-lg h-[849px] w-[1500px]"/>
        <p class="absolute font-bold text-[100px] top-[1900px] left-[900px]">Discover new styles</p>
    </div>
</div>
<style>
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
    }
    .FlexG {
        width: 100%;
        
    }

    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,800;1,700&display=swap');
</style>