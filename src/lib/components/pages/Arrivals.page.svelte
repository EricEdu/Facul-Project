<script lang="ts">
    import { ArrowRightSolid } from "flowbite-svelte-icons";
</script>

<div class="flex justify-between">
    <div class="container flex p-6 mx-auto pt-10 pb-20">
        <a
            class="my-2 font-black text-[40px] justify-start text-black-700 transition-colors duration-300 transform dark:text-black-200 md:mx-2 md:my-0"
            href="#">NEW ARRIVALS</a
        >
    </div>
</div>
<div class="flex-auto">
    <div class="teste justify-around flex flex-row">
        <div>
            <img src="1fstt.png" />
            <div class="font">
                <p>Teste & Testess</p>
            </div>
            <p class="font2">Explore Now!</p>
        </div>
        <div>
            <img src="1fstt.png" />
            <div class="font">
                <p>Teste & Testess</p>
            </div>
            <p class="font2">Explore Now!</p>
        </div>
        <div>
            <img src="1fstt.png" />
            <div class="font">
                <p>Teste & Testess</p>
            </div>
            <p class="font2">Explore Now!</p>
        </div>
    </div>
</div>

<style>
    .teste {
        font-family: "Poppins", sans-serif;
        color: #191818;
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
