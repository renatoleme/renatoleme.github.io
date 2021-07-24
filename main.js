const app = Vue.createApp({
    data() {
        return {
            movingWindowRef: '',
            isWindowMoving: false,
            diffX: 0,
            diffY: 0
        }
    },
    methods: {
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
            console.log(event.target.children)

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
