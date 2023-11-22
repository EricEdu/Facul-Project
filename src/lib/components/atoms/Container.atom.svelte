<script lang="ts">
    import ButtonAtom from "$lib/components/atoms/Button.atom.svelte";
    import YellowCompAtom from "./YellowComp.atom.svelte";
</script>

<div class="flex items-center justify-center">
    <div class="Teste flex">
        <div class="FlexG flex flex-col">
            <div>
                <div class="rectangle2">
                    <p class="text-[60px] font-black pl-4">LET´S</p>
                </div>
                <p class="text-[60px] font-black pl-4">EXPLORE</p>
                <div class="rectangle">
                    <p class="text-[60px] font-black pl-4">UNIQUE</p>
                </div>
                <p class="text-[60px] font-black pl-4">CLOTHES.</p>
            </div>
            <div class="subtitle my-6">
                <p class="font-bold my-2 text-gray-700 text-[20px] font-medium transition-colors duration-300 transform dark:text-black-200 pl-2">
                    Live for Influential and Innovative fashion!
                </p>
            </div>
            <div class="flex gap-8 mt-10">
                <div class="align-center item-center place-content-center content-center relative top-4">
                    <YellowCompAtom/>
                </div>
                <div class="Adjust">
                    <ButtonAtom name = {"Shop Now"} fsize = {"50"}/>
                </div>
            </div>
        </div>
        <div>
            <img src="incediary.png" />
        </div>
    </div>
</div>

<style>
    .Teste {
        background-color: #f4f6f5;
        width: 80%;
        border-radius: 59px;
    }

    .FlexG {
        width: 40%;
        padding: 90px;
    }
    
    .rectangle {
        width: 300px;
        height: auto;
        transform: rotate(-2deg);
        flex-shrink: 0;
        background: #ebd96b;
    }

    .rectangle2 {
        width: 300px;
        height: 90px;
        transform: rotate(-2deg);
        flex-shrink: 0;
        background: white;
    }

    .subtitle {
        font-family: "Poppins", sans-serif;
        color: #191818;
    }

    .Adjust {
        /* border: solid red; */
        width: 180px;
        font-size: 25px;
        text-size-adjust: 30%;
        text-align: center;
        font-weight: 100;
        
    }
</style>
