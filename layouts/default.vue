<template>
	<div :class="{
		'theme-light': !darkMode,
		'theme-dark': darkMode,
	}" class="h-screen bg-themeBackground p-5">">
		<NavBar />
	</div>
	<div>
		<slot />
	</div>
	<Footer />
</template>

<script setup></script>

<style lang="scss" scoped></style>
