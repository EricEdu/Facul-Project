<script lang="ts">
    export let name = "SIGN UP"
    export let fsize = "17"
    export let fsecret = ""
</script>

<div class={"bg-black p-2 px-0 rounded-md"}>
    <button
        class={`my-2 text-gray-700 text-[${fsize}px] font-['Poppins'] transition-colors duration-300 transform dark:text-white hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 ${fsecret}`}
        >{name}</button
    >
</div>
