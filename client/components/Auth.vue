<template>
    <section v-if="auth.isAuthenticated" class="absolute inset-0 flex items-center justify-center bg-blue-500/80">
        <div class="bg-violet-600 p-4 rounded-3xl w-80">
            <!-- Авторизация -->
            <form v-if="auth.toggleAuth" class="flex flex-col gap-2 items-center">
                <h2 class="text-xl font-bold">Авторизация</h2>
                <input class="bg-violet-300 w-full placeholder:text-violet-50 p-2 rounded-lg" type="email" placeholder="E-mail">
                <input class="bg-violet-300 w-full placeholder:text-violet-50 p-2 rounded-lg" type="password" placeholder="Password">
                <input class="bg-violet-400 w-full p-1 rounded-lg" type="submit" value="Sign in">
                <a @click="auth.visualAuth" class="text-xs" href="#">Регистрация</a>
            </form>
            <!-- Регистрация -->
            <form  v-if="!auth.toggleAuth" class="flex flex-col gap-2 items-center">
                <h2 class="text-xl font-bold">Регистрация</h2>
                <input class="bg-violet-300 w-full placeholder:text-violet-50 p-2 rounded-lg" type="email" placeholder="E-mail">
                <input class="bg-violet-300 w-full placeholder:text-violet-50 p-2 rounded-lg" type="password" placeholder="Password">
                <input class="bg-violet-300 w-full placeholder:text-violet-50 p-2 rounded-lg" type="password" placeholder="Also password">
                <input class="bg-violet-400 w-full p-1 rounded-lg" type="submit" value="Sign up">
                <a @click="auth.visualAuth" class="text-xs" href="#">Авторизация</a>
            </form>
        </div>
    </section>
</template>

<script setup>
const auth = useAuthStore()
auth.visualAuth()
</script>