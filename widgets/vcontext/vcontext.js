app.component('vcontext', {
    data() {
        return {
            visible: false,
            programList: [{
                name: 'Tracktatus.js',
            }],
            contextMenuStyle: {
                background: 'rgb(0,0,0)',
                background: 'linear-gradient(276deg, rgba(85,85,85,1) 3%, rgba(16,16,16,1) 100%, rgba(65,65,65,1) 100%)',
                boxShadow: " 4px 4px 16px 0 black",
                color: 'white',
                width: '200px',
                height: 'fit-content',
                padding: '4px',
                marginTop: 200,
                marginLeft: 200,
                position: 'absolute',
                zIndex: 9999
            },
            listStyle: {
                color: 'transparent'
            },
            buttonStyle: {
                border: 'none',
                background: 'linear-gradient(276deg, rgba(85,85,85,1) 3%, rgba(16,16,16,1) 100%, rgba(65,65,65,1) 100%)',
                color: 'white',
                width: '100%',
                padding: '12px',
                cursor: 'pointer'
            }
        }
    },
    template:
    `<transition name="context">
<div v-if="visible" :style="contextMenuStyle" id="vcontext">

<div class="menu-header" id="vcontext"> <i class="fas fa-bars" id="vcontext"></i>  &nbsp;&nbsp; <i id="vcontext"> Applications Menu </i></div>


<div class="program-list" id="vcontext">
<li v-for="(program, index) in programList" :style="listStyle" id="vcontext">
<ul id="vcontext">
<div id="vcontext">
<button class="btn-program" :style="buttonStyle" v-on:click="openProgram(index)" >{{ program.name }}</button>
</div>
</ul>
</li>
</div>

</div></transition>`,
    methods: {
        openProgram(index) {
            alert('Check-out the development of this website in: https://github.com/renatoleme/renatoleme.github.io')
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
