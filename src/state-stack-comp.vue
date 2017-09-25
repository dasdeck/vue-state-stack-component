<template>
    <div>
        <button v-if="history.canUndo()" @click.stop.prevent="history.undo()">undo:{{history.getUndoText()}}</button>
        <button v-if="history.canRedo()" @click.stop.prevent="history.redo()">redo:{{history.getRedoText()}}</button>
    </div>
</template>

<script>
    import StateStack from 'state-stack';

    export default {
        props: {
            history: {
                type: StateStack
            }
        },
        created()
        {
            if (!this.history)
            {
                this.history = this.$store.history;
                if (!this.history)
                {
                    this.history = new StateStack();
                }
            }
        }
    }
</script>