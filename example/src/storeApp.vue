

<script>

    import BaseApp from './app.vue';
    import Vuex from 'vuex';
    import History from 'vuex-state-stack';
    import {merge} from 'lodash';

    const store = new Vuex.Store({
        plugins: [History.setOption('subscribe', true)]
    })


    export default merge({}, BaseApp, {store})

</script>