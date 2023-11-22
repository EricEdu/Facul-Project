<script>
    import YellowCompAtom from "../atoms/YellowComp.atom.svelte";
    import ExibitionAtom from "../molecules/Exibition.molecule.svelte";
    import TitleMolecule from "../molecules/Title.molecule.svelte";

    
</script>
<div class=" justify-between pb-[600px]">
    <TitleMolecule name = {"Young’s Favourite"}/><br>
        <div class="flex justify-around">
            <div class="teste">
                <ExibitionAtom imgpng={"Rectangle 49.png"} imgt={"700"} arrowf={"left-[310px]"}/>
            </div>
            <div class="teste">
                <ExibitionAtom imgpng={"Rectangle 50.png"} imgt={"700"} arrowf={"left-[310px]"}/>
            </div>
        </div>
        
</div>

<style>
        .font {
        color: #191919;
        font-family: Poppins;
        font-size: 29px;
        font-style: normal;
        line-height: 50px; /* 156.25% */
        letter-spacing: -1.28px;
    }
</style>