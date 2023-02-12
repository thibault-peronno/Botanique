<template>
    <section class="sectionPagination">
        <div 
            class="pagination paginationPrevious" 
            v-on:click="handlePrevious" 
            v-if="this.$store.state.pages > 1"
        >
            <span data-pagination="previous">
                &#12296;
            </span>
        </div>
        <div 
            class="pagination paginationBefore paginationOne" 
            v-if="this.$store.state.pages > 2 || this.$store.state.pages == 1" @click="handlePage"
        >
            1
        </div>
        <p v-if="this.$store.state.pages > 3">...</p>
        <div 
            class="pagination paginationBefore" 
            v-if="this.$store.state.pages >= 2" 
            @click="handlePage"
        >
            {{ this.$store.state.pages - 1 }}
        </div>
        <div 
            class="pagination paginationCurrent" 
            v-if="this.$store.state.pages > 1" 
            @click="handlePage"
        >
            {{ this.$store.state.pages }}
        </div>
        <div 
            class="pagination paginationNext" 
            @click="handleNext" 
            data-pagination="next"
        >
            <span data-pagination="next">
                &#12297;
            </span>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        
        return {
        }
    },
    
    methods: {
        handlePrevious(event) {
            // console.log(event.target.dataset.pagination);
            // console.log(this.$store.state.pages);
            this.$store.dispatch('updatePages', event.target.dataset.pagination);
        },
        handleNext(event) {
            // console.log(event);
            // console.log(this.$store.state.pages);
            this.$store.dispatch('updatePages', event.target.dataset.pagination);
        },
        handlePage(event) {
            // console.log(event.target.textContent);
            this.$store.dispatch('backPage', event.target.textContent);
        }

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
    font-size: 1.2rem;
    color: rgb(110, 175, 125);
    border: 1px solid rgb(63, 115, 75);
    padding: 5px;
    border-radius: 10px;
    width: 50px;
    height: 50px;
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

.paginationPrevious {
    margin-right: 10px;
}

.paginationNext {
    margin-left: 10px;
}

.paginationCurrent{
    width: 40px;
    height: 40px;
    margin-left: 10px;
}

.paginationBefore{
    width: 30px;
    height: 30px;
    margin-left: 10px;
}

.paginationOne{
    margin: 0 10px 0 0;
}
</style>