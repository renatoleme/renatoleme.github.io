const app = Vue.createApp({
    data() {
        return {
            topWindow: 1,
            movingWindowRef: '',
            isWindowMoving: false,
            diffX: 0,
            diffY: 0,
            tasks: {
                tbox: [],
                vblog: ['vblog1']
            }
        }
    },
    methods: {
        removeTask(info) {
            console.log(info)
            const index = this.tasks[info.ref].indexOf(info.taskId)
            this.tasks[info.ref].splice(index, 1)
        },
        createTask(task) {
            const taskName = task + (this.tasks[task].length + 1)
            this.tasks[task].push(taskName)
            this.topWindow = this.topWindow + 1
        },
        minimizeWindow(trigger) {
            this.$refs.holder.pushTask(trigger)
        },
        moveEnd() {
            if (this.isWindowMoving) {
                this.$refs[this.movingWindowRef].setOpacity (1)
                this.isWindowMoving = false;
            }
        },
        mouseMove(event) {
            if (this.isWindowMoving) {
                this.$refs[this.movingWindowRef].moveWindow(event, this.diffX, this.diffY);
                this.$refs['vcontext'].closeMenu(event)
            }
        },
        putWindowOnTop(ref) {
            this.topWindow = this.topWindow + 1
            this.$refs[ref].changeZIndex (this.topWindow)  
        },
        moveStart(info) {
            this.diffX = info.diffX;
            this.diffY = info.diffY;
            this.isWindowMoving = true
            this.movingWindowRef = info.ref

            console.log(this.movingWindowRef)
            this.putWindowOnTop(this.movingWindowRef)          

        },
        simpleClick(event) {
            if (event.target.id !== 'vcontext') {
                this.$refs['vcontext'].closeMenu(event)
            }
        },
        rightClickMenu(event) {
            event.preventDefault()
            if (event.target.id === "vdesk") {
                this.$refs['vcontext'].openMenu(event)
            }
        }
    }
})
