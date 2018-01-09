<template>
    <div>
        <div class="div-empty-claims"></div>
        <div class="div-form-claims">
            <form action="">
                <h1>Quejas y reclamos</h1>
                <div class="div-father-claims">
                    <label for="">Input1</label>
                    <input type="text">
                </div>
                <div class="div-father-claims">
                    <label for="">Input2</label>
                    <input type="text">
                </div>
                <div class="div-father-claims">
                    <label for="">Input3</label>
                    <input type="text">
                </div>
                <div class="div-father-claims">
                    <label for="">Input4</label>
                    <input type="text">
                </div>  
                <button>Enviar</button>             
            </form>
        </div>
        <div class="div-empty-claims2"></div>
    </div>
</template>
<script>
export default {
	name: 'Claims',
	data () {
		return {
			tittle : 'Blog de soportica'
		}
	}
}
</script>

