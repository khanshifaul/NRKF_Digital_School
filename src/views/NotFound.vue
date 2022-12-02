<template>
    <div class="grid relative text-center text-2xl">
        <div class="my-6">
            <p class="font-extrabold text-7xl font-Acme">404</p>
            <p> Oops! This Page Could Not Be Found</p>
            <p> Sorry! The page you are looking for does not exist, have been removed, name changed or is temporarily
                unavailable.</p>
            <div class="p-4">
                <router-link class="bg-[#fb2576] p-2 rounded font-semibold" :to="{ name: 'home' }">Go to
                    Homepage</router-link>
            </div>
        </div>
    </div>
</template>  