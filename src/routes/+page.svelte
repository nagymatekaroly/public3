<script>
    const {data} = $props()
    var x = $state(0)
</script>

<h1>Cica</h1>
{data.cica}

<form method="POST">
    <div class="ui input">
        <input type="text" name="cica">
    </div>
    <button class="ui red button" formaction="?/cica">Elküld 1</button>
    <button class="ui blue button" formaction="?/kutya">Elküld 2</button>
</form>
<div clas="ui divider" ></div>
<div class="slider">
    <input type="range" min="0" max="100" bind:value={x}>
<div class="ui card">{x}</div>
</div>

<button class="ui red small button"
onclick={() => { fetch('/server',{
    method: 'POST',
    body: JSON.stringify({x, y:1})})
}}>POST</button>