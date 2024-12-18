<script>
    import Card from "../Card.svelte";
    import Logo from "$lib/assets/logo.png";
    import shirt from "$lib/assets/shirt.png";
</script>

<Card
    href="https://1glpnm.csb.app"
    additionalClasses="hover:scale-100 bg-[#fff]"
>
    <div
        class="px-[22px] py-4 flex flex-col justify-end items-start text-gray-800/80 h-full"
    >
        <img
            class="translate-y-6 group-hover:translate-y-0 transition-transform"
            src={Logo}
            alt=""
        />
        <span
            class="z-10 translate-y-6 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold"
            >falconia.design</span
        >
        <p
            class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-gray-800/80 opacity-0 group-hover:opacity-100 transition"
        >
            design the best 3D shirts
        </p>
        <img
            class="absolute top-5 left-20 w-[256px] h-[158px] group-hover:-translate-y-2 transition-transform opacity-60"
            src={shirt}
            alt=""
        />
    </div>
</Card>
