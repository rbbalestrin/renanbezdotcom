<script>
    import Card from "../Card.svelte";
    import Substack from "$lib/assets/substack.svg";
    import SubstackBg from "$lib/assets/substack-bg.png";
</script>

<Card
    href="https://renanbez.substack.com/"
    additionalClasses="hover:scale-100"
>
    <img
        class="absolute inset-0 w-full h-full object-cover"
        src={SubstackBg}
        alt=""
    />
    <div
        class="px-[22px] py-4 flex flex-col justify-end items-start text-white h-full relative"
    >
        <img
            class="translate-y-6 group-hover:translate-y-0 transition-transform w-10 h-10"
            src={Substack}
            alt=""
        />
        <span
            class="z-10 translate-y-6 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold"
            >substack</span
        >
        <p
            class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-white/80 opacity-0 group-hover:opacity-100 transition"
        >
            i write sometimes
        </p>
    </div>
</Card>
