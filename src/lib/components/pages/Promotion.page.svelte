<script>
    import ButtonAtom from "../atoms/Button.atom.svelte";
    import PromotionAnuncioAtom from "../atoms/PromotionAnuncio.svelte";
</script>

<div class="teste flex ">
    <div>
        <img src="image12.png" />
    </div>
    <div class="w-5/12 pt-[120px] ml-20">
        <div class="mb-9">
            <div class="z-0 w-[441.43px] h-[150.37px] origin-top-left -rotate-2 bg-white absolute right-[670px] bottom-">
            </div>
            <h3 class="z-40 h-[130px] text-[100px] font-black font-extrabold relative">PAYDAY</h3>
            <h3 class=" text-[100px] font-black font-extrabold">
                SALE NOW
            </h3>
        </div>
        <div class="flex flex-col gap-8">
            <div class="text-[30px] text-stone-900 text-4xl font-medium font-['Poppins']">
                Spend minimal $100 get 30% off<br />
                voucheer code for your next purchase
            </div>
            <div
                class=""
            >
                <PromotionAnuncioAtom/>
            </div>
            <div class="Adjust">
                <ButtonAtom name={"Shop Now"} fsize={"50"} />
            </div>
        </div>
    </div>
</div>

<style>
    .teste {
        background: linear-gradient(
            1deg,
            #e0c340 0.13%,
            #dfc23e 3.97%,
            #e1c441 7.2%,
            #e3c743 10.13%,
            #e4c542 12.98%,
            #e6c744 15.99%,
            #e7c845 19.52%,
            #e5c643 23.96%,
            #e6c945 30.43%,
            #e3c743 36.49%,
            #e9ca48 42.49%,
            #edce49 49.35%,
            #f0d44c 55.42%,
            #f4d84f 61.43%,
            #f6da52 65.74%,
            #f7db53 72.23%,
            #f9dd55 77.43%,
            #f9df56 83.84%,
            #fae157 91.52%,
            #f9df56 97.87%
        );
    }
    img {
        width: 888px;
        height: 868px;
        flex-shrink: 0;
    }
    /* h3 {
        color: #000;
        font-family: Poppins;
        font-size: 100.608px;
        font-style: normal;
        font-weight: 900;
        line-height: 137.185px;
    } */
    .rectangleW {
        width: 541.428px;
        height: 130.373px;
        transform: rotate(-2.004deg);
        flex-shrink: 0;
    }
    /* .font {
        font-family: Poppins;
        font-weight: 900px;
    } */
    .butaod {
        border: solid red;
        width: 200px;
        height: 80px;
    }

    .Adjust {
        /* border: solid red; */
        width: 210px;
        font-size: 25px;
        text-size-adjust: 30%;
        text-align: center;
        font-weight: 100;
    }
</style>
