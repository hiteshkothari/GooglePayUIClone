<!-- <script>
	import { tweened } from 'svelte/motion';
	import {cubicInOut} from 'svelte/easing';
	const area = tweened([0,0,400,400],{easing:cubicInOut, duration:800})
	
	let selected = false
	let width = 100;
	let height = 100;
	let viewBox_width=400;
	let viewBox_height=400;
	const colors = ["#94c356", "#46a4cc", "#a63e4b","#bad2fd"];
	let new_x=0
	let new_y=0

	
	function select(e){
			selected = !selected
			new_x = e.path[0].x.animVal.value
			new_y = e.path[0].y.animVal.value
	}
	function sel() {
		area.set([new_x,new_y,viewBox_width,viewBox_height])
	}
	$: selected ? area.set([new_x,new_y,width,height]) : area.set([0,0,viewBox_width,viewBox_height])
	
</script>

<h1>SVG viewBox animation</h1>
<svg xmlns="http://www.w3.org/2000/svg" width=400 height=400 viewBox={$area}>
	{#each Array(4) as row, row}
		{#each Array(4) as col, col}
			<rect on:click={select} width={width} height={height} x={col*width} y={row*height} fill={colors[(col+row) % colors.length]}></rect>	
			<text x={col * width + width / 2} y={row * height + height / 2}>{col}-{row}</text>
		{/each}
	{/each}
</svg>


<style>
	:global(body) {
		display:flex;
		flex-direction: column;
		align-items:center;
	}
	text {
		font-size: 24px;
		fill: white;
		text-anchor: middle;
		dominant-baseline: middle;
	}	
	
	
</style> -->


<!-- <script>
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      };
    },
  });

  let uid = 1;

  let todos = [
    { id: uid++, done: false, description: "write some docs" },
    { id: uid++, done: false, description: "start writing blog post" },
    { id: uid++, done: true, description: "buy some milk" },
    { id: uid++, done: false, description: "mow the lawn" },
    { id: uid++, done: false, description: "feed the turtle" },
    { id: uid++, done: false, description: "fix some bugs" },
  ];

  function add(input) {
    const todo = {
      id: uid++,
      done: false,
      description: input.value,
    };

    todos = [todo, ...todos];
    input.value = "";
  }

  function remove(todo) {
    todos = todos.filter((t) => t !== todo);
  }

  function mark(todo, done) {
    todo.done = done;
    remove(todo);
    todos = todos.concat(todo);
  }
</script>

