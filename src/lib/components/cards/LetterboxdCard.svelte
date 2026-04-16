<script>
    import Card from "../Card.svelte";
    import Letterboxd from "$lib/assets/letterboxd.svg";
</script>

<Card
    href="https://letterboxd.com/rbbalestrin/"
    additionalClasses="hover:scale-100 bg-[#14181C]"
>
    <div
        class="px-[22px] py-4 flex flex-col justify-end items-start text-white h-full"
    >
        <img
            class="translate-y-6 group-hover:translate-y-0 transition-transform w-16 h-16 pt-[30px]"
            src={Letterboxd}
            alt=""
        />
        <span
            class="z-10 translate-y-6 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold"
            >letterboxd</span
        >
        <p
            class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-white/80 opacity-0 group-hover:opacity-100 transition"
        >
            movie diary
        </p>
    </div>
</Card>
