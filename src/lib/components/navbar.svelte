<script>
	import { FileUserIcon, Menu, SignatureIcon } from 'lucide-svelte';
</script>

<div class="fixed top-0 flex w-svw items-center justify-center p-4">
	<nav
		class="navbar flex h-16 w-10/12 max-w-screen-lg items-center
		justify-between rounded-lg bg-background/50 p-4 backdrop-blur"
	>
		<div class="navbar-start">
			<div class="dropdown">
				<button tabindex="0" class="btn btn-square btn-ghost lg:hidden">
					<Menu />
				</button>
				<ul
					role="menu"
					tabindex="0"
					class="menu dropdown-content menu-sm z-[1] mt-3 w-52
					rounded-box bg-base-100 p-2 shadow"
				>
					<li><a href="/">Who am I?</a></li>
					<li><a href="/">My Skills</a></li>
					<li><a href="/">My Projects</a></li>
					<li>
						<button
							class="btn btn-secondary btn-sm gap-0 font-yatra
							font-medium text-secondary-content md:hidden"
						>
							Get My CV<FileUserIcon />
						</button>
					</li>
				</ul>
			</div>
			<a href="/" aria-label="Home">
				<svg
					width="114"
					height="40"
					viewBox="0 0 114 40"
					fill="none"
					class="h-auto w-16 md:w-28"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15.6 4L15.56 4.12L26.28 30.16L21.12 29L18.32 21.68L8.88 22.32L6 30.16L0.4 29L10.08 2.36L15.6 4ZM13.6 9.4L10.16 18.84L17.04 18.36L13.6 9.4ZM53.3691 8.08C54.9957 9.68 55.9424 11.6933 56.2091 14.12C56.5024 16.5467 56.2224 18.8667 55.3691 21.08C54.5157 23.2667 53.2091 25.2267 51.4491 26.96C49.7157 28.6933 47.7957 29.72 45.6891 30.04C45.6357 30.5733 45.6091 30.9733 45.6091 31.24C45.6091 31.4533 45.5957 31.76 45.5691 32.16C45.4091 34.5867 45.5157 36.2 45.8891 37C46.4224 38.0933 47.5691 38.5733 49.3291 38.44C47.8891 38.9733 46.5424 39.08 45.2891 38.76C44.0624 38.4667 43.0357 37.7867 42.2091 36.72C41.4091 35.6533 41.0224 34.4267 41.0491 33.04C41.0491 32.0267 41.1157 30.8933 41.2491 29.64C40.7957 29.48 40.2091 29.2133 39.4891 28.84C39.2757 28.7067 38.8891 28.4933 38.3291 28.2C37.7957 27.9067 37.4091 27.7067 37.1691 27.6C36.9557 27.4667 36.6224 27.2667 36.1691 27C35.7157 26.7067 35.3291 26.4533 35.0091 26.24C34.7157 26 34.3424 25.72 33.8891 25.4C33.4624 25.0533 33.0224 24.68 32.5691 24.28C32.1157 23.88 31.6357 23.4267 31.1291 22.92C30.1424 21.9867 29.4091 20.8667 28.9291 19.56C28.4757 18.2533 28.2624 16.9067 28.2891 15.52C28.3424 14.1333 28.5824 12.7333 29.0091 11.32C29.4357 9.88 30.0224 8.53333 30.7691 7.28C31.5424 6 32.4491 4.86667 33.4891 3.88C34.5291 2.86667 35.6224 2.08 36.7691 1.52C37.9424 0.933331 39.1957 0.639998 40.5291 0.639998C41.8624 0.639998 43.1691 0.986665 44.4491 1.68C47.9157 3.54667 50.8891 5.68 53.3691 8.08ZM47.1291 6.12C45.0491 4.86667 43.0891 4.6 41.2491 5.32C39.4357 6.01333 37.8757 7.32 36.5691 9.24C35.2624 11.16 34.4357 13.28 34.0891 15.6C35.9824 14.96 37.2224 14.6533 37.8091 14.68C38.2357 14.7067 38.8624 15 39.6891 15.56C40.5157 16.12 41.2757 16.6933 41.9691 17.28C42.6624 17.8667 43.4091 18.5333 44.2091 19.28C45.0357 20 45.5157 20.4133 45.6491 20.52C46.1291 20.92 46.3424 22 46.2891 23.76C47.8624 22.2933 49.0491 20.4267 49.8491 18.16C50.6491 15.8933 50.8357 13.6267 50.4091 11.36C50.0091 9.06667 48.9157 7.32 47.1291 6.12ZM40.1291 18.8C39.6491 18.5067 39.0757 18.32 38.4091 18.24C37.7691 18.16 37.0357 18.28 36.2091 18.6C35.4091 18.92 34.7557 19.4933 34.2491 20.32C34.8357 22.4 35.9691 23.9333 37.6491 24.92C38.9291 25.6933 40.2357 26.04 41.5691 25.96C41.7024 24.0133 41.6757 22.4667 41.4891 21.32C41.3291 20.1467 40.8757 19.3067 40.1291 18.8ZM78.8784 2.32L84.4384 3.96V22.68C84.4384 24.2 83.2651 25.84 80.9184 27.6C78.5718 29.3333 76.0784 30.2 73.4384 30.2C71.8651 30.2 69.9184 29.4 67.5984 27.8C65.2784 26.2 63.1451 24.32 61.1984 22.16C61.1718 22.1333 61.1451 21.92 61.1184 21.52C61.0918 21.12 61.0651 20.6 61.0384 19.96C61.0384 19.32 61.0251 18.5733 60.9984 17.72C60.9984 16.8667 60.9984 15.9733 60.9984 15.04C60.9984 14.1067 60.9984 13.1467 60.9984 12.16C60.9984 11.1467 60.9984 10.1867 60.9984 9.28C61.0251 8.34667 61.0384 7.45333 61.0384 6.6C61.0384 5.74667 61.0384 5.01333 61.0384 4.4C61.0651 3.78667 61.0784 3.29333 61.0784 2.92V2.32C61.0784 2.34667 61.5318 2.49333 62.4384 2.76C63.3718 3.02667 64.2918 3.29333 65.1984 3.56L66.5984 3.96C66.4918 17.3467 66.5051 24.12 66.6384 24.28C67.7318 25.4533 69.1318 26.0667 70.8384 26.12C72.5718 26.1467 74.1984 25.6933 75.7184 24.76C77.2384 23.8267 78.2918 22.6267 78.8784 21.16V2.32ZM102.827 4L102.787 4.12L113.507 30.16L108.347 29L105.547 21.68L96.1066 22.32L93.2266 30.16L87.6266 29L97.3066 2.36L102.827 4ZM100.827 9.4L97.3866 18.84L104.267 18.36L100.827 9.4Z"
						fill="#06C0DD"
					/>
				</svg>
			</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal gap-2 px-1">
				<li><a class="btn btn-ghost btn-sm text-lg font-medium" href="/">Who am I?</a></li>
				<li><a class="btn btn-ghost btn-sm text-lg font-medium" href="/">My Skills</a></li>
				<li><a class="btn btn-ghost btn-sm text-lg font-medium" href="/">My Projects</a></li>
			</ul>
		</div>
		<div class="navbar-end flex gap-2">
			<a
				href="/"
				class="btn btn-secondary btn-sm hidden gap-0
				font-yatra text-lg font-bold text-secondary-content md:flex"
				>Get My CV<FileUserIcon />
			</a>
			<div class="group relative">
				<div
					class="btn btn-sm absolute inset-0 bg-primary
					transition-all duration-300 group-hover:blur"
				></div>
				<a
					href="/"
					class="btn btn-primary btn-sm relative gap-0 font-yatra
					font-bold text-primary-content hover:bg-primary md:text-lg"
					>Hire Me<SignatureIcon />
				</a>
			</div>
		</div>
	</nav>
</div>

<style>
	svg path {
		fill: transparent;
		stroke: #06c0dd;
		stroke-width: 1;
		stroke-dasharray: 200;
		stroke-dashoffset: 200;
		animation: textAnimationWhite 2s ease-in-out 1 forwards;
	}
	@keyframes textAnimationWhite {
		0% {
			stroke-dashoffset: 200;
		}
		80% {
			fill: transparent;
			stroke-width: 1;
			stroke-dashoffset: 40;
		}
		100% {
			fill: #06c0dd;
			stroke-dashoffset: 0;
			stroke-width: 0;
		}
	}
</style>
