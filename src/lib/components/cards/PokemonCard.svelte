<script>
    import Card from "../Card.svelte";
    import Pokeball from "$lib/assets/pokeball.png";
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
            class="ml-[-10px] mb-[-10px] translate-y-6 group-hover:translate-y-0 transition-transform h-12 rendering-pixelated"
            src={Pokeball}
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
            class="absolute -top-24 -right-16 w-[350px] h-[350px] group-hover:-translate-y-2 transition-transform opacity-60 rendering-pixelated"
            style="-webkit-mask-image: linear-gradient(to bottom, #000 0%, transparent 75%); mask-image: linear-gradient(to bottom, #000 0%, transparent 75%);"
            src={GengarBg}
            alt=""
        />
    </div>
</Card>
