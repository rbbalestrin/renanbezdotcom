<script>
    import Card from "./Card.svelte";
    import Particles from "$lib/assets/aptaparticles.png";
    import AptaLogo from "$lib/assets/aptalogo.png";
</script>

<Card href="https://apta.agency" additionalClasses="hover:scale-100 bg-[#eee]">
    <div
        class="px-[22px] py-4 flex flex-col justify-end items-start text-gray-800/80 h-full"
    >
        <img
            class="translate-y-6 group-hover:translate-y-0 transition-transform"
            src={AptaLogo}
            alt=""
        />
        <span
            class="z-10 translate-y-6 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold"
            >(prev.) apta.agency</span
        >
        <p
            class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-gray-800/80 opacity-0 group-hover:opacity-100 transition"
        >
            developer
        </p>
        <img
            class="absolute top-0 left-20 w-[256px] h-[158px] group-hover:-translate-y-2 transition-transform opacity-60"
            src={Particles}
            alt=""
        />
    </div>
</Card>
