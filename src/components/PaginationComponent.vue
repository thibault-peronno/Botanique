<template>
    <section class="sectionPagination">
        <div v-if="this.$store.state.pages  > 1" class="pagination prev" v-on:click="handlePrevious" >
            <span data-pagination="previous">
                &#12296;
            </span>
        </div>
        <div class="pagination "
            v-if="this.$store.state.pages > 2" @click="handlePage">
            {{ isFirst }}
        </div>
        <p v-if="this.$store.state.pages > 3" class="etc">...</p>
        <div v-if="isPrev !=''" class="pagination"  @click="handlePage">
            {{ isPrev }}
        </div>
        <div class="pagination paginationCurrent"  @click="handlePage">
            {{ this.$store.state.pages }}
        </div>
        <div v-if="isNext !=''" class="pagination">
            <span>
                {{ isNext }}
            </span>
        </div>
        <div v-if="isLast != this.$store.state.pages" class="pagination"  @click="handlePage">
            <span>
                {{ isLast }}
            </span>
        </div>
        <div class="pagination next" @click="handleNext">
            <span>
                &#12297;
            </span>
        </div>
    </section>
</template>

<script>
export default {
    data() {

        return {
            // self: this.$store.state.plantsList.links.self,
            // first: this.$store.state.plantsList.links.first,
            // prev: this.$store.state.plantsList.links.prev,
            // next: this.$store.state.plantsList.links.next,
            // last: this.$store.state.plantsList.links.last,
        }
    },

    methods: {
        handlePrevious() {
            // console.log(event.target.dataset.pagination);
            console.log(this.isPrev);
            this.$store.dispatch('updatePages', this.isPrev);
        },
        handleNext() {
            // console.log(event);
            // console.log(this.$store.state.pages);
            console.log(this.isNext);
            this.$store.dispatch('updatePages', this.isNext);
        },
        handleFirst() {
            // console.log(event);
            // console.log(this.$store.state.pages);
            console.log(this.isFirst);
            this.$store.dispatch('updatePages', this.isFirst);
        },
        handleLast() {
            // console.log(event);
            // console.log(this.$store.state.pages);
            console.log(this.isLastt);
            this.$store.dispatch('updatePages', this.isLast);
        },
        handlePage(event) {
            console.log(this.isNext);
            this.$store.dispatch('backPage', event.target.textContent);
        }

    },
    computed: {
        isFirst() {
            return this.$store.getters.isFirst;
        },
        isPrev() {
            return this.$store.getters.isPrev;
        },
        isNext() {
            return this.$store.getters.isNext;
        },
        isLast() {
            return this.$store.getters.isLast
        },
    }

}
</script>

<style>
.sectionPagination {
    margin: 10px 20px;
    display: flex;
    justify-content: center;
}

.pagination {
    font-weight: 700;
    font-size: 1rem;
    color: rgb(110, 175, 125);
    border: 1px solid rgb(63, 115, 75);
    padding: 10px;
    border-radius: 10px;
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.pagination:hover {
    color: white;
    border: 1px solid rgb(110, 175, 125);
    background-color: rgb(63, 115, 75);
    transform: scale(1.1);
}


.paginationCurrent {
    font-size: 1.5rem;
    width: max-content;
    height: max-content;
    margin: 0 10px;
    color : var(--texteColor);
}
.etc{
    margin : 0 5px;
}

.prev{
    margin : 0 10px 0 0;
}

.next{
    margin : 0 0 0 10px;
}
</style>