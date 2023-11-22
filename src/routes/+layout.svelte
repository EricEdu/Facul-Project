<script>
    import "../app.postcss";
    import Homefirstpage from "$lib/components/pages/Home.page.svelte";
    import "@fontsource/poppins";
      import ArrivalsSecondpage from "$lib/components/pages/Arrivals.page.svelte";
      import Promotionpage from "$lib/components/pages/Promotion.page.svelte";
      import Extrapage from "$lib/components/pages/Extra.page.svelte";
      import FooterEndpage from "$lib/components/pages/FooterEnd.page.svelte";
    import NavbarAtom from "$lib/components/organisms/Navbar.organism.svelte";
</script>
<NavbarAtom/>
<slot/>
<FooterEndpage/>



  <style>
      @import url("https://fonts.googleapis.com/css?family=Poppins");
  </style>