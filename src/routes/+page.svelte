<script lang="ts">
	import NotchEdge from "$lib/assets/notch-edge.svg";
	import EmptyCard from "$lib/components/EmptyCard.svelte";
	import MoreSoonCard from "$lib/components/MoreSoonCard.svelte";
	import { onMount } from "svelte";
	import FalconiaCard from "$lib/components/FalconiaCard.svelte";
	import GithubCard from "$lib/components/cards/GithubCard.svelte";
	import SpotifyCard from "$lib/components/cards/SpotifyCard.svelte";
	import MiiChannel from "$lib/components/cards/MiiChannel.svelte";
	import Cypress from "$lib/components/cards/CypressCard.svelte";
	import Twitter from "$lib/assets/twitter.svg";
	import Email from "$lib/assets/email.svg";
	import AptaCard from "$lib/components/AptaCard.svelte";

	onMount(() => {
		const container: HTMLElement | null =
			document.querySelector(".horizontal-scroll");

		const handleWheel = (e: WheelEvent) => {
			if (e.deltaY && container) {
				e.preventDefault(); // Prevents vertical scroll
				container.scrollLeft += e.deltaY * 0.4; // Adjust scrolling speed
			}
		};

		// Add wheel event listener for desktop
		container?.addEventListener("wheel", handleWheel);

		// Add touch event listeners for mobile
		let startX: number;
		let scrollLeft: number;

		const touchStart = (e: TouchEvent) => {
			if (!container) return;
			startX = e.touches[0].pageX - container.offsetLeft;
			scrollLeft = container.scrollLeft;
		};

		const touchMove = (e: TouchEvent) => {
			if (!container) return;
			e.preventDefault();
			const x = e.touches[0].pageX - container.offsetLeft;
			const walk = (x - startX) * 2; // Adjust scrolling speed
			container.scrollLeft = scrollLeft - walk;
		};

		container?.addEventListener("touchstart", touchStart);
		container?.addEventListener("touchmove", touchMove);

		return () => {
			// Clean up
			container?.removeEventListener("wheel", handleWheel);
			container?.removeEventListener("touchstart", touchStart);
			container?.removeEventListener("touchmove", touchMove);
		};
	});
</script>

<main class="h-screen fixed w-screen overflow-hidden flex flex-col">
	<div
		class="flex flex-col justify-start items-start m-auto max-w-7xl relative w-full"
	>
		<div
			class="hidden md:block absolute top-0 bottom-0 right-0 w-14 bg-gradient-to-r from-transparent to-[#EEEEEE] z-10"
		/>
		<div
			class="hidden md:block absolute top-0 bottom-0 left-0 w-14 bg-gradient-to-l from-transparent to-[#EEEEEE] z-10"
		/>
		<div
			class="fade-in-right grid grid-rows-3 sm:grid-rows-2 md:grid-rows-3 grid-flow-col gap-4 sm:gap-4 p-2 px-2 sm:px-4 md:p-8 md:px-14 w-full max-w-7xl mx-auto horizontal-scroll"
		>
			<MoreSoonCard />
			<Cypress />
			<SpotifyCard />

			<GithubCard />
			<FalconiaCard />
			<MiiChannel />
			<AptaCard />

			<EmptyCard />
			<EmptyCard />

			<EmptyCard soft={true} />
			<EmptyCard soft={true} />
			<EmptyCard soft={true} />
			<EmptyCard soft={true} />
			<EmptyCard soft={true} />
			<EmptyCard soft={true} />
		</div>
	</div>

	<div class="w-full flex flex-col sm:mb-0 relative fade-in-bottom">
		<a
			href="https://twitter.com/themirsbible"
			class="z-10 absolute transition-all shadow-md hover:shadow-lg rounded-full flex ring-1 hover:ring-4 ring-[#C5C7CA] hover:ring-blue-400 bg-[#EEEEEE] w-10 h-10 sm:h-20 sm:w-20 top-2.5 left-2.5 sm:top-6 sm:left-6"
		>
			<img class="m-auto" src={Twitter} alt="" />
		</a>
		<a
			href="mailto:therealrenanbez@gmail.com"
			class="z-10 absolute transition-all shadow-md hover:shadow-lg rounded-full flex ring-1 hover:ring-4 ring-[#C5C7CA] hover:ring-blue-400 bg-[#EEEEEE] w-10 h-10 sm:h-20 sm:w-20 top-2.5 right-2.5 sm:top-6 sm:right-6"
		>
			<img class="m-auto" src={Email} alt="" />
		</a>
		<p
			class="absolute left-0 right-0 bottom-2 sm:bottom-6 text-sm font-medium text-center whitespace-nowrap text-[#010313]/30"
		>
			not affiliated with nintendo
		</p>
		<div class="flex">
			<div class="w-full overflow-hidden bg-[#DBDCDD] h-[50px] sm:h-[70px]" />
			<img
				class="w-[122px] h-[50px] sm:w-[170px] sm:h-[70px] -scale-x-100"
				src={NotchEdge}
				alt=""
			/>
			<div class=" sm:w-[100rem]">
				<p
					class="text-xl sm:text-2xl font-medium text-center whitespace-nowrap text-[#010313]/50 translate-y-3 w-full"
				>
					renanbez.com
				</p>
				<!-- <p
          class="text-sm font-medium text-center whitespace-nowrap text-[#010313]/30 translate-y-3 w-full"
        >
          not affiliated with nintendo
        </p> -->
			</div>
			<img
				class="w-[122px] h-[50px] sm:w-[170px] sm:h-[70px]"
				src={NotchEdge}
				alt=""
			/>
			<div class="w-full bg-[#DBDCDD] h-[50px] sm:h-[70px]" />
		</div>
		<div class="w-full bg-[#DBDCDD] h-[40px] sm:min-h-[70px]" />
	</div>
	<div class="block sm:hidden w-full h-8 bg-[#DBDCDD]" />
</main>

<style>
	.horizontal-scroll {
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
		scrollbar-width: none; /* For Firefox */
		-ms-overflow-style: none; /* For Internet Explorer and Edge */
		-webkit-overflow-scrolling: touch; /* Improved touch scrolling */
	}

	.horizontal-scroll::-webkit-scrollbar {
		width: 0px; /* For Chrome, Safari, and Opera */
	}

	@media (max-width: 640px) {
		.horizontal-scroll {
			scroll-snap-type: x mandatory;
		}

		.horizontal-scroll > :global(*) {
			scroll-snap-align: start;
		}
	}
</style>
