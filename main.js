const app = Vue.createApp({
    data() {
        return {
            movingWindowRef: '',
            isWindowMoving: false,
            diffX: 0,
            diffY: 0,
            tbox: ['tbox1']
        }
    },
    methods: {
        removeTask(taskId) {
            const index = this.tbox.indexOf(taskId)
            this.tbox.splice(index, 1)
        },
        createTask(task) {
            this.tbox.push(task + (this.tbox.length + 1))
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
        moveStart(info) {
            this.diffX = info.diffX;
            this.diffY = info.diffY;
            this.isWindowMoving = true
            this.movingWindowRef = info.ref
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
