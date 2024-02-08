import { Icon } from 'astro-icon';

<Fragment>
<section class="hero my-24">
<div class="container">
<div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
<div class="flex flex-col items-center gap-8 md:items-start">
<h1 class="text-center text-6xl md:text-left lg:text-8xl">
<slot> <span class="text-blue"></span> </slot>
</h1>
<h2>
<span class="text-black">Vote for the </span> <span class="text-yellow">Tippecanoe</span> Way.
<span class="text-black">Vote for Ben Carson.
</span>
<div class="flex flex-col gap-3 min-[500px]:flex-row" id="mycustomid">
<a href="#test2" class="button has-icon">

<Icon pack="ion" name="book-outline" />
Learn more about me

</a>
<a class="button has-icon color-secondary" href="https://secure.actblue.com/donate/bencarson" target="_blank" rel="noreferrer noopener">
<Icon pack="ion" name="wallet-outline" color="white" />
<div class="text-yellow">Donate to our campaign</div>
</a>
</div>
</h2>
<img class="hidden lg:block" src={src} alt="" decoding="async" />
</div>
</div>
</div>

<style lang="scss">{`
  .text-gradient {
    background: linear-gradient(0.25turn,rgb(0, 15, 93), rgb(213, 159, 15));
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-yellow{
    color: hsl(44, 98%,45%)
  }

  .text-blue{
    color: rgb(0,15,93)
  }

  :global(.darkmode .text-gradient) {
    background: linear-gradient(315deg, var(--primary-200) 25%, var(--secondary-400));
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`}</style>

function offsetAnchor() { }
if (location.hash.length !== 0) {window.scrollTo(window.scrollX, window.scrollY - 100)};
  }
}

{
// Click events are captured before hashchanges. Timeout
// causes offsetAnchor to be called after the page jump.
window.setTimeout(function () {
offsetAnchor();
}, 0)};
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);
</section>
</Fragment>;
