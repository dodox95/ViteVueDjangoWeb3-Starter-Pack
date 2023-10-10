<!-- Cards.vue -->
<template>
    <div class="flex items-center justify-center w-screen min-h-screen p-10">
        <!-- Resice the preview panel to check the responsiveness -->

        <!-- Component Start -->
        <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
            <!-- The tiles go here -->
            <!-- For brevity, I'm only going to include one tile as an example; 
                 you can replicate it for the rest -->
            <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                <div class="h-40 bg-gray-400 rounded-lg" style="
                background-image: url(https://img.jakpost.net/c/2017/01/26/2017_01_26_20163_1485417604._large.jpg);
                background-repeat: no-repeat;
                background-attachment: cover;
                background-position: center;"></div>
                <div class="flex flex-col items-start mt-4">
                    <h4 class="text-xl font-semibold">Heading</h4>
                    <p class="text-sm">Some text about the thing that goes over a few lines.</p>
                    <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a>
                </div>
            </div>
            <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                <div class="h-40 bg-gray-400 rounded-lg" style="
                background-image: url(https://img.jakpost.net/c/2017/01/26/2017_01_26_20163_1485417604._large.jpg);
                background-repeat: no-repeat;
                background-attachment: cover;
                background-position: center;"></div>
                <div class="flex flex-col items-start mt-4">
                    <h4 class="text-xl font-semibold">Heading</h4>
                    <p class="text-sm">Some text about the thing that goes over a few lines.</p>
                    <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a>
                </div>
            </div>
            <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                <div class="h-40 bg-gray-400 rounded-lg" style="
                background-image: url(https://img.jakpost.net/c/2017/01/26/2017_01_26_20163_1485417604._large.jpg);
                background-repeat: no-repeat;
                background-attachment: cover;
                background-position: center;"></div>
                <div class="flex flex-col items-start mt-4">
                    <h4 class="text-xl font-semibold">Heading</h4>
                    <p class="text-sm">Some text about the thing that goes over a few lines.</p>
                    <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a>
                </div>
            </div>
            <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                <div class="h-40 bg-gray-400 rounded-lg" style="
                background-image: url(https://img.jakpost.net/c/2017/01/26/2017_01_26_20163_1485417604._large.jpg);
                background-repeat: no-repeat;
                background-attachment: cover;
                background-position: center;"></div>
                <div class="flex flex-col items-start mt-4">
                    <h4 class="text-xl font-semibold">Heading</h4>
                    <p class="text-sm">Some text about the thing that goes over a few lines.</p>
                    <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a>
                </div>
            </div>
            <!-- Add the other tiles by copying the above template -->
        </div>
        <!-- Component End  -->
    </div>

    
</template>

<script>
export default {
    name: 'Cards',
    // You can add your component logic here
}
</script>

<style scoped>
    /* You can add your component-specific styles here if needed */
</style>
