<script>
    import Card from "../Card.svelte";
    import Gengar from "$lib/assets/gengar.png";
    import GengarBg from "$lib/assets/gengar-bg.png";
</script>

<Card
    href="https://pokemon-album-sprite.vercel.app"
    additionalClasses="hover:scale-100 bg-[#14181C]"
>
    <div
        class="px-[22px] py-4 flex flex-col justify-end items-start text-white h-full"
    >
        <img
            class="ml-[-23px] translate-y-6 group-hover:translate-y-0 transition-transform h-14 rendering-pixelated"
            src={Gengar}
            alt=""
        />
        <span
            class="z-10 translate-y-6 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold"
            >pokémon album</span
        >
        <p
            class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-white/80 opacity-0 group-hover:opacity-100 transition"
        >
            sprite viewer
        </p>
        <img
            class="absolute -top-2 right-0 w-[160px] h-[160px] group-hover:-translate-y-2 transition-transform opacity-60 rendering-pixelated"
            src={GengarBg}
            alt=""
        />
    </div>
</Card>
