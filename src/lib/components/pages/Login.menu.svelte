<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { User } from "../../../routes/models/User";
    import { Post } from "../../../services/UserService";


    export let show = true;
    const dispatch = createEventDispatcher();
    const close = () => {
        show = false;
        dispatch('close')
    };
    let Register = false
    debugger
    let item: User = {
        name: "",
        email: "",
        password: "",
        status: true,
    };

    // async function Login() {
    //     if(item){
    //         if(item.email ==  && item.password)
    //     }
    // }

    async function Criar() {
        debugger;
        let retorno = await Post(item);
            if (retorno) {
                alert("Criou");
            }
    }
</script>

{#if show}
  
    <div class="modal-wrapper static">
        <div
            class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md white:bg-gray-800"
        >
        
            <div class="px-6 py-4">
                <div on:click={close} >
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 384 512">
                        <!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <div class="flex justify-center mx-auto">
                    <img
                        class="w-auto h-7 sm:h-8"
                        src="Vector.png"
                        alt=""
                    />
                </div>

                <h3
                    class="mt-3 text-xl font-medium text-center text-gray-600 white:text-gray-200"
                >
                    Welcome Back
                </h3>

                <p class="mt-1 text-center text-gray-500 white:text-gray-400">
                    Login or create account
                </p>

                <form>
                    {#if Register == true}
                    <div class="w-full mt-4">
                        <input
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg white:bg-gray-800 white:border-gray-600 white:placeholder-gray-400 focus:border-blue-400 white:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="Name"
                            placeholder="Name Address"
                            aria-label="Name Address"
                            bind:value={item.name}
                        />
                    </div>
                    {/if}
                    <div class="w-full mt-4">
                        <input
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg white:bg-gray-800 white:border-gray-600 white:placeholder-gray-400 focus:border-blue-400 white:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                            bind:value={item.email}
                        />
                    </div>
                    <div class="w-full mt-4">
                        <input
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg white:bg-gray-800 white:border-gray-600 white:placeholder-gray-400 focus:border-blue-400 white:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            bind:value={item.password}
                        />
                    </div>

                    <div class="flex items-center justify-between mt-4">
                        <a
                            href="#"
                            class="text-sm text-gray-600 white:text-gray-200 hover:text-gray-500"
                            >Forget Password?</a
                        >

                        <button
                            on:click={Criar}
                            on:click={close}
                            class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>

            <div
                class="flex items-center justify-center py-4 text-center bg-gray-50 white:bg-gray-700"
            >   
                {#if Register == false}
                    <span class="text-sm text-gray-600 white:text-gray-200"
                    >Don't have an account?
                    </span>

                    <a  
                    on:click={() => Register = true}
                    href="#"
                    class="mx-2 text-sm font-bold text-blue-500 white:text-blue-400 hover:underline"
                    >Register</a
                    >
                {:else}
                    <span class="text-sm text-gray-600 white:text-gray-200"
                    >Your have an account?
                    </span>

                    <a  
                    on:click={() => Register = false}
                    href="#"
                    class="mx-2 text-sm font-bold text-blue-500 white:text-blue-400 hover:underline"
                    >log in</a
                    >
                {/if}



            </div>
        </div>
    </div>
{/if}

<style>
    .modal-wrapper {
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 100px;
        left: 75px;
    }
</style>
