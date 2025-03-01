<script>
    const {data} = $props()
    console.log(data)
</script>

<h1>Cica</h1>
{data.cica}

<form method="POST">
    <div class="ui input">
        <input type="text" name="cica">
    </div>
    <button class="ui red button">Elküld</button>
</form>
