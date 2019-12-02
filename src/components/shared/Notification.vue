<template>
    <div>
        <div class="container" style="margin-bottom: 20px">
            <div class="columns">
                <div class="column is-8 offset-4">
                    <div :class=" searchResul ? 'is-danger' : 'is-primary'" class="notification">
                        <slot name="body">Algo salio mal</slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    searchResul: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
