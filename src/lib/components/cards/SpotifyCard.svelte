<script>
    import Card from "../Card.svelte";
    import Music from "$lib/assets/music.svg";
    import Spotify from "$lib/assets/spotify.svg";
</script>

<Card
    href="https://open.spotify.com/user/4ipol6ipx5csg6hanjp6tclpk?si=b092754f7c2f4932"
    additionalClasses="hover:scale-100 bg-[#010313]"
>
    <div
        class="px-[22px] py-4 flex flex-col justify-end items-start text-white h-full"
    >
        <img
            class="translate-y-6 group-hover:translate-y-0 transition-transform"
            src={Music}
            alt=""
        />
        <span
            class="translate-y-6 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold"
            >renan.fm</span
        >
        <p
            class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-white/80 opacity-0 group-hover:opacity-100 transition"
        >
            beps and bops
        </p>
        <img
            class="absolute -top-3 left-20 w-[194px] h-[200px] group-hover:-translate-y-2 transition-transform opacity-60"
            src={Spotify}
            alt=""
        />
    </div>
</Card>