<div class="board">
  <input
    placeholder="what needs to be done?"
    on:keydown={(e) => e.key === "Enter" && add(e.target)}
  />

  <div class="left">
    <h2>todo</h2>
    {#each todos.filter((t) => !t.done) as todo (todo.id)}
      <label
        in:receive={{ key: todo.id }}
        out:send={{ key: todo.id }}
        animate:flip
      >
        <input type="checkbox" on:change={() => mark(todo, true)} />
        {todo.description}
        <button on:click={() => remove(todo)}>remove</button>
      </label>
    {/each}
  </div>

  <div class="right">
    <h2>done</h2>
    {#each todos.filter((t) => t.done) as todo (todo.id)}
      <label
        class="done"
        in:receive={{ key: todo.id }}
        out:send={{ key: todo.id }}
        animate:flip
      >
        <input type="checkbox" checked on:change={() => mark(todo, false)} />
        {todo.description}
        <button on:click={() => remove(todo)}>remove</button>
      </label>
    {/each}
  </div>
</div>

<style>
  .board {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    max-width: 36em;
    margin: 0 auto;
  }

  .board > input {
    font-size: 1.4em;
    grid-column: 1/3;
  }

  h2 {
    font-size: 2em;
    font-weight: 200;
    user-select: none;
    margin: 0 0 0.5em 0;
  }

  label {
    position: relative;
    line-height: 1.2;
    padding: 0.5em 2.5em 0.5em 2em;
    margin: 0 0 0.5em 0;
    border-radius: 2px;
    user-select: none;
    border: 1px solid hsl(240, 8%, 70%);
    background-color: hsl(240, 13%, 81%);
    color: #333;
    display: block;
  }

  input[type="checkbox"] {
    position: absolute;
    left: 0.5em;
    top: 0.6em;
    margin: 0;
  }

  .done {
    border: 1px solid hsl(240, 8%, 90%);
    background-color: hsl(240, 8%, 98%);
  }

  button {
    position: absolute;
    top: 0;
    right: 0.2em;
    width: 2em;
    height: 100%;
    background: no-repeat 50% 50%
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 1.4em 1.4em;
    border: none;
    opacity: 0;
    transition: opacity 0.2s;
    text-indent: -9999px;
    cursor: pointer;
  }

  label:hover button {
    opacity: 1;
  }
</style> -->

<!-- 
<script>
  import { quintOut } from "svelte/easing";
  import { fade, draw, fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  export function expand(node, params) {
    const { delay = 0, duration = 400, easing = cubicOut } = params;

    const w = parseFloat(getComputedStyle(node).strokeWidth);

    return {
      delay,
      duration,
      easing,
      css: (t) => `opacity: ${t}; stroke-width: ${t * w}`,
    };
  }

  let visible = true;
</script>
<div class="wrapper">
  {#if visible}
    <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      id="svg5046"
      version="1.1"
      viewBox="0 0 50 50"
      height="50mm"
      width="50mm"
    >
      <defs id="defs5040" />

      <g style="display:inline" id="background">
        <circle
          in:expand={{ duration: 1000, delay: 800, easing: quintOut }}
          r="12.111837"
          cy="272"
          cx="25"
          id="path5042"
          style="opacity:1;fill:#008849;fill-opacity:1;stroke:#008849;stroke-width:25;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          transform="translate(0,-247)"
        />
      </g>

      <g style="display:inline" transform="translate(0,-247)" id="draw-line">
        <path
          in:draw={{ duration: 800 }}
          d="m 18.963249,271.54142 5.11928,5.88254 16.621216,-13.3733 c -4.624996,-7.33644 -9.696966,-10.5123 -18.398843,-9.418 -9.407725,1.18306 -15.8732057,10.07183 -14.7734199,19.63013 1.0997857,9.55831 9.3987219,16.23758 19.2969299,15.20827 11.395441,-1.18501 19.680898,-12.82477 13.875333,-25.4204"
          style="opacity:1;fill:none;stroke:#008849;stroke-width:4.84156466;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
          id="path5046"
        />
      </g>

      <g style="display:inline" id="white-fill">
        <path
          in:fade={{ delay: 800 }}
          d="m 18.963248,24.541422 5.11928,5.88254 16.621217,-13.3733 C 36.078748,9.7142223 31.006779,6.5383623 22.304901,7.6326623 12.897176,8.8157223 6.4316962,17.704492 7.5314812,27.262792 c 1.099786,9.55831 9.3987218,16.23758 19.2969298,15.20827 11.395442,-1.18501 19.6809,-12.82477 13.875334,-25.4204"
          style="display:inline;opacity:1;fill:none;stroke:#ffffff;stroke-width:4.84156513;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers;fill-opacity:1"
          id="path5046-1"
        />
      </g>
    </svg>
  {/if}
</div>

<label>
  <input type="checkbox" bind:checked={visible} />
  toggle me
</label>

<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
/>

<style>
  svg {
    padding-top: 50px;
    padding-left: 50px;
    width: 50%;
    height: 50%;
  }

  path {
    fill: white;
    opacity: 1;
  }

  label {
    position: absolute;
    top: 1em;
    left: 1em;
  }

  .wrapper {
    background-color: #e0e0e0;
    min-height: 100vh;
  }
</style> -->
<!-- <script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>

<progress value={$progress}></progress>

<button on:click="{() => progress.set(0)}">
	0%
</button>

<button on:click="{() => progress.set(0.25)}">
	25%
</button>

<button on:click="{() => progress.set(0.5)}">
	50%
</button>

<button on:click="{() => progress.set(0.75)}">
	75%
</button>

<button on:click="{() => progress.set(1)}">
	100%
</button>

<style>
	progress {
		display: block;
		width: 100%;
	}
</style> -->


<script>
	import { fade } from 'svelte/transition';
	let visible = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p transition:fade>
		Fades in and out
	</p>
{/if}