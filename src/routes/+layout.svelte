<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import Cursor from "$lib/components/Cursor.svelte";
    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";

    inject({ mode: dev ? "development" : "production" });

    onMount(() => {
        if ("paintWorklet" in CSS) {
            //@ts-ignore
            CSS.paintWorklet.addModule("/squircle.js");
        }
    });
</script>

<svelte:head>
    <title>renan</title>
    <meta name="description" content="fullstack designer" />

    <meta property="og:url" content="https://www.renanbez.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="my portfolio" />
    <meta property="og:image" content="https://www.renanbez.com/og.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="renanbez.com" />
    <meta property="twitter:url" content="https://www.renanbez.com/" />
    <meta name="twitter:title" content="renan" />
    <meta name="twitter:description" content="fullstack designer" />
    <meta name="twitter:image" content="https://www.renanbez.com/og.png" />
</svelte:head>
<div class="crt">
    <Cursor />
    <slot />
</div>
