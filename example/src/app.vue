<template>
    <div>
        <history :history="history">

        </history>

        <label for="value">
            value:
            <input name="value" @keyup="changed" :value="state.value" ref="value"/>
        </label>
    </div>
</template>

<script>

    import StateStackComponent from '../../src/state-stack-comp.vue';
    import StateStack from 'state-stack';
    import {debounce} from 'lodash';

    export default {

        data: () => ({
            history: new StateStack(),
            state: {}
        }),

        created()
        {
            this.history.setState(this.state);

            this.history.on('changed', () =>
            {
                this.state = this.history.getState();
            })
        },

        components: {
            'history': StateStackComponent
        },

        methods: {
            changed: debounce(function ()
            {
                this.history.startTransaction('change text');
                this.state.value = this.$refs.value.value;
            },100)
        }

    }

</script>