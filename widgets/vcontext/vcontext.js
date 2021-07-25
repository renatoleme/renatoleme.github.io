app.component('vcontext', {
    data() {
        return {
            visible: false,
            programList: [{
                name: 'Tracktatus.js',
                ref: 'tbox'
            }],
            contextMenuStyle: {
                background: 'rgb(0,0,0)',
                background: 'linear-gradient(276deg, rgba(85,85,85,1) 3%, rgba(16,16,16,1) 100%, rgba(65,65,65,1) 100%)',
                boxShadow: " 4px 4px 16px 0 black",
                color: 'white',
                width: '200px',
                height: 'fit-content',
                marginTop: 200,
                marginLeft: 200,
                position: 'absolute',
                zIndex: 9999
            },
            listStyle: {
                color: 'transparent'
            }
        }
    },
    template:
    `<transition name="context">
<div v-if="visible" :style="contextMenuStyle" id="vcontext">

<div class="menu-header" id="vcontext"> <i class="fas fa-bars" id="vcontext"></i>  &nbsp;&nbsp; <i id="vcontext"> Launch Application </i></div>


<div class="program-list" id="vcontext">
<li v-for="(program, index) in programList" :style="listStyle" id="vcontext">
<ul id="vcontext">
<div id="vcontext">
<button class="btn-program" v-on:click="openProgram(index)" >{{ program.name }}</button>
</div>
</ul>
</li>
</div>

</div></transition>`,
    methods: {
        openProgram(index) {
            this.$emit('open-program', this.programList[index].ref)
        },
        closeMenu(event) {
            this.visible = false
        },
        openMenu(event) {
            this.contextMenuStyle.marginTop = event.clientY
            this.contextMenuStyle.marginLeft = event.clientX
            this.visible = true
        }
    }
})
